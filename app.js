require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
