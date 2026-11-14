/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Legacy Squarespace URLs Google still has indexed. Literal 301s
  // (Next's `permanent: true` would send 308). `:path*` also matches
  // the bare parent path.
  async redirects() {
    return [
      { source: "/portfolio-3/:path*", destination: "/teams", statusCode: 301 },
      { source: "/upcoming-events/:path*", destination: "/schedule", statusCode: 301 },
      { source: "/merch/:path*", destination: "/", statusCode: 301 },
      { source: "/sponsors", destination: "/about", statusCode: 301 },
    ];
  },
};

export default nextConfig;
