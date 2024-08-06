const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/js/main.js",
    output: {
      filename: "assets/js/bundle.js",
      path: path.resolve(__dirname, isProduction ? "build" : "public"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: !isProduction },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: !isProduction },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/main.css",
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      hot: true,
      open: true,
      port: 3000,
    },
    watch: !isProduction,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000, // Check for changes every second
    },
  };
};
