const webpack = require('webpack');

module.exports = {
  // ... other webpack configurations
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};