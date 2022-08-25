const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/Index.js",           //Main file of our react apllication
  output: {
    path: path.resolve(__dirname, "dist"),   //root dir to store output file in.
    filename: "bundle.js",                   //filename pattern to use for generated files
    publicPath:"/"           //The path to the root directory where the files will be deployed on the web server.
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin({ template: "./public/index.html" })],
};
