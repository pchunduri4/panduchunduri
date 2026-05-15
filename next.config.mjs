/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/lab", destination: "/production-frameworks", permanent: true },
      { source: "/lab/:path*", destination: "/production-frameworks/:path*", permanent: true },
    ]
  },
}

export default nextConfig
