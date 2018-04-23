const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "SmartHomeConnector.js",
    library: "SmartHomeConnector",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  target: "node",
  node: {
    process: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
