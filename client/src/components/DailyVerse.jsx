import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import './styles/DailyVerse.css';

export default function DailyVerse() {
  const [bibleVerse, setBibleVerse] = useState(null);

  const fetchVerseOfTheDay = async () => {
    const res = await fetch('/verseOfTheDay');
    const data = await res.json();
    if (data.verse.length > 1) {
      data.formattedVerse = `${data.verse[0]}-${
        data.verse[data.verse.length - 1]
      }`;
    }
    data.formattedText = `"${data.text.join('@')}"`.split('@');
    setBibleVerse(data);
  };

  useEffect(() => {
    fetchVerseOfTheDay();
  }, []);

  return !bibleVerse ? (
    <h4>Loading... </h4>
  ) : (
    <section className="DailyVerse__container">
      <h3 className="DailyVerse__header">
        Daily verse{' '}
        <span className="DailyVerse__date">
          {moment().format('MMM Do YY')}
        </span>
      </h3>
      <article className="DailyVerse">
        <h4 className="DailyVerse__book">
          {bibleVerse.book}{' '}
          <span className="DailyVerse__chapter-verse">
            {' '}
            {bibleVerse.chapter}:
            {bibleVerse.verse.length === 1
              ? bibleVerse.verse
              : bibleVerse.formattedVerse}
          </span>
        </h4>
        {bibleVerse.formattedText.map((text) => (
          <p key={uuidv4()} className="DailyVerse__text">
            {text}
          </p>
        ))}
      </article>
    </section>
  );
}
