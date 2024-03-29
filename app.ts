import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import * as config from './webpack.config.dev';

const app = express(),
  DIST_DIR = path.join(__dirname, 'public'),
  compiler = webpack(config),
  isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    writeToDisk: true,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(DIST_DIR));

// app.get('/', (req, res) => {
//   res.sendFile(HTML_FILE)
// });

export { app }