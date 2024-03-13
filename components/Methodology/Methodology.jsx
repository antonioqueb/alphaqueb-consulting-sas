// Methodology

import React from 'react'
import Image from 'next/image'

export default function Methodology () {

  return (
  <>
    <div className="text-center mt-10 mb-10">
            <h2 className='text-[1.5rem] sm:text-5xl font-semibold m-0 mb-10 mt-20 text-left     leading-tight lg:text-4xl text-center xl:text-5xl'>
             Nuestra Metodología<span className="text-blueprimary">.</span>
           </h2>
    </div>


    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/discovery.svg'  alt='discovery' width={750} height={750} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Descubrimiento<span className="text-[#26E1FF] text-[1.5rem]">.</span>
        </h2>

         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Identificación de Necesidades:</strong > Nos sumergimos en la comprensión de tus metas, desafíos y la dinámica operativa para diseñar una solución Odoo que se alinee perfectamente con tus expectativas.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Configuración Estratégica:</strong> Determinamos las funcionalidades clave y elaboramos una estrategia de implementación efectiva y personalizada.</p>
          </div>     
    </div>







    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row-reverse text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/integracion.svg'  alt='Integración Imagen Ilustrativa' width={750} height={750} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Integración<span className="text-[#26E1FF] text-[1.5rem]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Personalización e Integración:</strong > Nos especializamos en adaptar y conectar Odoo con tus sistemas existentes, garantizando una integración sin fisuras y eficiente.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Seguimiento y Ajustes:</strong> Mantenemos una línea de comunicación abierta para ajustes y refinamientos, asegurando que la solución se alinee con tus necesidades evolutivas.</p>
          </div>     
    </div>















    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/marcha.svg'  alt='Implementación de tu módulo odoo a medida' width={750} height={750} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Puesta en Marcha<span className="text-[#26E1FF] text-[1.5rem]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Soporte en la Implementación:</strong > Brindamos asistencia completa durante el lanzamiento, asegurando una incorporación fluida de Odoo en tus operaciones diarias.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Capacitación a Medida:</strong> Ofrecemos entrenamiento específico y soporte para empoderar a tu equipo en el aprovechamiento completo de la plataforma.</p>
          </div>     
    </div>

















    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row-reverse text-[#F2F2F2] py-10 md:py-20 lg:py-10">
            
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='/evo.svg'  alt='Evolución de tu módulo odoo a medida' width={750} height={750} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
        <h2 className="text-[1.7rem] sm:text-4xl font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl">
        Optimización Continua<span className="text-[#26E1FF] text-[1.5rem]">.</span>
        </h2>


         <p className='text-gray-300 text-2xl pb-3 sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Innovación y Mejora:</strong > Estamos dedicados a la evolución constante de tu solución, adaptándonos a las tendencias del mercado y a las necesidades cambiantes de tu empresa.</p>
         <p className='text-gray-300 text-2xl sm:text-[1.5rem]'><strong className="text-[#26E1FF]">Soporte y Seguridad:</strong> Proveemos un servicio integral de mantenimiento y seguridad, garantizando que tu sistema Odoo funcione a la perfección y de manera segura.</p>
          </div>     
    </div>










    </>

  )
}


