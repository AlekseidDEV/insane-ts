const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  mode: "development",
  entry: {
    layout: path.resolve(__dirname, "src", "index.ts"),
    admin: path.resolve(__dirname, "src",  "tablePage.ts"),
    autho: path.resolve(__dirname, "src", "autorizedPage.ts"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
