#!/usr/bin/env python3
"""
Submit every URL from your sitemap to the Google Indexing API (URL_UPDATED).

Prerequisites (Google Cloud):
  1. Enable "Indexing API" for a GCP project.
  2. Create a service account with access to the Indexing API.
  3. In Google Search Console → Settings → Users and permissions → Add the service
     account email as an *Owner* (required for Indexing API on that property).

Environment:
  GOOGLE_APPLICATION_CREDENTIALS  Path to the service account JSON key file.
  SITEMAP_URL                     Optional. Default: https://panduchunduri.com/sitemap.xml

Install:
  pip install -r scripts/requirements-indexing.txt

Usage:
  export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
  python scripts/google_indexing_submit.py

Notes:
  - Daily URL quota is limited (on the order of hundreds per day for many accounts).
  - This does not replace sitemap submission in Search Console; use both.
"""

from __future__ import annotations

import os
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET
from typing import Iterable

try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
except ImportError:
    print("Missing dependencies. Run: pip install -r scripts/requirements-indexing.txt", file=sys.stderr)
    sys.exit(1)

SCOPES = ("https://www.googleapis.com/auth/indexing",)


def load_urls_from_sitemap(sitemap_url: str) -> list[str]:
    with urllib.request.urlopen(sitemap_url, timeout=60) as resp:
        raw = resp.read()
    root = ET.fromstring(raw)
    urls: list[str] = []
    for el in root.iter():
        if el.tag.endswith("loc") and el.text:
            urls.append(el.text.strip())
    if not urls:
        raise SystemExit(f"No <loc> entries found in sitemap: {sitemap_url}")
    return urls


def iter_notifications(urls: Iterable[str]) -> None:
    cred_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if not cred_path or not os.path.isfile(cred_path):
        raise SystemExit("Set GOOGLE_APPLICATION_CREDENTIALS to your service account JSON path.")

    creds = service_account.Credentials.from_service_account_file(cred_path, scopes=SCOPES)
    service = build("indexing", "v3", credentials=creds, cache_discovery=False)

    for url in urls:
        body = {"url": url, "type": "URL_UPDATED"}
        try:
            service.urlNotifications().publish(body=body).execute()
            print("OK", url)
        except Exception as e:  # noqa: BLE001 — surface API errors to operator
            print("ERR", url, e, file=sys.stderr)
        time.sleep(0.15)


def main() -> None:
    default_site = os.environ.get("NEXT_PUBLIC_SITE_URL", "https://panduchunduri.com").rstrip("/")
    sitemap_url = os.environ.get("SITEMAP_URL", f"{default_site}/sitemap.xml")
    urls = load_urls_from_sitemap(sitemap_url)
    print(f"Loaded {len(urls)} URL(s) from {sitemap_url}")
    iter_notifications(urls)


if __name__ == "__main__":
    main()
