var path = require('path');
module.exports = {
  // entry file
  entry: './src/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  // we will use webpack-dev-server
  devServer: {
    inline: true, // reload on the fly (auto refresh)
    port: 8000 // which port to run the server on
  },
  module: {
    // loaders are transformers basically
    loaders: [
      {
        // All files that end with `.js`
        test: /\.jsx?$/,
        // Do not consider node_modules for webpack bundling
        exclude: /node_modules/,
        // use babel as the loader (transformer)
        loader: 'babel',
        // Passing queries/arguments to the loader
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?a?c?ss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
}

