/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    // Images are local public assets, so avoid a remote optimizer dependency.
    unoptimized: true,
  },
};

module.exports = nextConfig;
