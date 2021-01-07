import React, { useContext } from 'react';
import './App.css';
import Gospels from './components/Gospels';
import Chapter from './components/Chapter';
import Pages from './components/Pages';
import Input from './components/Input';
import Header from './components/Header';
import { GospelContext } from './GospelContext';

const App = () => {
  const { bibleContext, bookContext } = useContext(GospelContext);

  const [bible] = bibleContext;
  const [book] = bookContext;

  if (!bible) {
    return <p>Loading...</p>;
  }

  return (
    <main className="App">
      <Header />
      <Gospels />
      {book && (
        <>
          <Input />
          <Pages />
          <Chapter />
          <Pages />
        </>
      )}
    </main>
  );
};

export default App;
