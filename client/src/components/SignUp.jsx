import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SignUp.css';

export default function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   api.login(email, password);
  // }

  return (
    <div className="SignUp__container">
      <section className="SignUp">
        <button type="button" className="SignUp__cancel">
          <Link to="/">&#10006;</Link>
        </button>
        <h1 className="SignUp__title">Create an account</h1>
        <form type="submit" className="SignUp__form">
          <div className="SignUp__form--name">
            <label
              className="SignUp__form--name--label"
              htmlFor="firstname"
            >
              First Name
              <input
                className="SignUp__form--name--input"
                id="firstname"
                type="text"
              />
            </label>
            <label
              className="SignUp__form--name--label"
              htmlFor="lastname"
            >
              Last Name
              <input
                className="SignUp__form--name--input"
                id="lastname"
                type="text"
              />
            </label>
          </div>
          <label className="SignUp__form--label" htmlFor="username">
            Username
            <input
              className="SignUp__form--input"
              id="username"
              type="text"
            />
          </label>
          <label className="SignUp__form--label" htmlFor="password">
            Password
            <input
              className="SignUp__form--input"
              id="password"
              type="text"
            />
          </label>
          <label className="SignUp__form--label" htmlFor="password">
            Confirm Password
            <input
              className="SignUp__form--input"
              id="password"
              type="text"
            />
          </label>
        </form>
        <button className="SignUp__signup" type="submit">
          Sign up
        </button>
        <button type="button" className="SignUp__signin">
          <span readOnly>Already have an account?</span>{' '}
          <Link to="/Login">Log in</Link>
        </button>
        <p className="SignUp__terms">
          Click &quot;Sign up&quot; above to accept The Gospels&apos;s{' '}
          <u>Terms of Service</u> and <u>Privacy Policy</u>.
        </p>
      </section>
    </div>
  );
}
