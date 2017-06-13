module.exports = {
  entry: ["./entry.js", "./dan.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
       test: [/\.es6$/, /\.js/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
