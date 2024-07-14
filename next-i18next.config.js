// next-i18next.config.js

const path = require('path');

module.exports = {
  i18n: {
    locales: ["ru", "en", "uz"],
    defaultLocale: "ru",
    localePath: path.resolve('./public/locales'),
  }
};
