const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const Environment = {
  Production: 'production',
  Development: 'development',
};

module.exports = function generateWebpackConfig(environment) {
  const defaultConfig = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'server.js',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts'],
    },
    target: 'node',
    externals: [
      nodeExternals({
        additionalModuleDirs: [path.resolve(__dirname, '../../node_modules')],
      }),
    ],
    plugins: [
      new CopyPlugin({
        patterns: [
          'package.json',
          {
            from: path.resolve(__dirname, '..', '..', 'yarn.lock'),
            to: 'yarn.lock',
          },
        ],
      }),
    ],
    node: false,
  };

  let config;

  switch (environment) {
    case Environment.Development: {
      config = {
        ...defaultConfig,
        mode: 'development',
      };

      break;
    }
    case Environment.Production: {
      config = {
        ...defaultConfig,
        mode: 'production',
      };

      break;
    }
    default: {
      throw new Error(`Received unknown environment: '${environment}'`);
    }
  }

  return config;
};
