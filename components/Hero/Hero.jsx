
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
        <h1>Alphaqueb Impulsa la Transformación Digital<span className={styles.Dot}>.</span></h1>
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
    <footer className={styles.Footer}>
      <section className={styles.Footer__title}>
        <h4>Desarrollamos productos para</h4>
      </section>
      <section className={styles.Footer__features}>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Empresas Innovadoras</h5>
        </div>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Startups Tecnológicas</h5>
        </div>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Industrias Especializadas</h5>
        </div>
      </section>
      
    </footer>

    </>
  );
}

export default Hero;