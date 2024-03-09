'use client'
// Importa useState y useEffect
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
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
              Contacto
              <span className={styles.Dot}>.</span>
            </h2>
          </div>

          <div className={styles.CallToAction__container__text__subtitle}>
            <p>
            Solicita <strong className="text-[#26E1FF]">Gratis 1 hora de auditoría</strong> en integración de módulos Odoo a medida para potenciar tu implementación asegurando que cada función se alinee perfectamente con tus procesos empresariales.
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
          <Image src='/whywe.svg' alt='CallToAction' width={600} height={600} />
        </div>
      </div>
    </>
  ) 
}
