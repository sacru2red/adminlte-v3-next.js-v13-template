const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: (fileName, options) => options.query.type || 'scoped'
          }
        }
      ]
    })

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "node_modules/admin-lte/dist", to: "public/admin-lte" },
        ],
      }),
    )

    return config
  }
}

module.exports = nextConfig
