const path = require('path');

module.exports = {
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /(node_modules)/,
        use: {
	  loader: 'babel-loader',
	},
      }
    ]
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist')
  }
};