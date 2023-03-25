/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: false,
  images: {
    domains: ["api.skinsdojo.com", "steamcommunity-a.akamaihd.net",'avatars.akamai.steamstatic.com'],
  },
};
