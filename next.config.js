/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://portofolio-taupe.vercel.app"], // Ganti 'example.com' dengan domain dari mana Anda ingin memuat gambar.
  },
};

module.exports = nextConfig;
