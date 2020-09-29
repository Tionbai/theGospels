import React from 'react';
import propTypes from 'prop-types';
import './styles/Gospels.css';

export default function Navbar(props) {
  const {
    book,
    gospels,
    buttons,
  } = props;

  const selectButton = (gospel) => {
    buttons.map(btn => {
      if (btn.className.includes('btn--gospels')) {
        btn.classList.remove('selected');
        const button = buttons.filter(button => button.innerHTML === gospel);
        button[0].classList.add('selected');
      }
    })
  }

  return (
    <>

      {!book ?

        <nav className="Gospels">

          {gospels.map((gospel) => {

            return <>
            
            <button
              className="btn--gospels"
              key={gospels.indexOf(gospel)}
              type="submit"
              onClick={() => {
                props.renderChapter(gospel);
                selectButton(gospel)
              }}
            >
              {`${gospel}`}
            </button>

            </>

          })}
        </nav>

        :

        <nav className="Gospels--selected">
          <p>The gospel of {book.name} </p>
        </nav>

      }
    </>

  )

}

Navbar.propTypes = {
  renderChapter: propTypes.func.isRequired,
};
