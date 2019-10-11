const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
          use: [
          "style-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [ require("postcss-import")]
            }
          }
          ]
        }
    ]
  }
};
