/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images are local public assets, so avoid a remote optimizer dependency.
    unoptimized: true,
  },
};

module.exports = nextConfig;
