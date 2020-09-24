import React, { useState, useEffect } from 'react'

export default function Filter(props) {
  const {
    chapter,
    search,
  } = props;

  const [filteredText, setFilteredText] = useState([]);

  useEffect(() => {
    setFilteredText(
      chapter.filter((verse) => verse.text.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, chapter]);

  return (
    <section className="Chapter__container">
      {filteredText.map((verse) => (
        <article key={verse.id} className="Chapter__verse">
          <p className="Chapter__verse--id">{verse.id}</p>
          <p className="Chapter__verse--text">{` ${verse.text} `}</p>
        </article>
      ))}
    </section>
  )
}
