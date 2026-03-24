import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Исправляет ошибку с canvas в react-pdf (pdf.js зависимость)
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
