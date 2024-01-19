
  //Services
import React from 'react';
import styles from './Services.module.css';
import Image from 'next/image';

export const Services = () => {
  return (
    <div className={styles.Services__container}>
      <div className={styles.Services__container__title}>
        <h1>Services</h1>
        </div>
      <div className={styles.Services__container__content}>
        <div className={styles.Services__container__content__item}>
          <Image src="/sistemas.svg" alt="Desarrollo de sistemas" width={280} height={280} />
          <h3>Desarrollo de Sistemas</h3>
          <p>Creación de sistemas web y aplicaciones móviles con enfoque en diseño responsivo, experiencia de usuario y funcionalidad robusta.</p> 
       </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/bot.svg" alt="Data e Inteligencia Artificial" width={280} height={280} />
          <h3>Inteligencia Artificial y Datos</h3>
          <p>Integración de soluciones de IA y análisis de datos para automatización de procesos, insights de negocio y toma de decisiones basada en datos.</p>
        </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/estrategia-digital.svg" alt="Estrategia Digital" width={280} height={280} />
          <h3>Estrategia Digital</h3>
          <p>Consultoría en transformación digital, planificación estratégica y adaptación tecnológica para optimizar operaciones y mejorar la presencia en el mercado digital.</p>
        </div>
        <div className={styles.Services__container__content__item}>
          <Image src="/learn.svg" alt="Soporte Capacitacion Continua" width={280} height={280} />
          <h3>Soporte y Capacitación</h3>
          <p>Servicios de soporte técnico continuo y programas de capacitación para asegurar el aprovechamiento óptimo de las herramientas y tecnologías implementadas.</p>
        </div>
        </div>
  
      
    </div>
  );
}

export default Services;