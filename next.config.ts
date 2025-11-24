import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/pdf/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline; filename=pitch.pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
