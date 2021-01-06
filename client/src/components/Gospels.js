import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./styles/Gospels.css";
import { GospelContext } from ".././GospelContext";
import { v4 as uuidv4 } from "uuid";

export default function Gospels() {
  const { bookContext, gospels, renderChapter } = useContext(
    GospelContext
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
          <p>{book.name} </p>
        </nav>
      )}
    </>
  );
}

Gospels.propTypes = {
  renderChapter: PropTypes.func,
};

Gospels.defaultProps = {
  renderChapter: PropTypes.func,
};
