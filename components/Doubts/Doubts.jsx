
  //Doubts
  import React from 'react';
import styles from './Doubts.module.css';
import Link from 'next/link';

export const Doubts = () => {
  return (
    <div className={styles.Doubts__container}>
      <div className={styles.Doubts__container__text}>
        <h3 className={styles.Doubts__title}>¿Tienes Alguna Duda?</h3>
      </div>
      <div className={styles.Doubts__container__text__form}>
        <form action="" className={styles.Doubts__container__text__form__container}>
          <input type="text" placeholder="Email Corporativo" className={styles.Doubts__container__text__form__input }/>
          <button  className={styles.Doubts__container__text__form__button }>Contactar</button>
        </form>
        <span>Al enviar aceptas nuestros <Link className={styles.Doubts__container__text__form__Link } href="/" style={{ textDecoration: 'none'}}>Terminos y condiciones.</Link></span>
        </div>
      
    </div>
  );
}

export default Doubts;