const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "@babel/polyfill",
    "webpack-hot-middleware/client?host=https://quiq-andrew.ngrok.io",
    "./app/main"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    },
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
              ["@babel/plugin-proposal-class-properties", {loose: true}],
              "react-hot-loader/babel"
            ]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({favicon: false}),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true)
    })
  ]
};
