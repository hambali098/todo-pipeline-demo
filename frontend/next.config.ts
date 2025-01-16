import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Tambahkan konfigurasi untuk static assets
  images: {
    unoptimized: true
  }
};

export default nextConfig;