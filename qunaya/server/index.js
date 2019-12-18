const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.status(200)
  response.send('<h1>hello express</h1>')
  response.end()
})

app.get('/rest', (req, res) => {
  const obj = {
    result: 1,
    msg: 'response success',
    data: [1,2,3,4,5]
  }
  
  res.json(obj)
})

app.listen(9090)
