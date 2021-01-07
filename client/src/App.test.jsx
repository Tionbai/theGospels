import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { GospelContext } from './GospelContext';

const gospels = ['Matthew', 'Mark', 'Luke', 'John'];
const renderChapter = () => {};

test('Renders header', () => {
  const { getByText } = render(
    <GospelContext.Provider
      value={{
        bibleContext: [1, 0],
        bookContext: [0, 0],
        chapterContext: [0, 0],
        searchContext: [0, 0],
        currentPageContext: [0, 0],
        pageNumbersContext: [0, 0],
        gospels,
        renderChapter,
      }}
    >
      <App />
    </GospelContext.Provider>,
  );
  const linkElement = getByText(/The Gospels/i);
  expect(linkElement).toBeInTheDocument();
});
