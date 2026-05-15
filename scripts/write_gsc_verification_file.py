#!/usr/bin/env python3
"""
Write the Google Search Console HTML verification file into /public so Next.js serves it at /FILENAME.

Google Search Console → property → Verification → HTML file method gives you:
  - An exact filename, e.g. google9f7a2b1c3d4e5f6g.html
  - A single line of file content (shown in the download / instructions)

Usage:
  python scripts/write_gsc_verification_file.py google9f7a2b1c3d4e5f6g.html "google-site-verification: google9f7a2b1c3d4e5f6g.html"

This creates public/google9f7a2b1c3d4e5f6g.html with that exact content (UTF-8, no BOM).
After deploy, click Verify in Search Console.
"""

from __future__ import annotations

import sys
from pathlib import Path


def main() -> None:
    if len(sys.argv) != 3:
        print(__doc__, file=sys.stderr)
        sys.exit(2)
    filename = sys.argv[1].strip()
    content = sys.argv[2].strip()
    if not filename.endswith(".html"):
        print("Filename should end with .html (as provided by Google).", file=sys.stderr)
        sys.exit(2)
    root = Path(__file__).resolve().parents[1]
    public = root / "public" / filename
    public.write_text(content + "\n", encoding="utf-8")
    print(f"Wrote {public}")


if __name__ == "__main__":
    main()
