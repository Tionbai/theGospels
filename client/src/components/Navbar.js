import React from 'react';
import propTypes from 'prop-types';

export default function Navbar(props) {
  const updateChapter = (book) => {
    props.updateChapter(book);
    props.updateSearch('');
    if(document.querySelector('.Search')) {
      document.querySelector('.Search').value = '';
    }
  };

  return (
    <nav className="Nav">
      <button
        type="submit"
        onClick={() => {
          updateChapter('matthew');
        }}
      >
        Matthew
      </button>
      <button
        type="button"
        onClick={() => {
          updateChapter('mark');
        }}
      >
        Mark
      </button>
      <button
        type="submit"
        onClick={() => {
          updateChapter('luke');
        }}
      >
        Luke
      </button>
      <button
        type="submit"
        onClick={() => {
          updateChapter('john');
        }}
      >
        John
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  updateChapter: propTypes.func.isRequired,
  updateSearch: propTypes.func.isRequired,
};
