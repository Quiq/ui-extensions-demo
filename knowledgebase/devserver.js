const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.development");

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  headers: {"Access-Control-Allow-Origin": "*"},
  hot: true,
  clientLogLevel: "error",
  overlay: true,
  historyApiFallback: true,
  disableHostCheck: true,
  stats: {
    assets: false,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    depth: false,
    entrypoints: true,
    excludeAssets: /app\/assets/,
    excludeModules: /\/node_modules\/(?!(core-ui|core-agent-ui)\/).*/,
    hash: false,
    maxModules: 15,
    modules: false,
    performance: true,
    reasons: false,
    source: false,
    timings: true,
    version: false,
    warnings: true
  }
}).listen(3000, "0.0.0.0", () => {
  console.log("Starting server on http://localhost:3000");
});
