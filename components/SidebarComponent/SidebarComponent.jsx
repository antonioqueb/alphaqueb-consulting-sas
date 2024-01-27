import React from 'react';
import styles from './SidebarComponent.module.css';
import Link from 'next/link';

const SidebarComponent = () => {
  return (
    <div className={styles.sidebar}>
      <section className={styles.sidebar_section}>
        
        {/* Icono del Menú y Título */}
          <h3 className={styles.sidebar_title}>Menú</h3>

        {/* Links del Menú */}
        <div className={styles.sidebar_links}>
          <Link href="/" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Inicio
          </Link>
          <Link href="/about" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Nosotros
          </Link>
          <Link href="/contact" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Contacto
          </Link>
          <Link href="/blog" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Blog
          </Link> 


          {/* Categoría: Servicios */}
          <h4 className={styles.sidebar_subtitle}>Servicios</h4>
          <Link href="/software-development" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Desarrollo de Software
          </Link>
          <Link href="/it-consulting" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Consultoría de TI
          </Link>
          <Link href="/ux-ui-design" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Diseño UX/UI
          </Link>
          <Link href="/digital-strategy" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Estrategia Digital
          </Link>
          <Link href="/maintenance-support" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Mantenimiento y Soporte
          </Link>

          {/* Categoría: Productos */}
          <h4 className={styles.sidebar_subtitle}>Productos</h4>
          <Link href="/product-management" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Gestión de Productos
          </Link>
          <Link href="/business-intelligence" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Inteligencia de Negocios
          </Link>

          {/* Categoría: Tecnología */}
          <h4 className={styles.sidebar_subtitle}>Tecnologías</h4>
          <Link href="/cloud-services" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Servicios en la Nube
          </Link>
          <Link href="/data-analytics" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Análisis de Datos
          </Link>
          <Link href="/machine-learning" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Aprendizaje Automático
          </Link>
          <Link href="/internet-of-things" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Internet de las Cosas
          </Link>
          <Link href="/blockchain" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Blockchain
          </Link>
          <Link href="/artificial-intelligence" className={styles.sidebar_link} activeClassName={styles.sidebar_link_active}>
            Inteligencia Artificial
          </Link>
       
          
        </div>
      </section>
    </div>
  );
}

export default SidebarComponent;
