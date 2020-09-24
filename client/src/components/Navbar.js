import React from 'react';
import propTypes from 'prop-types';

export default function Navbar(props) {
  const {
    gospels,
    buttons,
  } = props;

  const selectButton = (gospel) => {
    for (let i = 0; i < gospels.length; i++) {
      buttons[i].classList.remove('selected');
      const button = buttons.filter(button => button.innerHTML === gospel);
      button[0].classList.add('selected');
    }
  }

  return (
    <nav className="Nav">
      {gospels.map((gospel) => {
        return <button
          key={gospels.indexOf(gospel)}
          type="submit"
          onClick={() => {
            props.renderChapter(gospel);
            selectButton(gospel)
          }}
        >
          {`${gospel}`}
        </button>
      })}
    </nav>
  );
}

Navbar.propTypes = {
  renderChapter: propTypes.func.isRequired,
};
