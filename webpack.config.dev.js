var webpack = require('webpack');

var webpackConfig = {
	cache: true,
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3042',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};

module.exports = webpackConfig
