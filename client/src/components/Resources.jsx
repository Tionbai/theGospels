import React from 'react';
import './styles/Resources.css';

export default function Resources() {
  return (
    <article className="Resources">
      Further resources:{' '}
      <a className="Resources__link" href="https://www.bible.com/">
        <img
          className="Resources__link-image--Bible"
          src="https://www.bible.com/assets/icons/bible/120/en-7854c81f0931779f0b2dada729143979.png"
          alt=""
        />{' '}
        Bible.com - Online Bible
      </a>
      <a
        className="Resources__link"
        href="https://www.biblegateway.com/"
      >
        <img
          className="Resources__link-image--BibleGateWay"
          src="https://unite-production.s3.amazonaws.com/tenants/princeofpeacemo/pictures/246288/web_BibleGateway-Logo-red-600p.png"
          alt=""
        />{' '}
        - Searchable Online Bible
      </a>
      <a className="Resources__link" href="https://biblehub.com/">
        <img
          className="Resources__link-image--BibleHub"
          src="https://biblemenus.com/bh14.png"
          alt=""
        />{' '}
        - Online Bible Study Suite
      </a>
    </article>
  );
}
