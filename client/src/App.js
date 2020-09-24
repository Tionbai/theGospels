import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Pages from './components/Pages';

const Bible = () => {
  const [bible, setBible] = useState(false);
  const [book, setBook] = useState(false);
  const [chapter, setChapter] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  const gospels = ['Matthew', 'Mark', 'Luke', 'John'];
  const buttons = [...document.querySelectorAll('BUTTON')];

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
    const selectedBook = bible[index].chapters;
    setBook(bible[gospels.indexOf(gospel)]);
    setChapter(selectedBook[chapterIndex].verses);
    setPageNumbers(selectedBook.length - 1);
    setCurrentPage(chapterIndex);
  }

  const refresh = () => {
    setBook(false);
    setChapter([]);
    buttons.map((button) => {
      button.classList.remove('selected');
    })
  };
  
  if (!bible) {
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

      <Navbar renderChapter={renderChapter} setSearch={setSearch} gospels={gospels} buttons={buttons}/>

      {book && <input className="Search" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />}

      {book && <Pages setSearch={setSearch} setChapter={setChapter} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} book={book} />}

      <Filter search={search} chapter={chapter} />

      {book && <Pages setSearch={setSearch} setChapter={setChapter} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} book={book} />}

    </main>
  );
};

export default Bible;
