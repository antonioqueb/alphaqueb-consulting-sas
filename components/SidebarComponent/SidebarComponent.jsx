'use client'

import styles from './SidebarComponent.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillApi } from 'react-icons/ai'
import { MdContactPage } from 'react-icons/md'
import React, { useState, useEffect } from 'react'
import { RiSearch2Fill } from 'react-icons/ri'









const SidebarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  

  const closeSidebar = () => {

    setIsSidebarOpen(false)
    
  }




  useEffect(() => {
    // Aquí puedes realizar alguna acción cuando cambie el estado del sidebar
  }, [isSidebarOpen])
  return (
    <div className={`${styles.sidebar} ${!isSidebarOpen && styles['sidebar-closed']}`}>
      <section className={styles.sidebar_section}>
        
        {/* Icono del Menú y Título */}
        <Link href='/' className={styles.sidebar_link_logo} activeClassName={styles.sidebar_link_active_logo} onClick={closeSidebar}>
          <div className={styles.Hero__container__header}>
      
        </div>
          </Link>
    

        {/* Links del Menú */}
        <div className={styles.sidebar_links}>
          
          <Link href='/nosotros' className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
           <AiFillApi className={styles.sidebar_icon} />
            Nosotros
          </Link>
          <Link href='/contacto' className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
           <MdContactPage className={styles.sidebar_icon} />
            Contacto
          </Link>
          <Link href='/blogs' className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
            <RiSearch2Fill className={styles.sidebar_icon} />
            Blog
          </Link>
          
        </div>
      </section>
    </div>
  )
}

export default SidebarComponent
