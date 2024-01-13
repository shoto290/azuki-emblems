/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["img.reservoir.tools"],
  },
};

module.exports = nextConfig;
