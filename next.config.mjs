/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Legacy Squarespace URLs Google still has indexed. Literal 301s
  // (Next's `permanent: true` would send 308). `:path*` also matches
  // the bare parent path.
  // Keep dev.portaldancelab.com and other non-production builds out of search.
  // VERCEL_ENV is "production" only for the live site.
  async headers() {
    if (process.env.VERCEL_ENV === "production") return [];
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },

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
