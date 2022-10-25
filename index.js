const express = require('express')
const app = express()
const cors = require('cors')
const port =process.env.PORT || 5000

app.use(cors())
const categories = require('./data/categories.json')
const courses =require('./data/courses.json')

app.get('/', (req, res)=>{
  res.send('Api running')
})

app.get('/web-categories', (req, res)=>{
  res.send(categories)
})

app.get('/categories', (req, res) =>{
  const allCourses= courses.map(c=>c)
  res.send(allCourses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id
  const selectedCourse = courses.find(c => c.category_id === id)
  console.log(selectedCourse)
  res.send(selectedCourse)
})

app.listen(port, () =>{
  console.log('Server is running on port:', port)
})