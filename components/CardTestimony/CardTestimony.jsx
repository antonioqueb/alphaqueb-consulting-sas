import React from 'react';
import Image from 'next/image';
import styles from './CardTestimony.module.css';

export const CardTestimony = ({ imageSrc, altText, testimony, name }) => {
  return (
    <article className={styles.cardTestimony}>
        <figure className={styles.cardTestimony__image}>
          <Image
            src={imageSrc}
            alt={altText}
            width={90}  // Set width
            height={90} // Set height
            className={styles.cardTestimony__image__img}
          />
        </figure>
        <blockquote className={styles.cardTestimony__text}>
          <p>{testimony}</p>
        </blockquote>
        <footer className={styles.cardTestimony__name}>
          <h3>{name}</h3>
        </footer>
    </article>
  );
}

export default CardTestimony;
