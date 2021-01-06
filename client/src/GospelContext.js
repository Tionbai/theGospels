import React, { createContext, useState, useEffect } from "react";

const GospelContext = createContext();

const GospelProvider = ({ children }) => {
  const [bible, setBible] = useState(false);
  const [book, setBook] = useState(false);
  const [chapter, setChapter] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);

  const gospels = ["Matthew", "Mark", "Luke", "John"];

  useEffect(() => {
    const fetchGospels = () => {
      const fetchedGospels = [];
      gospels.map(async (gospel) => {
        const response = await fetch(`/api/bible/${gospel}`);
        const data = await response.json();
        fetchedGospels.push(data);
        setBible([...fetchedGospels]);
      });
    };
    fetchGospels();
  }, []);

  const renderChapter = (gospel, chapterIndex = 0) => {
    const index = gospels.indexOf(gospel);
    const selectedBook = bible[index].chapters;
    setBook(bible[gospels.indexOf(gospel)]);
    setChapter(selectedBook[chapterIndex].verses);
    setPageNumbers(selectedBook.length);
    setCurrentPage(chapterIndex);
  };

  return (
    <GospelContext.Provider
      value={{
        bibleContext: [bible, setBible],
        bookContext: [book, setBook],
        chapterContext: [chapter, setChapter],
        searchContext: [search, setSearch],
        currentPageContext: [currentPage, setCurrentPage],
        pageNumbersContext: [pageNumbers, setPageNumbers],
        gospels: gospels,
        renderChapter: renderChapter
      }}
    >
      {children}
    </GospelContext.Provider>
  );
};

export { GospelContext, GospelProvider };
