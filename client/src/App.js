import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Pages from './components/Pages';

const Bible = () => {
  const [bible, setBible] = useState([]);
  const [book, setBook] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredText, setFilteredText] = useState([]);
  const [reading, setReading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  const gospels = ['Matthew', 'Mark', 'Luke', 'John'];

  useEffect(() => {
    setFilteredText(
      chapter.filter((verse) => verse.text.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, chapter]);

  useEffect(() => {
    const fetchGospels = () => {
      const fetchedGospels = [];
      gospels.map(async (gospel) => {
        const response = await fetch(`/api/bible/${gospel}`);
        const data = await response.json();
        fetchedGospels.push(data);
        setBible([...fetchedGospels]);
      })
    }
    fetchGospels();
  }, [])

  const renderChapter = (gospel, chapterIndex = 0) => {
    const index = gospels.indexOf(gospel);
    const book = bible[index];
    setChapter(book.chapters[chapterIndex].verses)
    setCurrentPage(chapterIndex)
    setBook(bible[gospels.indexOf(gospel)]);
    setPageNumbers(book.chapters.length - 1);
    setReading(true);
  }

  const renderPage = (direction) => {
    switch (direction) {
      case -1:
        currentPage > 0 && setChapter(book.chapters[currentPage - 1].verses);
        currentPage > 0 && setCurrentPage(currentPage - 1);
        break;
      case 1:
        currentPage < pageNumbers && setChapter(book.chapters[currentPage + 1].verses);
        currentPage < pageNumbers && setCurrentPage(currentPage + 1)
        break;
      default:
        break;
    }
  }

  const refresh = () => {
    setBook([]);
    setChapter([]);
    setReading(false);
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

      <Navbar updateChapter={renderChapter} updateSearch={setSearch} gospels={gospels} />

      {reading && <input className="Search" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />}

      {reading && <Pages updatePage={renderPage} updateSearch={setSearch} />}

      <Filter filteredText={filteredText} />

      {reading && <Pages updatePage={renderPage} updateSearch={setSearch} />}

    </main>
  );
};

export default Bible;
