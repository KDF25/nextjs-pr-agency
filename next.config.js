// next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "venconbucket.s3.eu-north-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
