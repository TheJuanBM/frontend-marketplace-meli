/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  images: {
    domains: ["http://http2.mlstatic.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http2.mlstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
