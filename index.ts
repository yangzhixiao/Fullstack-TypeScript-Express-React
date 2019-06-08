import * as path from 'path';
import * as fs from 'fs';
import { app } from './app'
import './api'

app.get('*', (req, res) => {
  if (req.path.match(/\/([^\/]+)$/g)) {
    const filename = req.path.match(/\/([^\/]+)$/)[1]
    const p = path.resolve(__dirname, filename)
    if (fs.existsSync(p)) {
        return res.sendFile(p)
    }
  }
  if (process.env.NODE_ENV === 'development') {
    res.sendFile(path.resolve('build', 'index.html'))
  } else {
    res.sendFile(path.resolve('public', 'index.html'))
  }
});

app.listen(process.env.PORT || 4200, () => {
  console.log('server up successfully.')
});