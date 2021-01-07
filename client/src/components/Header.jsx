import React, { useState, useContext } from 'react';
import HeaderOpened from './HeaderOpened';
import './styles/Header.css';
import { GospelContext } from '../GospelContext';

export default function Header() {
  const { bookContext, chapterContext } = useContext(GospelContext);

  const [, setBook] = bookContext;
  const [, setChapter] = chapterContext;

  const [opened, setOpened] = useState(false);

  const refresh = () => {
    setBook(false);
    setChapter([]);
  };

  return (
    <header className="Header">
      {opened && (
        <HeaderOpened opened={opened} setOpened={setOpened} />
      )}
      <button
        className="Header__burger toggleHeaderOpened"
        type="button"
        onClick={() => setOpened(true)}
      >
        {!opened ? <>&#9776;</> : <>&#x2715;</>}
      </button>

      <h1
        className="Header__title"
        role="presentation"
        onClick={() => {
          refresh();
        }}
      >
        The Gospels
      </h1>

      <button type="button" className="Header__login">
        &#x1F464;
      </button>
    </header>
  );
}
