import React from 'react'
import Image from 'next/image'
import { TiStarFullOutline } from 'react-icons/ti'

export const CardTestimony = ({ imageSrc, altText, testimony, name }) => {
  return (
    <article className="w-72 h-96 bg-opacity-50 bg-black rounded-lg p-4 backdrop-filter backdrop-blur-lg mx-1 flex flex-col items-center justify-between">
      <div className="w-20 h-20 relative overflow-hidden rounded-full"> {/* Ajusta estas dimensiones según necesites */}
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover" // Esto asegura que la imagen cubra completamente el contenedor.
          className="rounded-full"
        />
      </div>
      <div className="flex justify-center space-x-1 text-yellow-400">
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>
      <blockquote className="text-white text-[1.1rem] text-opacity-80 mt-4 text-center">
        <p>{testimony}</p>
      </blockquote>
      <footer className="mt-4 text-blueprimary text-center">
        <h4>{name}</h4>
      </footer>
    </article>
  )
}

export default CardTestimony
