const express = require('express');
const matthew = require('./gospels/matthew.json');
const mark = require('./gospels/mark.json');
const luke = require('./gospels/luke.json');
const john = require('./gospels/john.json');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/bible/matthew', (req, res) => {
  res.json(matthew);
})

app.get('/api/bible/mark', (req, res) => {
  res.json(mark)
})

app.get('/api/bible/luke', (req, res) => {
  res.json(luke)
})

app.get('/api/bible/john', (req, res) => {
  res.json(john)
})

// app.get('/api/bible/chapter/:id', (req, res) => {
//   const found = matthew.chapter.some(chapter => chapter.id === parseInt(req.params.id));

//   if(found) {
//     res.json(matthew.chapter.filter(chapter => chapter.id === parseInt(req.params.id)))
//   } else {
//     res.json(420, { message: `Chapter ${req.params.id} does not exist.` } )
//   }

// })

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`)); 