const express = require('express');
const bodyParser = require('body-parser');
const matthew = require('./gospels/matthew.json');
const mark = require('./gospels/mark.json');
const luke = require('./gospels/luke.json');
const john = require('./gospels/john.json');

const app = express();

const gospels = [matthew, mark, luke, john];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/bible/:id', (req, res) => {
  const gospel = gospels.find(
    (g) => g.name.toLowerCase() === req.params.id.toLowerCase(),
  );

  if (!gospel)
    res.status(404).send('The page you requested does not exist.');
  res.json(gospel);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
