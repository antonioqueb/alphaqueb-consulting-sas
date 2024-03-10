import React from 'react'
import Image from 'next/image'
import { TiStarFullOutline } from 'react-icons/ti'

export const CardTestimony = ({ imageSrc, altText, testimony, name }) => {
  return (
    <article className="flex-1 min-w-[300px] min-h-[550px] flex flex-col justify-between bg-opacity-50 bg-black rounded-lg p-4 backdrop-filter backdrop-blur-lg mx-1">
        <figure className="flex justify-center">
        <Image
          src={imageSrc}
          alt={altText}
          width={80}
          height={80}
          className="rounded-full"
        />
      </figure>
      <div className="flex justify-center space-x-1 text-yellow-400">
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>
      <blockquote className="text-white text-opacity-80 mt-4 text-center">
        <p>{testimony}</p>
      </blockquote>
      <footer className="mt-4 text-blueprimary text-center">
        <h4>{name}</h4>
      </footer>
    </article>
  )
}

export default CardTestimony
