const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: "web",
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "blocjs.js",
    library: "Bloc",
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this",
    umdNamedDefine: true
  },
  resolve: {
    extensions: [".js"]
  }
};
