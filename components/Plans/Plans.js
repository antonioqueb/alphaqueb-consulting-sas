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
            <h1 className='text-[1.8rem] font-semibold mb-6 lg:text-4xl xl:text-5xl'>Nuestros Honorarios<span className="text-[#26E1FF]">.</span></h1>
            <p className='text-[1rem] text-gray-100 lg:text-[1.5rem]'>Desde ajustes rápidos hasta proyectos integrales, tenemos una solución a tu medida. Todos nuestros precios son transparentes e incluyen IVA.  *Ahorro respecto al paquete de 2 Horas.</p>
        </div>
        
        <div className='flex flex-col justify-between pb-10 items-center lg:flex-row lg:items-start '>
            
            <div className='w-full flex-1 mt-8 p-8 order-1 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none'>
            <div className='mb-7 pb-7 flex items-center border-b border-gray-300'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500'>2 Horas</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>117 USD</span></span><span className='text-gray-600 font-medium'>/ hora</span>
                </div>
            </div>
                <ul className='mb-7 font-medium text-gray-500'>
                <p className='text-[1rem] font-semibold mb-2 text-black xl:text-[1.2rem]'>Perfecto para tareas rápidas y ajustes precisos:</p>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Optimización y correcciones de vistas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Ajustes y mejoras en modelos de datos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Resolución rápida de problemas y errores.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Ajustes en secuencias y precisión decimal.</span>
                </li>
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500 mt-4'>Total</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>234 USD</span></span>
                </div>

            </ul>
            <button href='#/' className='flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-[1rem]' onClick={() => handlePay('Paquete Soluciones Express Odoo 4 Horas', 23400, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
                Comprar Paquete
                <GoArrowRight className='text-black' style={{ fill: 'white' }} />

            </button>
            </div>
            
            <div className='w-full flex-1 p-8 order-2 shadow-xl rounded-3xl bg-gray-700 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0'>
            <div className='mb-8 pb-8 flex items-center border-b border-gray-600'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-[1.5rem] font-semibold text-white '>60 Horas</span>
                <span><span className='font-medium text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-white'>75 USD </span></span><span className='font-medium'>/ hora</span>
                </div>
            </div>
            <ul className='mb-10 font-medium text-[1rem]'>
            <p className='text-[1rem] font-semibold mb-2 text-white xl:text-[1.2rem]'>Diseñado para desarrollos y personalizaciones intermedias:</p>

                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Creación y personalización de modelos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Diseño y personalización avanzada de vistas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Automatización de procesos clave.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Modificación y mejora de módulos existentes.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Desarrollo de nuevas interfaces y vistas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Integración con ERP externos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Conexiones con Wordpress y aplicaciones externas.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Optimización de rendimiento para aplicaciones Odoo</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839581/arrow-white.svg.svg' alt='check'/>
                <span className='text-white text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Desarrollo de reportes personalizados: </span>
                </li>


                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-100  mt-4'>Total</span>
                <span><span className='font-medium text-gray-100 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-100'>4,500 USD</span></span>
               

                </div>
                <span className='text-gray-100 text-[1rem] ml-5'>*Ahorro del 35.90%</span>
            </ul>
            <button href='#/' className='flex justify-center items-center bg-white rounded-xl py-6 px-4 text-center text-black text-2xl' onClick={() => handlePay('Paquete Proyectos Odoo a Medida 40 Horas', 450000, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'black' }} />

            </button>
            </div>
            
            <div className='w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none'>
            <div className='mb-7 pb-7 flex items-center border-b border-gray-300'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/2.svg'  alt='Planes de precios' className='rounded-3xl w-20 h-20' />
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500'>400 Horas</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>39 USD</span></span><span className='text-gray-600 font-medium'>/ hora</span>
                </div>
            </div>
            <ul className='mb-7 font-medium text-gray-500'>
            <p className='text-[1rem] font-semibold mb-2 text-black xl:text-[1.2rem]'>Ideal para proyectos de integración y desarrollo a gran escala:</p>

                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Implementación de integraciones avanzadas con sistemas externos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Conexión directa con PLC y otros dispositivos de control.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Integración con sistemas contables externos.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Desarrollo de conexiones para formularios web.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Extensión de funcionalidades nativas de Odoo.</span>
                </li>
                <li className='flex text-sm mb-1'>
                <img src='https://res.cloudinary.com/dn5cltdre/image/upload/v1708839871/check-grey.svg' alt='check'/>
                <span className='text-black text-[1rem] font-thin pb-2 sm:text-[1rem] xl:text-[1.1rem] '>Desarrollo de soluciones personalizadas a medida.</span>
                </li>
                
                

                
                <div className='ml-5'>
                <span className='block text-2xl font-semibold text-gray-500  mt-4'>Total</span>
                <span><span className='font-medium text-gray-600 text-[1rem] align-top'>$</span><span className='text-[1.5rem] font-bold text-gray-600'>15,600 USD</span></span>
                

                </div>
                <span className='text-gray-600 text-[1rem] ml-5'>*Ahorro del 66.67%</span>



               
            </ul>
            <button href='#/' className='flex justify-center items-center bg-black rounded-xl py-5 px-4 text-center text-white text-[1rem]' onClick={() => handlePay('Paquete Evolución Odoo Total 200 Horas', 1560000, 'https://res.cloudinary.com/dn5cltdre/image/upload/v1708847679/1.svg')}>
            Comprar Paquete
            <GoArrowRight className='text-black' style={{ fill: 'white' }} />
            </button>
            </div>
            
        </div>
        
        
  

    </>
  )
}

export default NavbarComponent
