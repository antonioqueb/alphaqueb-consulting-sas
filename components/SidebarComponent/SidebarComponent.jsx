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






const SidebarComponent = () => {
  return (
    <div className={styles.sidebar}>
      <section className={styles.sidebar_section}>
        
        {/* Icono del Menú y Título */}
        <div className={styles.Hero__container__header}>
        <Image src="/logo.png" alt="Logotipo de la marca alphaqueb consulting s.a.s." width={40} height={40}/>
        <p className={styles.sidebar_title}>Alphaqueb</p>
      </div>

        {/* Links del Menú */}
        <div className={styles.sidebar_links}>
          <Link href="/" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <MdHomeFilled className={styles.sidebar_icon} />
            Inicio
          </Link>
          <Link href="/about" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
           <AiFillApi className={styles.sidebar_icon} />
            Nosotros
          </Link>
          <Link href="/contact" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
           <MdContactPage className={styles.sidebar_icon} />
            Contacto
          </Link>
          <Link href="/blog" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            <FaBlog className={styles.sidebar_icon} />
            Blog
          </Link> 


          {/* Categoría: Servicios */}
          <h4 className={styles.sidebar_subtitle}>Servicios</h4>
        <Link href="/software-development" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <MdDeveloperMode className={styles.sidebar_icon} />
          Desarrollo de Software
        </Link>
        <Link href="/cloud-integration" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <FaCloud className={styles.sidebar_icon} />
          Integración Cloud
        </Link>
        <Link href="/ui-ux-design" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <SiAffinitydesigner className={styles.sidebar_icon} />
          Diseño UI/UX
        </Link>
        <Link href="/digital-strategy" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <PiStrategyBold className={styles.sidebar_icon} />
          Estrategia Digital
        </Link>
        <Link href="/it-support" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <HiSupport className={styles.sidebar_icon} />
          Soporte TI
        </Link>
        <Link href="/process-automation" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <MdSettingsSuggest className={styles.sidebar_icon} />
          Automatización de Procesos
        </Link>
        <Link href="/data-analytics" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <SiGoogleanalytics className={styles.sidebar_icon} />
          Analítica de Datos
        </Link>
        <Link href="/blockchain-solutions" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <SiHiveBlockchain className={styles.sidebar_icon} />
          Soluciones Blockchain
        </Link>
        <Link href="/tech-training" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
          <AiFillBulb className={styles.sidebar_icon} />
          Capacitación Tech
        </Link>

         
          
        </div>
      </section>
    </div>
  );
}

export default SidebarComponent;
