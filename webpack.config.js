module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=react&presets[]=es2015' }
    ]
  }
}
