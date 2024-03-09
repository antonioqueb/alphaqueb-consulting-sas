// Methodology

import React from 'react'
import Image from 'next/image'

export default function Methodology () {

  return (
  <>
    <div className="text-center mt-10 mb-10">
            <h2 className='text-[1.8rem] sm:text-5xl font-semibold m-0 mb-10 mt-20 text-left     leading-tight lg:text-4xl text-center xl:text-5xl'>
             Nuestra Metodología<span className="text-blueprimary">.</span>
           </h2>
    </div>


    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/discovery.svg'  alt='discovery' width={600} height={600} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Descubrimiento<span className="text-[#26E1FF]">.</span>
        </h2>

         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Análisis de Requerimientos:</strong > Comprendemos tus necesidades, objetivos y procesos para crear una solución a medida.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Definición de la Aplicación:</strong> Identificamos las funcionalidades esenciales y establecemos un plan de desarrollo colaborativo.</p>
          </div>     
    </div>







    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row-reverse text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/develop.svg'  alt='development' width={600} height={600} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Desarrollo<span className="text-[#26E1FF]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Tecnología de Vanguardia:</strong > Utilizamos tecnologías y frameworks avanzados de Odoo para desarrollar aplicaciones robustas y escalables.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Comunicación Continua:</strong> Aseguramos que el proyecto cumpla con tus expectativas a través de actualizaciones regulares.</p>
          </div>     
    </div>















    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/implement.svg'  alt='Implementación de tu módulo odoo a medida' width={600} height={600} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Implementación<span className="text-[#26E1FF]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Asistencia Técnica:</strong > Facilitamos la integración de la solución en tu entorno de producción, garantizando una transición suave.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Capacitación Personalizada:</strong> Proporcionamos formación y soporte técnico para que tu equipo maximice la utilidad de la aplicación.</p>
          </div>     
    </div>

















    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row-reverse text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/evo.svg'  alt='Evolución de tu módulo odoo a medida' width={600} height={600} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Evolución<span className="text-[#26E1FF]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Mejora Continua:</strong > Nos comprometemos a actualizar y optimizar la aplicación según las necesidades cambiantes de tu negocio.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Mantenimiento y Seguridad:</strong> Ofrecemos servicios de mantenimiento para asegurar el rendimiento óptimo y la seguridad de la aplicación.</p>
          </div>     
    </div>










    </>

  )
}


