import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
      };
    }

    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    });

    config.cache = false;

    config.plugins.push(new NodePolyfillPlugin());

    // Add a custom rule to handle node: scheme
    config.module.rules.push({
      test: /\.js$/,
      loader: 'string-replace-loader',
      options: {
        search: 'node:',
        replace: '',
      },
    });

    return config;
  },
  experimental: {
    turbo: false,
  }
};

export default nextConfig;
