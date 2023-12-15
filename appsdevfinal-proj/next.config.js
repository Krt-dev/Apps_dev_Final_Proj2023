/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "images.unsplash.com",
        },
        {
          hostname: "unsplash.com",
        },
      ],
      domains: ["plus.unsplash.com"],
    },
    env: {
      metadataBase: 'http://localhost:3000/cart',
    },
  };
  
  module.exports = nextConfig;
  