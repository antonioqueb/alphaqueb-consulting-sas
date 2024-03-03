'use client'
// Importa useState y useEffect
import React, { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import styles from './Hero.module.css'
import { Toaster, toast } from 'sonner'

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('')

  // Función asincrónica para manejar el cambio en el input de correo y la solicitud POST a la API
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleContactButtonClick = async () => {
    try {
      console.log('Body de la solicitud:', JSON.stringify({ email }))
      toast.success('Email recibido con éxito')

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lead`, {
        method: 'POST',
        headers: {

          'Content-Type': 'application/json',
          Accept: 'application/json',

        },
        // Envia el email como pun json al servidor

        body: JSON.stringify({ email })



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

  // Efecto para manejar el scroll
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
          <section className='pt-20 pb-32 bg-transparent mt-[7.5rem] '>
        <div className='px-12 mx-auto max-w-7xl '>

            <div className=' w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center'>
            <h1 className='mb-8 text-3xl font-semibold leading-none text-white md:text-7xl md:tracking-tight text-balance hover:shadow-xl transition-all duration-300'>
            Expande tu oferta con<span className='text-blueprimary'> Desarrollos Odoo Exclusivo</span>
            </h1>
            <p className='text-pretty	px-0 mb-8 text-lg text-white md:text-xl lg:px-8 '>
            Soluciones Odoo personalizadas que te convierten en el socio ideal de las empresas que buscan una Integración Odoo completa y adaptada a las necesidades de sus empresas.</p>
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
                  <Toaster />
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


            </div>
            
            <div className='w-full mx-auto mt-20 text-center md:w-10/12'>
              
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
