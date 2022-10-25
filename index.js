const express = require('express')
const app = express()
const port =process.env.PORT || 5000

const categories = require('./data/categories.json')

app.get('/', (req, res)=>{
  res.send('Api running')
})

app.get('/web-categories', (req, res)=>{
  res.send(categories)
})

app.listen(port, () =>{
  console.log('Server is running on port:', port)
})