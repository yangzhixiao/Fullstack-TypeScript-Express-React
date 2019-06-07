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
  res.redirect(301, '/')
});

app.listen(process.env.PORT || 4200, () => {
  console.log('server up successfully.')
});