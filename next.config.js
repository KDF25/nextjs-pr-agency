// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "static.wixstatic.com",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "venconbucket.s3.eu-north-1.amazonaws.com",
        port: '',
      },
    ],
  },
};


module.exports = nextConfig;
