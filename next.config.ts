
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "educationsnapshots.com",
      },
      {
        protocol: "https",
        hostname: "spaces4learning.com",
      },
    ],
  },
};

export default nextConfig;
