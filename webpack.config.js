const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./Src/Index.js",
  output: {
    path: path.resolve(__dirname, "./Static/Frondend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp?g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
