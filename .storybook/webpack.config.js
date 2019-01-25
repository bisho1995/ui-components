const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function(config, env, storybookBaseConfig) {
  // console.log(storybookBaseConfig);
  // config = storybookBaseConfig(config, env);

  // To show JSX in storybook:
  // Transpile TSX to JSX with "preserve"
  // Use babel to transpile JSX to ES5 JS
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: [/node_modules/, /test_image/, /packages/],
    include: [/stories/, /components/, /src/],
    loaders: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.css$/,
    loader: 'css-loader',
  });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: [/\.module.scss$/],
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  config.module.rules.push({
    exclude: [
      /\.html$/,
      /\.(js|jsx|ts|tsx)$/,
      /\.css$/,
      /\.scss$/,
      /\.json$/,
      // /\.svg$/,
      /\.hbs$/,
      /\.ejs$/,
      // This one is for the google loader specifically
      /jsapi$/,
    ],
    loader: 'file-loader',
    query: {
      // limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]',
      outputPath: 'dist/',
    },
  });

  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  config.resolve.mainFiles = ['index'];
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.jsx');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.scss');

  config.plugins = config.plugins.filter(
    plugin => plugin.constructor.name !== 'UglifyJsPlugin'
  );

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      workers: 2,
    })
  );

  return config;
};
