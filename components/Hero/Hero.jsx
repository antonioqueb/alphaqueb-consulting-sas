
  //Hero
  import React from 'react';
import styles from './Hero.module.css';
import { FcServices } from "react-icons/fc";


export const Hero = () => {
  return (
    <>
    <div className={styles.Hero__container}>

      <div className={styles.Hero__container__text}>
       Aqui va el copy

      </div>

      <div className={styles.Hero__container__image}>
        Aqui va la imagen

      </div>

    </div>
    <footer className={styles.Footer}>
      <section className={styles.Footer__title}>
        <h4>Desarrollamos productos para</h4>
      </section>
      <section className={styles.Footer__features}>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Empresas</h5>
        </div>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Emprendedores</h5>
        </div>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Agencias</h5>
        </div>
        <div className={styles.Footer__features__item}>
          <FcServices className={styles.Footer__features__item__icon}/>
          <h5>Consultoras</h5>
        </div>

        
      </section>
      
    </footer>

    </>
  );
}

export default Hero;