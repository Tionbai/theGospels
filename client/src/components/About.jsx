import React from 'react';
import './styles/About.css';

export default function About() {
  return (
    <section className="About">
      <img
        className="About__header__image"
        src="https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt=""
      />
      <header className="About__header">
        <h4 className="About__header__h">
          The Gospels is an online Bible reading app.{' '}
        </h4>
        <p>
          Our mission is to share the Gospel of Jesus Christ to every
          human and nation worldwide.
        </p>
      </header>

      <article className="About__statement">
        <h4 className="About__statement__header">
          Statement of faith:
        </h4>
        <p className="About__statement__p">
          1. We believe the Bible to be inspired, the only infallible,
          authoritative Word of God.
        </p>
        <p className="About__statement__p">
          2. We believe that there is one God, eternally existent in
          three Persons: Father, Son and Holy Spirit.
        </p>
        <p className="About__statement__p">
          {' '}
          3. We believe in the deity of our Lord Jesus Christ, in His
          virgin birth, in His sinless life, in His miracles, in His
          vicarious and atoning death through His shed blood, in His
          bodily resurrection, in His ascension to the right hand of
          the Father and in His personal return in power and glory.{' '}
        </p>
        <p className="About__statement__p">
          4. We believe that for the salvation of lost and sinful man,
          regeneration by the Holy Spirit is absolutely essential, and
          is administered solely by the grace of God through our faith
          in Jesus Christ.{' '}
        </p>
        <p className="About__statement__p">
          5. We believe in the present ministry of the Holy Spirit, by
          whose indwelling the Christian is enabled to live a godly
          life.{' '}
        </p>
        <p className="About__statement__p">
          6. We believe in the resurrection of both the saved and the
          lost; they that are saved unto the resurrection of life and
          they that are lost unto the resurrection of damnation.{' '}
        </p>
        <p className="About__statement__p">
          7. We believe in the spiritual unity of believers in our
          Lord Jesus Christ.
        </p>
      </article>
    </section>
  );
}
