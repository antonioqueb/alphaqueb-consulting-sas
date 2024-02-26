
// CardPost
import React from 'react'
import styles from './CardPost.module.css'
import Image from 'next/image'
import Link from 'next/link'


export const CardPost = ({ Titulo, Description, ImagePost }) => {  
  // Longitudes máximas
  const maxTituloLength = 100
  const maxDescriptionLength = 260

  // Función para cortar el texto y añadir '...'
  const truncate = (str, maxLength) => {
    if (str) {
      return str.length > maxLength ? str.substring(0, maxLength) + '...' : str
    } else {
      return '' // O algún valor por defecto si prefieres
    }
  }

  return (
    <div className={styles.CardPosts__container__news}>
      <Image
        src={ImagePost}
        alt={Titulo}
        width={400}
        height={400}
        className={styles.CardPost__container__news__image__img}
      />
      <div className={styles.CardPost__container__news__title}>
        <h3>{truncate(Titulo, maxTituloLength)}</h3>   
      </div>
      <div className={styles.CardPost__container__news__description}>
        <p>{truncate(Description, maxDescriptionLength)}</p>
      </div>
    </div>
  )
}

export default CardPost
