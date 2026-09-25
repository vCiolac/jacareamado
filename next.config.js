/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // next/image entrega AVIF/WebP automaticamente, com fallback
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
