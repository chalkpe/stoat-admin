/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['revolt-nodejs-bindings'],
  experimental: {
    reactCompiler: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'revolt-nodejs-bindings': 'commonjs revolt-nodejs-bindings',
      });
    }
    return config;
  },
};

module.exports = nextConfig;
