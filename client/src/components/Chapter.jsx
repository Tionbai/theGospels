import React, { useState, useEffect, useContext } from 'react';
import { GospelContext } from '../GospelContext';
import './styles/Chapter.css';

export default function Chapter() {
  const { chapterContext, searchContext } = useContext(GospelContext);

  const [chapter] = chapterContext;
  const [search] = searchContext;

  const [filteredText, setFilteredText] = useState([]);

  useEffect(() => {
    setFilteredText(
      chapter.filter((verse) =>
        verse.text.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search, chapter]);

  return (
    <section className="Chapter">
      {filteredText.map((verse) => (
        <article key={verse.id} className="Chapter__verse">
          <p className="Chapter__verse--id">{verse.id}</p>
          <p className="Chapter__verse--text">{` ${verse.text} `}</p>
        </article>
      ))}
    </section>
  );
}
