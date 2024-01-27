  //Hero
  
'use client';
import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { useState, useEffect } from 'react';





export const Hero = () => {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
        // Activa 'isScrolled' si el scroll es mayor que un cierto número de píxeles
        // Puedes ajustar '50' a cualquier otro número basado en tu necesidad
        setIsScrolled(window.scrollY > 50);
    };

    // Escucha al evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpieza del event listener
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className={styles.Hero__container}>

      <div className={styles.Hero__container__text}>
      
      <div className={styles.Hero__container__text__title}>
        <h1>Transformación <span className={styles.Hero__container__text__title__section__second}>Digital Corporativa</span><span className={styles.Dot}>.</span></h1>
      </div>

      <div className={styles.Hero__container__text__subtitle}>
        <p>Expertos en soluciones de software que facilitan tu transformación digital y gestionan el cambio, garantizando innovación y resultados duraderos.</p>
      </div>
      <div className={styles.Hero__container__text__form}>
        <form action="" className={styles.Hero__container__text__form__container}>
          <input type="text" placeholder="Email Corporativo" className={styles.Hero__container__text__form__input }/>
          <button  className={styles.Hero__container__text__form__button }>Contactar</button>
        </form>
        <span>Al enviar aceptas nuestros <Link className={styles.Hero__container__text__form__Link } href="/" style={{ textDecoration: 'none'}}>terminos y condiciones.</Link></span>
        </div>



     

      </div>

      <div className={styles.Hero__container__image}>
        <Image src="/hero.svg" alt="Hero" width={800} height={800}/>

      </div>

    </div>
    <div className={`${styles.Hero__container__row__down__animated} ${isScrolled ? styles.scrolled : ''}`}>
        <MdOutlineKeyboardArrowDown className={`${styles.Hero__container__row__down__animated__icon} ${isScrolled ? styles.iconScrolled : ''}`}/>
    </div>


    

    </>
  );
}

export default Hero;