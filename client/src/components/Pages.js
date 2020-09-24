import React from 'react'

export default function Pages(props) {
  const {
    currentPage, 
    book, 
    pageNumbers
   } = props;

  const renderPage = (direction) => {
    switch (direction) {
      case -1:
        currentPage > 0 && props.setChapter(book.chapters[currentPage - 1].verses);
        currentPage > 0 && props.setCurrentPage(currentPage - 1);
        break;
      case 1:
        currentPage < pageNumbers && props.setChapter(book.chapters[currentPage + 1].verses);
        currentPage < pageNumbers && props.setCurrentPage(currentPage + 1)
        break;
      default:
        break;
    }
  }

  return (
    <section className="Pages">
      <button
        className={currentPage === 0 ? 'selected' : ''}
        type="submit"
        onClick={() => {
          renderPage(-1)
          props.setSearch('')
        }}>Prev page</button>
      <button
        className={currentPage === parseInt(pageNumbers) ? 'selected' : ''}
        type="submit"
        onClick={() => {
          renderPage(1)
          props.setSearch('')
        }}>Next page</button>
    </section>
  )
}