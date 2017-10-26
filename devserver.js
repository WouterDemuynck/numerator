var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

function startServer() {
    console.log('STARTING')
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
	disableHostCheck: true,
    stats: {
      chunks: false, // Makes the build much quieter
      colors: true
    },
    hot: true
  }).listen(3042, function (err, result) {
      console.log('STARTED')
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://<any>:3042/');
    console.log('Listening at http://localhost:3042');
  });
}

startServer()