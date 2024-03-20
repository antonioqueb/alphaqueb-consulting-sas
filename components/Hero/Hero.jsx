'use client'
import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('') // Nuevo estado para el nombre

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value) // Manejar cambio de nombre
  }

  const handleContactButtonClick = async () => {
    try {
      const body = JSON.stringify({ email, name}) // Añadir el nombre al cuerpo de la solicitud
      console.log('Body de la solicitud:', body)

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body,
      })

      if (response.ok) {
        console.log('Solicitud POST exitosa')
        setEmail('') // Restablecer el estado del correo después de una solicitud exitosa
        setName('') // Restablecer el estado del nombre
        window.location.href = './email-recibido-con-exito'
      } else {
        console.error('Error en la solicitud POST:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <section className='pt-1 lg:pt-20 pb-12 bg-transparent mt-[4.5rem]'>
        <div className='mx-auto'>
          <div className='mx-auto text-center'>
            <h1 className='mb-8 text-[1.5rem] sm:text-[2.4rem] font-semibold leading-none md:text-[3.1rem]  text-white 2xl:text-[4.65rem] md:tracking-tight text-balance hover:shadow-xl transition-all duration-300 custom-text-size xl:text-[3.4rem]'><span className='text-blueprimary text-[1.5rem]  2xl:text-[5rem] sm:text-[2.6rem] md:text-[3.4rem] xl:text-[3.7rem]'>Innovación y Crecimiento con Odoo: </span>Implementamos la solución integral de CRM y ERP en Español para tu negocio.
            </h1>
            <h2 className='text-balance leading-normal w-full mb-8 text-xl text-white md:text-[1.8rem] xl:text-[2.1rem]  2xl:text-[1.43rem]'>
            <strong>Obtener una Evaluación Personalizada Gratis</strong> Descubre cómo Odoo puede revolucionar tu empresa. ¡Obten tu evaluación hoy!
            </h2>
            <div className='flex-col justify-center items-center w-full'>
              <form action='' className='flex flex-col items-center w-full md:flex-row mb-4 md:space-x-4'>
                <input
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  className='w-full bg-darkprimary md:w-3/4 h-12 px-4 mb-3 md:mb-0 text-lg justify-center text-gray-200 placeholder-gray-100 border rounded-lg focus:shadow-outline'
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  id='email'
                  className='w-full bg-darkprimary md:w-3/4 h-12 px-4 mb-3 md:mb-0 text-lg justify-center text-gray-200 placeholder-gray-100 border rounded-lg focus:shadow-outline'
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  className='w-full md:w-1/4 text-lg font-semibold text-blueprimary bg-darkprimary px-5 py-2.5 border border-blueprimary rounded-lg hover:bg-darkprimary focus:outline-none focus:shadow-outline transition-all duration-300 custom-text-size'
                  type='button'
                  onClick={handleContactButtonClick}
                >
                  Obtener
                </button>
              </form>
              <span className='text-sm text-white flex'>
                Al enviar aceptas nuestros{' '}
                <Link className='text-blueprimary mx-1' href='/' style={{ textDecoration: 'none' }}>
                  Términos y condiciones.
                </Link>
              </span>
            </div>
          </div>
        </div>
          <div className='relative z-0 w-full mt-8'>
                  <div className='relative overflow-hidden shadow-2xl'>
                      <div className='flex items-center flex-none px-4 bg-grayprimary rounded-b-none h-11 rounded-xl'>
                          <div className='flex space-x-1.5'>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                          </div>
                      </div>
                      <img src='pages.webp' alt='Hero'/>
                  </div>
              </div>
      </section>
     
      <div className={`${styles.Hero__container__row__down__animated} ${isScrolled ? styles.scrolled : ''}`}>
        <MdOutlineKeyboardArrowDown className={`${styles.Hero__container__row__down__animated__icon} ${isScrolled ? styles.iconScrolled : ''}`} />
      </div>
    </>
  )
}

export default Hero
