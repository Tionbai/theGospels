import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.css';

export default function Login() {
  return (
    <div className="Login__container">
      <section className="Login">
        <button type="button" className="Login__cancel">
          <Link to="/">&#10006;</Link>
        </button>
        <h1 className="Login__title">Log in to The Gospels</h1>
        <form type="submit" className="Login__form">
          <label className="Login__input" htmlFor="username">
            Username
            <input
              className="Login__input--input"
              id="username"
              type="text"
            />
          </label>
          <label className="Login__input" htmlFor="password">
            Password
            <input
              className="Login__input--input"
              id="password"
              type="text"
            />
          </label>
        </form>
        <button type="submit" className="Login__password">
          Forgot password?
        </button>
        <button className="Login__signin" type="submit">
          Sign in
        </button>
        <button type="button" className="Login__signup">
          <Link to="/Signup">Sign up</Link>
        </button>
      </section>
    </div>
  );
}
