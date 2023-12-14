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
  };
  
  module.exports = nextConfig;
  