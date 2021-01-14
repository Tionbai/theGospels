const fs = require('fs').promises;
const path = require('path');
const matthew = require('../gospels/matthew.json');
const mark = require('../gospels/mark.json');
const luke = require('../gospels/luke.json');
const john = require('../gospels/john.json');

const gospels = [matthew, mark, luke, john];

/* Create new verse of the day based on input.
Takes 4 arguments:
integer = indexInput (based on existing file array length)
string = bookInput
integer = chapterInput
array with integer(s) = verseInput
*/
const createVerseOfTheDay = (
  indexInput,
  bookInput,
  chapterInput,
  verseInput,
) => {
  const verseOfTheDay = {
    id: indexInput,
    book: bookInput,
    chapter: chapterInput,
    verse: verseInput,
    text: [],
  };
  // Match the input data with data from gospels //
  const book = gospels.find(
    (b) => b.name.toLowerCase() === verseOfTheDay.book.toLowerCase(),
  );
  const chapter = book.chapters.filter(
    (chapters) => chapters.id === verseOfTheDay.chapter,
  );
  const verse = [];
  verseOfTheDay.verse.map((v) => {
    const newVerse = chapter[0].verses.filter((v2) => v2.id === v);
    verse.push(newVerse[0]);
    return verse;
  });
  // Add text from gospels json to verse of the day json //
  let text = [];
  verse.map((v) => {
    text = [...text, v.text];
    return text;
  });
  verseOfTheDay.text = text;
  return verseOfTheDay;
};

/* Write new verse of the day to file based on input.
Takes 3 arguments:
string = bookInput,
integer = chapterInput,
array with integer(s) = verseInput
*/
/* eslint-disable-next-line */
const writeVerseOfTheDayToFile = async (
  bookInput,
  chapterInput,
  verseInput,
) => {
  if (
    typeof bookInput !== 'string' ||
    typeof chapterInput !== 'number' ||
    typeof verseInput !== 'object'
  )
    throw new Error('Error: Check input types');

  const filePath = './versesOfTheDay.json';
  try {
    // Read existing file
    const data = await fs.readFile(path.resolve(__dirname, filePath));
    // Write backup file
    const existingFile = JSON.parse(data);
    await fs.writeFile(
      path.resolve(__dirname, `${filePath} backup`),
      JSON.stringify(existingFile, null, 2),
    );
    // Add new passage to file
    const newFile = { ...existingFile };
    const nextIndex = newFile.versesOfTheDay.length + 1;
    await newFile.versesOfTheDay.push(
      createVerseOfTheDay(
        nextIndex,
        bookInput,
        chapterInput,
        verseInput,
      ),
    );
    // Write new file
    await fs.writeFile(
      path.resolve(__dirname, filePath),
      JSON.stringify(newFile, null, 2),
    );
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};
