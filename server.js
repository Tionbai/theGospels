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

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));