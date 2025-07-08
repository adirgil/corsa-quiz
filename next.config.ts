import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "picsum.photos",
      "ui-avatars.com",
      "placehold.co",
      "api.dicebear.com",
    ],
  },
  devIndicators: false,
};

export default nextConfig;
