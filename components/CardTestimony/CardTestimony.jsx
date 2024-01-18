// CardTestimony.jsx
import React from 'react';
import styles from './CardTestimony.module.css';

export const CardTestimony = ({ imageSrc, altText, testimony, name }) => {
  return (
    <div className={styles.CardTestimony__container}>
        <div className={styles.CardTestimony__container__card__image}>
          <img src={imageSrc} alt={altText} width={600} height={600}/>
        </div>
        <div className={styles.CardTestimony__container__card__text}>
          <p>{testimony}</p>
        </div>
        <div className={styles.CardTestimony__container__card__name}>
          <h3>{name}</h3>
        </div>
    </div>
  );
}

export default CardTestimony;
