import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';

const Bible = () => {
  const [chapter, setChapter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredVerses, setFilteredVerses] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setFilteredVerses(
      chapter.filter((verse) => verse.text.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, chapter]);

  const renderChapter = (book) => {
    fetch(`/api/bible/${book}`)
      .then((res) => res.json())
      .then((data) => {
        setChapter(data.chapter[0].verse);
      });
  };

  const refresh = () => {
    setChapter([]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="App">
      <h1
        className="Header__title"
        role="presentation"
        onClick={() => {
          refresh();
        }}
      >
        The Gospels
      </h1>

      <Navbar updateChapter={renderChapter} updateSearch={setSearch} />

      <input className="Search" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />

      <section className="Chapter__container">
        {filteredVerses.map((verse) => (
          <article key={verse.id} className="Chapter__verse">
            <p className="Chapter__verse--id">{verse.id}</p>
            <p className="Chapter__verse--text">{` ${verse.text} `}</p>
          </article>
        ))}
      </section>

    </main>
  );
};

export default Bible;
