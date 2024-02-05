'use client';
// Importa useState y useEffect
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');

  // Función asincrónica para manejar el cambio en el input de correo y la solicitud POST a la API
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactButtonClick = async () => {
    try {
      console.log('Body de la solicitud:', JSON.stringify({ correo: email }));

      const response = await fetch('https://api.queb.online/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: email,
        }),
      });

      if (response.ok) {
        console.log('Solicitud POST exitosa');
        // Restablecer el estado del correo después de una solicitud exitosa
        setEmail('');
      } else {
        console.error('Error en la solicitud POST:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message);
    }
  };

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // Retorna el componente
  return (
    <>
      <div className={styles.Hero__container}>
        <div className={styles.Hero__container__text}>
          <div className={styles.Hero__container__text__title}>
            <h1>
              Transformación <span className={styles.Hero__container__text__title__section__second}>Digital Corporativa</span>
              <span className={styles.Dot}>.</span>
            </h1>
          </div>

          <div className={styles.Hero__container__text__subtitle}>
            <p>
              Alphaqueb Consulting S.A.S. está en el corazón de la revolución digital, evolucionando tu negocio más
              allá de la transición digital hacia una completa reinvención. Innovamos y generamos resultados duraderos.
            </p>
          </div>
          <div className={styles.Hero__container__text__form}>
            <form action="" className={styles.Hero__container__text__form__container}>
              <input
                type="text"
                placeholder="Email Corporativo"
                className={styles.Hero__container__text__form__input}
                value={email}
                onChange={handleEmailChange}
              />
              <button className={styles.Hero__container__text__form__button} onClick={handleContactButtonClick}>
                Contactar
              </button>
            </form>
            <span>
              Al enviar aceptas nuestros{' '}
              <Link className={styles.Hero__container__text__form__Link} href="/" style={{ textDecoration: 'none' }}>
                términos y condiciones.
              </Link>
            </span>
          </div>
        </div>

        <div className={styles.Hero__container__image}>
          <Image src="/hero.svg" alt="Hero" width={800} height={800} />
        </div>
      </div>
      <div className={`${styles.Hero__container__row__down__animated} ${isScrolled ? styles.scrolled : ''}`}>
        <MdOutlineKeyboardArrowDown
          className={`${styles.Hero__container__row__down__animated__icon} ${
            isScrolled ? styles.iconScrolled : ''
          }`}
        />
      </div>
    </>
  );

};

// Exporta el componente por defecto
export default Hero;
