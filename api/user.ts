import { app } from '../app'

app.use('/api/hi', (req, res) => {
  res.send('hello')
})