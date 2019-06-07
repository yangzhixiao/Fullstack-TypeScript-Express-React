const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express(),
  DIST_DIR = path.join(__dirname, 'build'),
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config),
  isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(DIST_DIR));
}

app.get('/', (req, res) => res.sendFile(HTML_FILE));
app.get('*', (req, res) => res.redirect(301, '/'));

app.listen(process.env.PORT || 4200, () => {
  console.log('server up')
});