/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true
  }
}

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

module.exports = withImages(withTM(nextConfig))