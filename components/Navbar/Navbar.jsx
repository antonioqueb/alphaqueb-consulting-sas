'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrMoreVertical } from 'react-icons/gr'
import SidebarComponent from '../SidebarComponent/SidebarComponent'

const links = [
  { href: '/contacto', label: 'Contacto', key: 'contacto' },
  { href: '/nosotros', label: 'Nosotros', key: 'nosotros' },
  { href: '/blogs', label: 'Blogs', key: 'blogs' },
]

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Nota: La clase 'px-48' es un ejemplo, debes ajustar el padding al valor que necesitas.
  return (
    <>
      <nav className={`z-10 py-4 backdrop-blur-sm transition-all duration-300 ${scrolled ? 'bg-[#0d0d0d]/50 backdrop-blur-lg' : ''}`}>
        <div className="flex justify-between items-center mx-auto"> {/* Ajusta las clases de padding aquí para asegurarte que lleguen a los extremos */}
          {/* Logo en el extremo izquierdo */}
          <div className="shrink-0">
            <Link href='/' passHref>
              <Image src='/brand/white.png' alt='Logo' width={60} height={60} />
            </Link>
          </div>

          {/* Links que se ocultan en pantallas pequeñas */}
          <div className={`hidden sm:flex items-center space-x-4 ${isSidebarOpen ? 'hidden' : ''}`}>
            {links.map(({ href, label, key }) => (
              <Link href={href} key={key} className="text-white text-xl px-4 cursor-pointer transition-colors duration-300 hover:text-[#26E1FF]">
                {label}
              </Link>
            ))}
          </div>

          {/* Icono del menú en el extremo derecho */}
          <div className="shrink-0" onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label='Abrir menú'>
            <GrMoreVertical className="text-white cursor-pointer transition-colors duration-300 hover:text-[#26E1FF] text-xl" />
          </div>
        </div>
      </nav>
      {isSidebarOpen && <SidebarComponent />}
    </>
  )
}

export default NavbarComponent

