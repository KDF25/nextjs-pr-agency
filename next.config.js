// next.config.js

/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "venconbucket.s3.eu-north-1.amazonaws.com",
    ],
  },
  // i18n, // Включаем конфигурацию i18n в основной конфигурационный объект
};

module.exports = nextConfig;
