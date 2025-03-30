import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }
    return config;
  },
  images: {
    domains: ['fastly.4sqi.net', 'ss3.4sqi.net', 'flagsapi.com']
  }
};

export default nextConfig;