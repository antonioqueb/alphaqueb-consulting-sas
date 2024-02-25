// Testimonials.jsx
import React from 'react'
import { CardTestimony } from '../CardTestimony/CardTestimony' // Asegúrate de que la ruta sea correcta
import styles from './Testimonials.module.css'

// Datos de los testimonios (puedes mover esto a un archivo JSON y luego importarlo)
const testimonies = [
  {
    imageSrc: '/cammy-arenas.jpg',
    altText: 'Foto de Cammy Arenas',
    testimony: 'Excelente servicio en todos los aspectos. Extremadamente profesional y atento en absolutamente todos los detalles. Quedé más que satisfecha con su trabajo.',
    name: 'Cammy Arenas'
  },
  {
    imageSrc: '/gema-p.jpg',
    altText: 'Imagen de Gema P.',
    testimony: 'La mejor elección que he hecho fue contratarlos para mí proyectos, son pacientes, profesionales y me han guíado en todo el proyecto. Si tienen la oportunidad de trabajar con ellos no duden en hacerlo.',
    name: 'Gema P.'
  },
  {
    imageSrc: '/jose-antonio.jpeg',
    altText: 'Imagen de José Antonio',
    testimony: 'Excelente servicio, muy profesionales y atentos. Los recomiendo ampliamente.',
    name: 'José Antonio'
  },

  {
    imageSrc: '/carlos.jpeg',
    altText: 'Imagen de Carlos Sánchez',
    testimony: 'Muy atentos con cada parte de mi proyecto, me ayudaron a entender cada paso y me guiaron en todo momento. Los recomiendo ampliamente.',
    name: 'Carlos Sánchez'
  },


  // ... más testimonios
]

export const Testimonials = () => {
  return (
    <>
    <div className={styles.Testimonials__container__title}>
    <h2 className={styles.Testimonials__title}>Testimonios<span className={styles.Dot}>.</span></h2>

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
