import React, { useState, useEffect } from 'react';
import './App.css';
import Gospels from './components/Gospels';
import Filter from './components/Filter';
import Pages from './components/Pages';
import Input from './components/Input';
import Header from './components/Header';

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

  if (!bible) {
    return <p>Loading...</p>;
  }

  return (
    <main className="App">

    <Header setBook={setBook} setChapter={setChapter} buttons={buttons} gospels={gospels} renderChapter={renderChapter}/>

      <Gospels book={book} renderChapter={renderChapter} setSearch={setSearch} gospels={gospels} buttons={buttons} />

      {book &&
        <>

          <Input chapter={chapter} setSearch={setSearch}></Input>

          <Pages setSearch={setSearch} setChapter={setChapter} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} book={book} />

          <Filter search={search} chapter={chapter} />

          <Pages setSearch={setSearch} setChapter={setChapter} currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumbers={pageNumbers} book={book} />
        </>}

    </main>
  );
};

export default Bible;
