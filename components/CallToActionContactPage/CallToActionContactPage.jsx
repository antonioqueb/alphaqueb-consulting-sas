'use client'
// Importa useState y useEffect
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToActionContactPage.module.css'

export default function CallToActionContactPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('') // Nuevo estado para el nombre

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value) // Función para manejar el cambio de nombre
  }

  const handleContactButtonClick = async (event) => {
    event.preventDefault() // Evitar que el formulario se envíe de la manera tradicional

    try {
      const body = JSON.stringify({ email, name}) // Asegurarse de incluir el nombre y el correo electrónico en el cuerpo de la solicitud
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body,
      })

      if (response.ok) {
        // Aquí es donde se redirige al usuario después de una respuesta exitosa
        window.location.href = './email-recibido-con-exito'
      } else {
        const errorData = await response.json()
        console.error('Error en la solicitud:', errorData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  
  return (
    <>
      <div className={styles.CallToAction__container}>
        <div className={styles.CallToAction__container__text}>
        

          <div className={styles.CallToAction__container__text__subtitle}>
            <p>
            Si te interesa optimizar tu instancia Odoo, estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo para discutir cómo podemos apoyarte en identificar oportunidades de mejora.
            </p>
          </div>
          <div className={styles.CallToAction__container__text__form}>
            <form action='' className={styles.CallToAction__container__text__form__container}>
              <input
                type='text'
                placeholder='Nombre'
                className={styles.CallToAction__container__text__form__input}
                value={name}
                onChange={handleNameChange} // Agregar input para el nombre
              />
              <input
                type='text'
                placeholder='Email para contactarte'
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
          <Image src='/brand/white_and_text.png' alt='CallToAction' width={600} height={600} />
        </div>
      </div>
    </>
  ) 
}
