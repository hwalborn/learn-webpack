module.exports = {
  entry: ["./entry.js", "./dan.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
}
