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
          <section className="pt-20 pb-32 bg-transparent mt-20">
        <div className="px-12 mx-auto max-w-7xl">
            <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-semibold leading-none text-white md:text-7xl md:tracking-tight text-balance shadow-md hover:shadow-xl transition-all duration-300">
               Desarrollo de Apps <span className="text-purple-400">Odoo Personalizadas</span>
            </h1>

                <p className="text-pretty	px-0 mb-8 text-lg text-white md:text-xl lg:px-8 ">
                Descubre el poder de la personalización de Odoo en tu negocio.
                 </p>
                <div class="flex justify-center w-full">
                  <form action="" class="flex flex-col items-center w-[86%] md:flex-row mb-8 md:flex-row md:space-x-4 md:mb-8 ">
                    <input
                      type="text"
                      placeholder="Email para contactar"
                      name="email"
                      id="email"
                      class="flex-grow w-full h-12 px-4 mb-3 md:mb-0 text-lg justify-center text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button
                      class="text-lg font-semibold text-white bg-darkprimary px-5 py-2.5 border rounded-lg hover:bg-darkprimary focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleContactButtonClick}
                    >
                      Contactar
                    </button>
                  </form>
                </div>


            </div>
            <div className="w-full mx-auto mt-20 text-center md:w-10/12">
              
                <div className="relative z-0 w-full mt-8">
                    <div className="relative overflow-hidden shadow-2xl">
                        <div className="flex items-center flex-none px-4 bg-grayprimary rounded-b-none h-11 rounded-xl">
                            <div className="flex space-x-1.5">
                                <div className="w-3 h-3 border-2 border-darkprimary rounded-full"></div>
                                <div className="w-3 h-3 border-2 border-darkprimary rounded-full"></div>
                                <div className="w-3 h-3 border-2 border-darkprimary rounded-full"></div>
                            </div>
                        </div>
                        <img src="pages.png"/>
                    </div>
                </div>
                
            </div>
            
        </div>
      </section>
      
    </>
  );

};

// Exporta el componente por defecto
export default Hero;
