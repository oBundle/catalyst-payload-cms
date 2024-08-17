const { withPayload } = require("@payloadcms/next/withPayload");
// @ts-check
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const { cspHeader } = require('./lib/content-security-policy');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@icons-pack/react-simple-icons'],
  },
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
    dirs: ['app', 'client', 'components', 'lib', 'middlewares'],
  },
  webpack: (config, { isServer }) => {
    if (process.env.NODE_V8_COVERAGE) {
      Object.defineProperty(config, 'devtool', {
        get() {
          return 'source-map';
        },
        set() {},
      });
    }

    // Limit the number of chunks to reduce CDN requests, which contribute to Edge Request costs
    if (!isServer) {
      config.plugins.push(
        new (require('webpack').optimize.LimitChunkCountPlugin)({
          maxChunks: process.env.WEBPACK_MAX_CHUNKS
            ? parseInt(process.env.WEBPACK_MAX_CHUNKS, 10)
            : 5,
        }),
      );
    }

    return config;
  },
  // default URL generation in BigCommerce uses trailing slash
  trailingSlash: process.env.TRAILING_SLASH !== 'false',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

module.exports = withPayload(withNextIntl(nextConfig));
