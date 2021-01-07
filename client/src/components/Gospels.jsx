import React, { useContext } from 'react';
import './styles/Gospels.css';
import { v4 as uuidv4 } from 'uuid';
import { GospelContext } from '../GospelContext';

export default function Gospels() {
  const { bookContext, gospels, renderChapter } = useContext(
    GospelContext,
  );

  const [book] = bookContext;

  return (
    <>
      {!book ? (
        <nav className="Gospels">
          {gospels.map((gospel) => {
            return (
              <button
                className="Gospels__button"
                key={uuidv4()}
                type="submit"
                onClick={() => {
                  renderChapter(gospel);
                }}
              >
                {`${gospel}`}
              </button>
            );
          })}
        </nav>
      ) : (
        <nav className="Gospels--selected">
          <p>{book.name}</p>
        </nav>
      )}
    </>
  );
}
