/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@mathtechlab/design-system",
    "@mathtechlab/ui",
  ],
  webpack: (config) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './app'),
    };
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          // This policy allows the opener relationship to persist for same-origin popups
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          // You might also need this in some scenarios, but start with COOP:
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
    ];
  },
}
