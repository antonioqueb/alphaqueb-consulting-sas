
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
                <Link href="/about">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Porqué Nosotros?</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/services">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Servicios</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/tools">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Herramientas</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/blog">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Blog</span>
                </Link>
              </li>

            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Ayuda</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/about">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Porqué Nosotros?</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/services">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Servicios</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/tools">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Herramientas</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/blog">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Blog</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Preguntas</h4>
            <ul className={styles.Footer__container__footer__links__list}>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/about">
                  <span className={styles.Footer__container__footer__links__list__item__link}>¿Porqué Nosotros?</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/services">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Servicios</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/tools">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Herramientas</span>
                </Link>
              </li>
              <li className={styles.Footer__container__footer__links__list__item}>
                <Link href="/blog">
                  <span className={styles.Footer__container__footer__links__list__item__link}>Blog</span>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className={styles.Footer__container__row__footer__links}>
            <h4 className={styles.Footer__container__footer__links__title}>Siguenos</h4>
            <div className={styles.Footer__container__footer__links__title__social__link}>
              <Link href="/facebook">
                <FaFacebook className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="/twitter">
                <FaXTwitter className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="/instagram">
                <FaInstagram className={styles.Footer__container__footer__links__title__social__link__icon} />
              </Link>
              <Link href="/linkedin">
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