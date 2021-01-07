import React, { useContext } from 'react';
import { GospelContext } from '../GospelContext';
import './styles/Pages.css';

export default function Pages() {
  const {
    bookContext,
    chapterContext,
    currentPageContext,
    pageNumbersContext,
  } = useContext(GospelContext);

  const [book] = bookContext;
  const [, setChapter] = chapterContext;
  const [currentPage, setCurrentPage] = currentPageContext;
  const [pageNumbers] = pageNumbersContext;

  const renderPage = (direction) => {
    switch (direction) {
      case -1:
        if (currentPage === 0) return;
        if (currentPage > 0) {
          setChapter(book.chapters[currentPage - 1].verses);
          setCurrentPage(currentPage - 1);
        }
        break;
      case 1:
        if (currentPage === pageNumbers) return;
        if (currentPage < pageNumbers) {
          setChapter(book.chapters[currentPage + 1].verses);
          setCurrentPage(currentPage + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="Pages">
      <button
        className={`Pages__button${
          currentPage === 0 ? ' selected' : ''
        }`}
        type="submit"
        onClick={() => {
          renderPage(-1);
        }}
      >
        &#10094;
      </button>

      <p>{`Chapter ${currentPage + 1} of ${pageNumbers}`}</p>

      <button
        className={`Pages__button${
          currentPage === parseInt(pageNumbers, 10) ? ' selected' : ''
        }`}
        type="submit"
        onClick={() => {
          renderPage(1);
        }}
      >
        &#10095;
      </button>
    </section>
  );
}
