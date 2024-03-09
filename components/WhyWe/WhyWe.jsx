import React from 'react'
import Image from 'next/image'

export default function WhyWe () {
  return (
    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
        
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='whywe.svg'  alt='wyhywephoto' width={500} height={500} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
          <h2 className="text-[1.8rem] font-semibold m-0 mb-8 text-left leading-tight lg:text-4xl xl:text-5xl">¿Sómos para ti?</h2>
          <p className="text-xl text-left mb-4 lg:text-[1.5rem]">
          En <span className="text-[#26E1FF]">Alphaqueb Consulting S.A.S.</span> Sabemos que Odoo es una herramienta poderosa, pero también entendemos que cada empresa tiene su propia identidad y desafíos únicos. Por eso, ofrecemos:</p>
          <lu>
            <li className="text-xl text-left mb-4 lg:text-[1.5rem]" ><strong>Soluciones Hechas a la Medida de tu Negocio:</strong> Adaptamos y extendemos Odoo para cumplir con tus requisitos específicos, asegurando que cada función se alinee perfectamente con tus procesos empresariales.</li>
          </lu>

          </div>     
    </div>
  )
}
