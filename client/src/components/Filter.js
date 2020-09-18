import React from 'react'

export default function Filter(props) {
    return (
        <section className="Chapter__container">
        {props.filteredText.map((verse) => (
          <article key={verse.id} className="Chapter__verse">
            <p className="Chapter__verse--id">{verse.id}</p>
            <p className="Chapter__verse--text">{` ${verse.text} `}</p>
          </article>
        ))}
      </section>
    )
}
