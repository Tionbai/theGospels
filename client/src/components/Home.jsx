import React from 'react';
import './styles/Home.css';
import DailyVerse from './DailyVerse';
import Resources from './Resources';

export default function Home() {
  return (
    <section className="Home">
      {/* Welcome to the Gospels reading app! */}
      <article className="Home__feature">
        <i className="fas fa-bible" />
        <p className="Home__feature__text">
          Read the Gospels in the New Testament of the King James
          Bible.{' '}
        </p>
      </article>
      <article className="Home__feature">
        <i className="fas fa-bookmark" />
        <p className="Home__feature__text">
          Jump back in the story. Continue where you left off with
          bookmarks.{' '}
        </p>
      </article>
      <article className="Home__feature">
        <i className="fas fa-highlighter" />
        <p className="Home__feature__text">
          Make it personal! Highlight verses and save them to your
          profile.{' '}
        </p>
      </article>
      {/* <article className="Home__feature">
        <i className="fas fa-file-export" />
        <p className="Home__feature__text">
          Create customized passage layouts. Export your designs to
          img / pdf.{' '}
        </p>
      </article> */}
      <DailyVerse />
      <Resources />
    </section>
  );
}
