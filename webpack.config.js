module.exports = {
  entry: ["./entry.js", "./dan.js"],
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
   ],
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
       test: /\.js$/,
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
