
  //Doubts
  import React from 'react';
import styles from './Doubts.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const Doubts = () => {
  return (
    <div className={styles.Doubts__container}>
      <div className={styles.Doubts__container__text__and__form}>
      <div className={styles.Doubts__container__text}>
        <h2 className={styles.Doubts__title}>¿Tienes Preguntas?</h2>
      </div>


      <div className={styles.Doubts__container__text__form}>
        <form action="" className={styles.Doubts__container__text__form__container}>
          <input type="text" placeholder="Email Corporativo" className={styles.Doubts__container__text__form__input }/>
          <button  className={styles.Doubts__container__text__form__button }>Contactar</button>
        </form>
        <span className={styles.Doubts__container__text__form__span}>Al enviar aceptas nuestros <Link className={styles.Doubts__container__text__form__Link } href="/" style={{ textDecoration: 'none'}}>Terminos y condiciones.</Link></span>
        </div>

      </div>
      <Image src="/dudas.svg" alt="Doubts" width={500} height={500} className={styles.Doubts__container__image}/>

     
      
    </div>
  );
}

export default Doubts;