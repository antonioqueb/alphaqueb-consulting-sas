// Testimonials.jsx
import React from 'react'
import { CardTestimony } from '../CardTestimony/CardTestimony' // Asegúrate de que la ruta sea correcta
import styles from './Testimonials.module.css'

// Datos de los testimonios (puedes mover esto a un archivo JSON y luego importarlo)
const testimonies = [
  {
    imageSrc: '/cammy-arenas.webp',
    altText: 'Foto de Cammy Arenas',
    testimony: 'Excelente servicio en todos los aspectos. Extremadamente profesional y atento en absolutamente todos los detalles. Quedé más que satisfecha con su trabajo.',
    name: 'Cammy Arenas'
  },
  {
    imageSrc: '/gema-p.webp',
    altText: 'Imagen de Gema P.',
    testimony: 'La mejor elección que he hecho fue contratarlos para mí proyectos, son pacientes, profesionales y me han guíado en todo el proyecto. Si tienen la oportunidad de trabajar con ellos no duden en hacerlo.',
    name: 'Gema - Arktoart'
  },
  {
    imageSrc: '/evelyn.webp',
    altText: 'Imagen de Evelyn Santos.',
    testimony: 'Usabamos odoo desde hace 3 años pero solo para registrar ventas, no sabíamos del potencial del sistema hasta que llegamos con esta empresa. Los recomiendo ampliamente.',
    name: 'Evelyn Santos'
  }

]

export const Testimonials = () => {
  return (
    <>
    <div className={styles.Testimonials__container__title}>
    <h2 className='text-[1.5rem] font-semibold mb-6 lg:text-4xl xl:text-5xl'>Testimonios<span className={styles.Dot}>.</span></h2>

    </div>

    <div className={styles.Testimonials__container}>
      {testimonies.map((testimony, index) => (
        <CardTestimony
          key={index}
          imageSrc={testimony.imageSrc}
          altText={testimony.altText}
          testimony={testimony.testimony}
          name={testimony.name}
        />
      ))}
    </div>
    </>
  )
}

export default Testimonials
