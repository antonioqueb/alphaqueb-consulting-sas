'use client'
// Importa useState y useEffect
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  const [email, setEmail] = useState('')

  // Función asincrónica para manejar el cambio en el input de correo y la solicitud POST a la API
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleContactButtonClick = async () => {
    try {
      console.log('Body de la solicitud:', JSON.stringify({ correo: email }))

      const response = await fetch('https://api.queb.online/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: email,
        }),
      })

      if (response.ok) {
        console.log('Solicitud POST exitosa')
        // Restablecer el estado del correo después de una solicitud exitosa
        setEmail('')
      } else {
        console.error('Error en la solicitud POST:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message)
    }
  }




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
          <Image src='/hero.svg' alt='CallToAction' width={800} height={800} />
        </div>
      </div>
    </>
  ) 
}
