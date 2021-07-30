/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: [
      'monkfish68c6aa149d6643fa8ec875b634129e3914450-staging.s3.us-east-1.amazonaws.com',
    ],
  },
})
