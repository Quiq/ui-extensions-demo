const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./app/main"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ["@babel/preset-env", {targets: {browsers: "last 2 versions"}}],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", {legacy: true}],
              ["@babel/plugin-proposal-class-properties", {loose: true}]
            ]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      favicon: false,
      template: "index.ejs"
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(false)
    })
  ]
};
