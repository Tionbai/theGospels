import React from 'react';
import propTypes from 'prop-types';

export default function Navbar(props) {
  const updateChapter = (book) => {
    props.updateChapter(book);
    props.updateSearch('');
    if (document.querySelector('.Search')) {
      document.querySelector('.Search').value = '';
    }
  };

  return (
    <nav className="Nav">
      {props.gospels.map((gospel) => {
        return <button 
          key={props.gospels.indexOf(gospel)}
          type="submit"
          onClick={() => {
            updateChapter(gospel);
          }}
        >
          {`${gospel}`}
        </button>
      })}
    </nav>
  );
}

Navbar.propTypes = {
  updateChapter: propTypes.func.isRequired,
  updateSearch: propTypes.func.isRequired,
};
