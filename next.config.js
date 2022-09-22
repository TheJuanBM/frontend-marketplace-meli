/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  images: {
    domains: ["http://http2.mlstatic.com", "https://http2.mlstatic.com"],
    remotePatterns: [
      { protocol: "http", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "http2.mlstatic.com" },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
