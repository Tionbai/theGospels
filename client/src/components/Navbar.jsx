import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';
import { GospelContext } from '../GospelContext';
import Gospels from './Gospels';

export default function Navbar() {
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);

  const { bookContext, renderChapter } = useContext(GospelContext);

  const [book] = bookContext;

  const startReadingNav = (
    <nav
      className="Navbar"
      onClick={() => {
        renderChapter('Matthew');
      }}
      role="presentation"
    >
      <Link to="/Bible">Start reading</Link>
      <button type="button" className="Navbar__arrow">
        <Link to="/Bible">&#10095;</Link>
      </button>
    </nav>
  );

  switch (location.pathname) {
    case '/':
      return startReadingNav;
    case '/About':
      return <nav className="Navbar">About</nav>;
    case '/Login':
      return startReadingNav;
    //   return <nav className="Navbar">Sign in</nav>;
    case '/Signup':
      return startReadingNav;
    //   return <nav className="Navbar">Sign up</nav>;
    case '/Bible':
      return (
        <div className="Navbar__container">
          <nav className="Navbar">
            {book ? book.name : ''}
            <button
              type="button"
              aria-label="button"
              className={`Navbar__arrow fas ${
                !dropDown ? 'fa-chevron-down' : 'fa-chevron-up'
              }`}
              onClick={() => {
                setDropDown(!dropDown);
              }}
            />
          </nav>
          {dropDown ? <Gospels /> : ''}
        </div>
      );
    default:
      break;
  }
}
