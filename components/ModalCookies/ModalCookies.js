'use client'
import { useEffect, useState } from "react"

export default function ModalCookies() {
  const [showModal, setShowModal] = useState(false)
  const [cookiePrefs, setCookiePrefs] = useState({
    essential: true,
    tracking: false,
  })

  // Mostrar modal después de 5 segundos
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [])

  // Función para actualizar las preferencias de cookies
  const handleCookiePrefChange = (type) => {
    setCookiePrefs((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }))
  }

  // Función para guardar las preferencias de cookies
  const handleSavePrefs = () => {
    // Implementar la lógica para guardar las preferencias en cookies o almacenamiento local
    // Ejemplo: usando `localStorage`
    localStorage.setItem("cookiePrefs", JSON.stringify(cookiePrefs))

    // Cerrar el modal
    setShowModal(false)
  }

  return (
    <section
      className={`z-50 absolute max-w-xs p-4 mx-auto bg-darkprimary border border-gray-200 dark:bg-gray-800 left-12 bottom-4 dark:border-gray-700 rounded-2xl  ${
        showModal ? "block" : "hidden"
      }`}
    >
      <h2 className="font-semibold text-white dark:text-white">
        🍪 ¡Usamos cookies!
      </h2>

      <p className="mt-4 text-sm text-white dark:text-gray-300">
        Para mejorar tu experiencia en este sitio web, usamos cookies. 
        <a
          href="/politica-de-cookies"
          className="font-medium text-white pl-1 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blueprimary"
        >
          Política de cookies
        </a>
        .
      </p>

     
      <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button
          className="text-xs bg-blueprimary font-medium rounded-lg hover:bg-gray-700 text-darkprimary  px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={() => handleSavePrefs()}
        >
          Aceptar todo
        </button>

        <button
          className="text-xs border text-white hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 hover:text-darkprimary font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
          onClick={() => handleSavePrefs()}
        >
          Rechazar todo
        </button>
      </div>

      
    

      
    </section>
  )
}