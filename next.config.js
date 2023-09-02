/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Ganti 'example.com' dengan domain dari mana Anda ingin memuat gambar.
  },
};

module.exports = nextConfig;
