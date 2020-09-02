const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: [
    "./src/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      }
    ]
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
}
