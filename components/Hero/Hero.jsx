
  //Hero
  import React from 'react';
import styles from './Hero.module.css';
import { FcServices } from "react-icons/fc";
import Link from 'next/link';
import Image from 'next/image';


export const Hero = () => {
  return (
    <>
    <div className={styles.Hero__container}>

      <div className={styles.Hero__container__text}>
      
      <div className={styles.Hero__container__text__title}>
        <h1>Transformación Digital Corporativa <span className={styles.WaterEffect}>Organizaciónal</span><span className={styles.Dot}>.</span></h1>
      </div>

      <div className={styles.Hero__container__text__subtitle}>
        <p>Expertos en software que facilitan tu transformación digital y gestionan el cambio, garantizando soluciones innovadoras y resultados duraderos.</p>
      </div>
      <div className={styles.Hero__container__text__form}>
        <form action="" className={styles.Hero__container__text__form__container}>
          <input type="text" placeholder="Email Corporativo" className={styles.Hero__container__text__form__input }/>
          <button  className={styles.Hero__container__text__form__button }>Contactar</button>
        </form>
        <span>Al enviar aceptas nuestros <Link className={styles.Hero__container__text__form__Link } href="/" style={{ textDecoration: 'none'}}>Terminos y condiciones.</Link></span>
        </div>



     

      </div>

      <div className={styles.Hero__container__image}>
        <Image src="/hero.svg" alt="Hero" width={500} height={500}/>

      </div>

    </div>
    

    </>
  );
}

export default Hero;