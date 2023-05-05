const express = require('express')
const app = express()
const body = [
  { id: 1, name: '冷雪瞳', age: 21},
  { id: 2, name: '舒月舞', age: 21},
  { id: 3, name: '夏婠婠', age: 21},
]

app.get('/api/getList', (req, res) => {
  res.send(body)
})

app.listen(9999,() => {
  console.log('http://localhost:9999');
})
