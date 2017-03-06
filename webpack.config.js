var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
          ],
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000!img?progressive=true'
    }
    ]
  },
  devServer: {
    stats: 'errors-only'
  }


};
