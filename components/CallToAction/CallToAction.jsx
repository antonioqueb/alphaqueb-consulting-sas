'use client'
// Importa useState y useEffect
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactButtonClick = async () => {
    try {
      console.log('Body de la solicitud:', JSON.stringify({ email }));

      const response = await fetch('https://alphaqueb.odoo.com/crm.lead', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ODOO_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: email,
          team_id: 1, 
        }),
      });

      if (response.ok) {
        console.log('Solicitud POST exitosa');
        // Redirigir al usuario a una página de agradecimiento.
        window.location.href = '/thank-you';
      } else {
        console.error('Error en la solicitud POST:', response.status, response.statusText);
        // Mostrar un mensaje de error al usuario.
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message);
    }
  };


  // Retorna el componente
  return (
    <>
      <div className={styles.CallToAction__container}>
        <div className={styles.CallToAction__container__text}>
          <div className={styles.CallToAction__container__text__title}>
            <h2>
            ¡Agendar Reunión!
              <span className={styles.Dot}>.</span>
            </h2>
          </div>

          <div className={styles.CallToAction__container__text__subtitle}>
            <p>
            Lidera la revolución digital, llevando tu negocio más allá de la mera transición digital hacia una completa reinvención.
            </p>
          </div>
          <div className={styles.CallToAction__container__text__form}>
            <form action='' className={styles.CallToAction__container__text__form__container}>
              <input
                type='text'
                placeholder='Email Corporativo'
                className={styles.CallToAction__container__text__form__input}
                value={email}
                onChange={handleEmailChange}
              />
              <button className={styles.CallToAction__container__text__form__button} onClick={handleContactButtonClick}>
                Contactar
              </button>
            </form>
            <span>
              Al enviar aceptas nuestros{' '}
              <Link className={styles.CallToAction__container__text__form__Link} href='/' style={{ textDecoration: 'none' }}>
                términos y condiciones.
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.CallToAction__container__image}>
          <Image src='/whywe.svg' alt='CallToAction' width={500} height={500} />
        </div>
      </div>
    </>
  ) 
}
