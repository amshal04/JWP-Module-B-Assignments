import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* online multiple image hostname */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com"
      },
      {
        hostname: "images.pexels.com"
      },
      {
        hostname: "media.istockphoto.com"
      }
    ]
  }
};

export default nextConfig;
