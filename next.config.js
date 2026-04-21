/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async headers() {
    return [];
  }
};

module.exports = nextConfig;
