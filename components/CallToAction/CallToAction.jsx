'use client'
// Importa useState y useEffect
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleContactButtonClick = async (event) => {
    event.preventDefault() // Evitar que el formulario se envíe de la manera tradicional
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      })
  
      if (response.ok) {
        // Aquí es donde se redirige al usuario después de una respuesta exitosa
        window.location.href = './success-lead'
      } else {
        const errorData = await response.json()
        console.error('Error en la solicitud:', errorData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // Retorna el componente
  return (
    <>
      <div className={styles.CallToAction__container}>
        <div className={styles.CallToAction__container__text}>
          <div className={styles.CallToAction__container__text__title}>
            <h2>
            Programar Reunión
              <span className={styles.Dot}>.</span>
            </h2>
          </div>

          <div className={styles.CallToAction__container__text__subtitle}>
            <p>
            Lidera la revolución digital, llevando a tus implementaciones odoo personalizaciónes que realmente aporten valor a tus clientes.
            </p>
          </div>
          <div className={styles.CallToAction__container__text__form}>
            <form action='' className={styles.CallToAction__container__text__form__container}>
              <input
                type='text'
                placeholder='Email para contactar'
                className={styles.CallToAction__container__text__form__input}
                value={email}
                onChange={handleEmailChange}
              />
              <button className={styles.CallToAction__container__text__form__button} onClick={handleContactButtonClick}>
                Enviar
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
          <Image src='/whywe.svg' alt='CallToAction' width={600} height={600} />
        </div>
      </div>
    </>
  ) 
}

