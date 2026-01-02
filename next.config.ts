import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: '/**'
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: '/**'
      },
    ]
  }
};

export default nextConfig;
