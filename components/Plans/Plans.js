'use client'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const NavbarComponent = () => {
  const handlePay = async (packageName, totalPrice, imageProduct) => {
    console.log(`**Paquete Seleccionado:** ${packageName}`)
    console.log(`**Precio Total:** $${totalPrice}`)
    
    try {
      const product = { 
        name: packageName, 
        price: totalPrice,
        image: imageProduct
      }
    
      const res = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    
      const session = await res.json() 
      window.location = session.url
    } catch (error) {
      console.error('Error during checkout:', error)
      // Handle the error, e.g., display an error message to the user
    }
  }

  return (
    <>
     
        <div className='w-full mx-auto mb-14 text-start lg:text-center'>
            <h1 className='text-[1.5rem] font-semibold mb-6 lg:text-4xl xl:text-5xl'>Nuestros Servicios<span className="text-[#26E1FF]">.</span></h1>
            <p className='text-[1rem] text-gray-100 lg:text-[1.5rem]'>Ofrecemos tres paquetes de proyectos diseñados para adaptarse a tus necesidades digitales con Odoo, asegurando una solución integral a medida de tu negocio. Todos nuestros precios son transparentes y finales, incluyendo IVA.</p>
        </div>
        
        <div className='flex flex-col justify-between pb-10 items-center lg:flex-row lg:items-start '>
            
            <div className='w-full flex-1 mt-8 p-8 order-1 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none'>
            <div className='mb-7 pb-7 flex items-center border-b border-gray-300'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500'>Elemental</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>1,260 USD</span></span>
                </div>
            </div>
                <ul className='mb-7 font-medium text-gray-700'>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Instalación y configuración de módulos básicos de Odoo.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Capacitación básica para usuarios y administradores.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Soporte inicial para garantizar una puesta en marcha exitosa.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Ajustes básicos para adaptar Odoo a tus necesidades iniciales.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check' />
                  <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Análisis inicial de procesos de negocio para recomendaciones de mejora.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check' />
                  <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Configuración inicial de informes y dashboards para seguimiento de KPIs.</span>
                </li>

               
            </ul>
            <button href='#/' className='flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-[1rem]' onClick={() => handlePay('Paquete Soluciones Express Odoo 4 Horas', 126000, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
                Comprar Paquete
                <GoArrowRight className='text-black' style={{ fill: 'white' }} />

            </button>
            </div>
            
            <div className='w-full flex-1 p-8 order-2 shadow-xl rounded-3xl bg-gray-700 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0'>
            <div className='mb-8 pb-8 flex items-center border-b border-gray-600'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-[1.5rem] font-semibold text-white '>Avanzado</span>
                <span><span className='font-medium text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-white'>9,750 USD </span></span>
                </div>
            </div>
            <ul className='mb-10 font-medium text-[1rem]'>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Implementación de módulos adicionales para extender la funcionalidad.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Personalización intermedia de flujos de trabajo y procesos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Capacitación avanzada para usuarios sobre funcionalidades específicas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Soporte extendido y consultoría para optimizar el uso de Odoo.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check' />
                  <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Diseño y automatización de procesos de negocio críticos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check' />
                  <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Implementación de políticas de seguridad y acceso por roles.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check' />
                  <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Integración básica con plataformas de comercio electrónico y CRM.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check' />
                  <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Gestión de inventario avanzada para optimización de stock.</span>
                </li>
                <li className='flex text-sm mb-3'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check' />
                  <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Analítica y reportes mejorados para insights de negocio.</span>
                </li>
            </ul>
            <button href='#/' className='flex justify-center items-center bg-white rounded-xl py-6 px-4 text-center text-black text-[1rem]' onClick={() => handlePay('Paquete Proyectos Odoo a Medida 40 Horas', 975000, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'black' }} />

            </button>
            </div>
            
            <div className='w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none'>
            <div className='mb-7 pb-7 flex items-center border-b border-gray-300'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500'>Evolución</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>34,810 USD</span></span>
                </div>
            </div>
            <ul className='mb-7 font-medium text-gray-700'>
            <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Análisis detallado de necesidades y diseño de solución personalizada.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Implementación y personalización profunda de Odoo, incluyendo desarrollo de módulos a medida.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Integración avanzada con sistemas y aplicaciones externas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                  <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check' />
                  <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Desarrollo de interfaces de usuario personalizadas para una mejor experiencia.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Soporte exclusivo y consultoría estratégica para asegurar el máximo rendimiento y escalabilidad.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Capacitación personalizada para usuarios y administradores, asegurando una adopción completa y eficiente del sistema.</span>
                </li>
                </ul>
            <button href='#/' className='flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-[1rem]' onClick={() => handlePay('Paquete Evolución Odoo Total 200 Horas', 3481000, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'white' }} />
            </button>
            </div>
            
        </div>
        
        
  

    </>
  )
}

export default NavbarComponent
