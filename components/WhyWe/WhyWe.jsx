import React from 'react'
import Image from 'next/image'

export default function WhyWe () {
  return (
    <div className="flex justify-center items-center flex-col md:flex-col-reverse lg:flex-row text-[#F2F2F2] py-10 md:py-20 lg:py-10">
        
        <div className="flex-1 flex justify-center">
          <Image className="w-full h-auto object-contain md:max-w-xs lg:max-w-lg mx-auto my-8" src='whywe.svg'  alt='wyhywephoto' width={600} height={600} />
        </div>  

        <div className="justify-center flex-1 flex flex-col ite p-0 md:p-0 lg:px-4">
          <h2 className="text-[1.8rem] font-semibold m-0 mb-8 text-left leading-tight lg:text-6xl">Nuestra propuesta<span className="text-[#26E1FF]">.</span></h2>
          <p className="text-xl text-left mb-4 lg:text-3xl">
En Alphaqueb Consulting S.A.S., nos especializamos en el desarrollo de Odoo, ofreciéndote soluciones a medida para que puedas explotar todo el potencial de personalización que este ERP tiene para ofrecer.</p>
          </div>     
    </div>
  )
}
