import React, { useEffect, useContext } from 'react';
import Input from './Input';
import Pages from './Pages';
import Chapter from './Chapter';
import { GospelContext } from '../GospelContext';
import './styles/Bible.css';

export default function Bible() {
  const { bibleContext, bookContext, renderChapter } = useContext(
    GospelContext,
  );

  const [bible] = bibleContext;
  const [book] = bookContext;

  useEffect(() => {
    if (bible) renderChapter('Matthew');
  }, [bible]);

  if (!bible) {
    return <p>Loading...</p>;
  }

  return (
    <section className="Bible">
      {book && (
        <>
          <Input />
          <Pages />
          <Chapter />
          <Pages />
        </>
      )}
    </section>
  );
}
