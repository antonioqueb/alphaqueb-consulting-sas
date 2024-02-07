
  //Footer
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__container}>
        <div className={styles.Footer__container__row}>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>ALPHAQUEB</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/contacto">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Contacto</span>
                </Link>
              </li>     
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/blogs">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Blog</span>
                </Link>
              </li>

            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Ayuda</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/contacto">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Necesito un software urgentemente!</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/contacto">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Necesito facturar mi compra</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/contacto">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Los precios incluyen Impuestos?</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Preguntas</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/nosotros">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Porqué Nosotros?</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/blogs">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Dónde puedo aprender más?</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Siguenos</h4>
            <div className={styles.Footer__container__footer__links__title__social__link}>
            <Link href="https://www.facebook.com/alphaquebconsulting" aria-label="Facebook de AlphaQueb Consulting">
            <FaFacebook className={styles.Footer__container__footer__links__title__social__link__icon} />
            </Link>
            <Link href="https://www.linkedin.com/company/96666188" aria-label="LinkedIn de AlphaQueb Consulting"> 
              <FaLinkedin className={styles.Footer__container__footer__links__title__social__link__icon} />
            </Link>



            </div>
          </div>
          
        </div>
      </div>
      
    </div>

  );
}

export default Footer;