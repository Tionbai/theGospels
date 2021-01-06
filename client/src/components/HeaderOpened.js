import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function HeaderOpened(props) {
  const { opened, setOpened, gospels } = props;

  useEffect(() => {
    const closeHeaderOpened = (e) => {
      if (!e.target.classList.contains("toggleHeaderOpened")) {
        setOpened(!opened);
      }
    };

    if (opened) window.addEventListener("click", (e) => closeHeaderOpened(e));

    return () =>
      window.removeEventListener("click", (e) => closeHeaderOpened(e));
  }, [opened]);

  return (
    <section className="Header__opened toggleHeaderOpened">
      <button
        className="Gospels__button burger-menu"
        onClick={() => setOpened(!opened)}
      >
        About
      </button>

      {gospels.map((gospel) => {
        return (
          <button
            className="Gospels__button burger-menu"
            key={uuidv4()}
            type="submit"
            onClick={() => {
              props.renderChapter(gospel);
              setOpened(!opened);
            }}
          >
            {`${gospel}`}
          </button>
        );
      })}
    </section>
  );
}
