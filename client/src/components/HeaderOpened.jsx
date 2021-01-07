import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { GospelContext } from '../GospelContext';

export default function HeaderOpened(props) {
  const { opened, setOpened } = props;

  const { gospels, renderChapter } = useContext(GospelContext);

  useEffect(() => {
    const closeHeaderOpened = (e) => {
      if (!e.target.classList.contains('toggleHeaderOpened')) {
        setOpened(!opened);
      }
    };

    if (opened)
      window.addEventListener('click', (e) => closeHeaderOpened(e));

    return () =>
      window.removeEventListener('click', (e) =>
        closeHeaderOpened(e),
      );
  }, [opened]);

  return (
    <section className="Header__opened toggleHeaderOpened">
      <button
        className="Gospels__button burger-menu"
        type="button"
        onClick={() => setOpened(!opened)}
      >
        About
      </button>

      {gospels.map((gospel) => {
        return (
          <button
            className="Gospels__button burger-menu"
            key={uuidv4()}
            type="submit"
            onClick={() => {
              renderChapter(gospel);
              setOpened(!opened);
            }}
          >
            {`${gospel}`}
          </button>
        );
      })}
    </section>
  );
}

HeaderOpened.propTypes = {
  opened: PropTypes.bool.isRequired,
  setOpened: PropTypes.func.isRequired,
};
