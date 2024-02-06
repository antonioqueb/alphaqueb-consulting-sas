'use client';
import React from 'react';
import styles from './SidebarComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdHomeFilled } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { MdContactPage } from 'react-icons/md';
import { FaBlog } from 'react-icons/fa';
import { MdDeveloperMode } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import { SiAffinitydesigner } from "react-icons/si";
import { PiStrategyBold } from "react-icons/pi";
import { HiSupport } from "react-icons/hi";
import { MdSettingsSuggest } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { AiFillBulb } from "react-icons/ai";
import React, { useState, useEffect } from 'react';








const SidebarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Actualiza el estado al cerrar el sidebar
    
  };




  useEffect(() => {
    // Aquí puedes realizar alguna acción cuando cambie el estado del sidebar
  }, [isSidebarOpen]);
  return (
    <div className={`${styles.sidebar} ${!isSidebarOpen && styles['sidebar-closed']}`}>
      <section className={styles.sidebar_section}>
        
        {/* Icono del Menú y Título */}
        <Link href="/" className={styles.sidebar_link_logo} activeClassName={styles.sidebar_link_active_logo} onClick={closeSidebar}>
          <div className={styles.Hero__container__header}>
          <Image src="/logo.png" alt="Logotipo de la marca alphaqueb consulting s.a.s." width={60} height={60}/>
      
        </div>
          </Link>
    

        {/* Links del Menú */}
        <div className={styles.sidebar_links}>
          
          <Link href="/nosotros" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
           <AiFillApi className={styles.sidebar_icon} />
            Nosotros
          </Link>
          <Link href="/contacto" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
           <MdContactPage className={styles.sidebar_icon} />
            Contacto
          </Link>



          {/* Categoría: Servicios */}
          
        <h4 className={styles.sidebar_subtitle}>Servicios</h4>
        <Link href="/software-development" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
          <MdDeveloperMode className={styles.sidebar_icon} />
          Desarrollo a medida
        </Link>
        <Link href="/cloud-integration" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
          <FaCloud className={styles.sidebar_icon} />
          Consultoría y análisis
        </Link>
        
        <Link href="/digital-strategy" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active} onClick={closeSidebar}>
          <PiStrategyBold className={styles.sidebar_icon} />
          Mantenimiento y soporte
        </Link>
        
        

         
          
        </div>
      </section>
    </div>
  );
}

export default SidebarComponent;
