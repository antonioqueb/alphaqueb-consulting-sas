import React from 'react'; // Corrected semicolon 
import Image from 'next/image';
import styles from './CardTestimony.module.css';
import { TiStarFullOutline } from "react-icons/ti";

export const CardTestimony = ({ imageSrc, altText, testimony, name }) => {
  return (
    <article className={styles.cardTestimony}>
      <figure className={styles.cardTestimony__image}>
        <Image
          src={imageSrc}
          alt={altText}
          width={80} // Set width
          height={80} // Set height
          className={styles.cardTestimony__image__img}
        />
      </figure>
      <div className={styles.cardTestimony__rating}>
        <TiStarFullOutline className={styles.cardTestimony__rating} />
        <TiStarFullOutline className={styles.cardTestimony__rating} />
        <TiStarFullOutline className={styles.cardTestimony__rating} />
        <TiStarFullOutline className={styles.cardTestimony__rating} />
        <TiStarFullOutline className={styles.cardTestimony__rating} />
      </div>
      <blockquote className={styles.cardTestimony__text}>
        <p>{testimony}</p> 
      </blockquote>
      <footer className={styles.cardTestimony__name}>
        <h4>{name}</h4>
      </footer>
    </article>
  );
}

export default CardTestimony;
