module.exports = {
  entry: "./index.js",
  output: {
    filename: "./public/bundle.js"
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
