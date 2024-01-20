
  //CardPost
  import React from 'react';
import styles from './CardPost.module.css';
import Image from 'next/image';


export const CardPost = ({ Titulo, Description, ImagePost}) => {  
  return (
    <div className={styles.CardPosts__container__news}>
              <Image
                src={ImagePost}
                alt={Titulo}
                width={400}
                height={400}
                className={styles.CardPost__container__news__image__img}
              />
          <div className={styles.CardPost__container__news__title}>
            <h3>{Titulo}</h3>   
          </div>
          <div className={styles.CardPost__container__news__description}>
          <p>{Description}</p>
          </div>
          </div>
  );
}

export default CardPost;