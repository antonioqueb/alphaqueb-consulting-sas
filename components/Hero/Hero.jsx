'use client'


// app\layout.js
// Importa useState y useEffect
import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import styles from './Hero.module.css'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleContactButtonClick = async () => {
    try {
      console.log('Body de la solicitud:', JSON.stringify({ email }))

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        console.log('Solicitud POST exitosa')
        setEmail('') // Restablecer el estado del correo después de una solicitud exitosa
        // Redirigir al usuario a la página de agradecimiento
        window.location.href = './success-lead'
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


  // Retorna el componente
  return (
    <>
        
          <section className=' pt-1 lg:pt-20 pb-12 bg-transparent mt-[4.5rem]'>
         
        <div className='mx-auto '>

            <div className='mx-auto text-center'>
              <h1 className='mb-8 text-[1.8rem] sm:text-5xl font-semibold leading-none text-white xl:text-[4.2rem] 2xl:text-[5.9rem] md:tracking-tight text-balance hover:shadow-xl transition-all duration-300 custom-text-size'>
              Extiende las funcionalidades de Odoo: <span className='text-blueprimary'>Módulos a Medida.</span>
              </h1>
              <h2 className='text-pretty	px-0 mb-8 text-lg text-white md:text-[1.6rem] lg:px-8 '>
              Solicita <strong>Gratis 1 hora de auditoría</strong> en integración de módulos Odoo a medida para potenciar tu implementación asegurando que cada función se alinee perfectamente con tus procesos empresariales.
              </h2>   
              <div className=' flex-col justify-center w-full'>
                <form action='' className='flex flex-col items-center w-full md:flex-row mb-4 md:space-x-4'>
                  <input
                    type='text'
                    placeholder='Email para ser contactado'
                    name='email'
                    id='email'
                    className='w-full md:w-3/4 h-12 px-4 mb-3 md:mb-0 text-lg justify-center text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline'
                    value={email}
                    onChange={handleEmailChange}
                  />
                
                  <button
                    className='w-full md:w-1/4 text-lg font-semibold text-white bg-darkprimary px-5 py-2.5 border rounded-lg hover:bg-darkprimary focus:outline-none focus:shadow-outline'
                    type='button'
                    onClick={handleContactButtonClick}
                  >
                    Enviar
                  </button>
                  
                </form>
                

                  <span className='text-sm text-white flex '>
                    Al enviar aceptas nuestros{' '}
                    <Link className='text-blueprimary mx-1' href='/' style={{ textDecoration: 'none'  }}>
                      Términos y condiciones.
                    </Link>
                  </span>

                </div>
                <div className='w-full mt-20 text-center'>
              
              <div className='relative z-0 w-full mt-8'>
                  <div className='relative overflow-hidden shadow-2xl'>
                      <div className='flex items-center flex-none px-4 bg-grayprimary rounded-b-none h-11 rounded-xl'>
                          <div className='flex space-x-1.5'>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                              <div className='w-3 h-3 border-2 border-darkprimary rounded-full'></div>
                          </div>
                      </div>
                      <img src='pages.png' alt='Hero'/>
                  </div>
              </div>
              
          </div>

            </div>
            

            
        </div>
      </section>
      <div className={`${styles.Hero__container__row__down__animated} ${isScrolled ? styles.scrolled : ''}`}>
        <MdOutlineKeyboardArrowDown
          className={`${styles.Hero__container__row__down__animated__icon} ${
            isScrolled ? styles.iconScrolled : ''
          }`}
        />
      </div>
    </>
  )
}

// Exporta el componente por defecto
export default Hero
