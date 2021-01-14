import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/Gospels.css';
import { v4 as uuidv4 } from 'uuid';
import { GospelContext } from '../GospelContext';

export default function Gospels() {
  const { bookContext, gospels, renderChapter } = useContext(
    GospelContext,
  );
  const [book] = bookContext;
  return (
    <nav className="Gospels">
      {gospels
        .filter((gospel) => book.name !== gospel)
        .map((gospel) => {
          return (
            <button
              className="Gospels__button"
              type="submit"
              key={uuidv4()}
              onClick={() => {
                renderChapter(gospel);
              }}
            >
              <Link to="/Bible">{`${gospel}`}</Link>
            </button>
          );
        })}
    </nav>
  );
}
