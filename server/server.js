const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const matthew = require('./gospels/matthew.json');
const mark = require('./gospels/mark.json');
const luke = require('./gospels/luke.json');
const john = require('./gospels/john.json');
const versesOfTheDay = require('./verseOfTheDay/versesOfTheDay.json');

const app = express();

const gospels = [matthew, mark, luke, john];

const getPassage = () => {
  let dailyVerse = 1;
  const dailyVersesAmount = versesOfTheDay.versesOfTheDay.length;
  const dayOfYear = moment().dayOfYear();

  // If day of year is greater than amount of daily verses, reset daily verses to 1 //
  if (dayOfYear > dailyVersesAmount) {
    for (let i = 1; dailyVersesAmount * i < dayOfYear; i += 1) {
      dailyVerse =
        versesOfTheDay.versesOfTheDay[
          dayOfYear - 1 - dailyVersesAmount * i
        ];
    }
    return dailyVerse;
  }

  dailyVerse = versesOfTheDay.versesOfTheDay[dayOfYear - 1];
  return dailyVerse;
};

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/verseOfTheDay', (req, res) => {
  res.status(200).send(getPassage());
});

app.get('/api/bible/:id', (req, res) => {
  const book = gospels.find(
    (b) => b.name.toLowerCase() === req.params.id.toLowerCase(),
  );

  if (!book)
    res.status(404).send('The page you requested does not exist.');
  res.json(book);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
