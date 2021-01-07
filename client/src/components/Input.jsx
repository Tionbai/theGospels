import React, { useState, useEffect, useContext } from 'react';
import { GospelContext } from '../GospelContext';
import './styles/Input.css';

export default function Input() {
  const { chapterContext, searchContext } = useContext(GospelContext);

  const [chapter] = chapterContext;
  const [, setSearch] = searchContext;

  const [checked, setChecked] = useState(false);

  const input = document.querySelector('.Input__input');

  useEffect(() => {
    if (input) {
      if (!checked) input.value = '';
      setSearch(input.value);
    }
  }, [chapter, checked]);

  return (
    <section className="Input">
      <input
        className="Input__input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <label
        className="Input__label"
        htmlFor="checkbox"
        name="checkbox"
      >
        <input
          type="checkbox"
          id="checkbox"
          onClick={() => setChecked(!checked)}
        />
        Pin search
      </label>
    </section>
  );
}
