
  //LastNews
import React from 'react';
import styles from './LastNews.module.css';
import { CardPost } from '../CardPost/CardPost';

export const LastNews = () => {
  return (
    <>
    <div className={styles.LastNews__container__title}>
      <h2 className={styles.LastNews__title}>Blog<span className={styles.Dot}>.</span></h2>
    
    </div>
    <div className={styles.LastNews__container}>
      
      <CardPost Titulo="Dominando la Comprensión Profunda en la Transformación Digital" Description="Descubre cómo un análisis exhaustivo puede ser el catalizador de una estrategia digital personalizada. Exploramos la importancia de entender cada faceta de tu negocio, desde la operación diaria hasta tus metas a largo plazo, y cómo esto establece un camino claro hacia el crecimiento y la innovación." ImagePost="/erp.webp" />
      <CardPost Titulo="¿Estrategias de Planeación Digital para un Futuro Escalable?" Description="Adéntrate en el arte de la planeación digital y cómo seleccionar las tecnologías y procesos más adecuados puede transformar tu negocio. Aprende sobre la creación de un plan flexible y evolutivo, diseñado para escalar con tu empresa y garantizar un progreso " ImagePost="/automatizacion.jpg"/>
      <CardPost Titulo="La Clave de una Integración Impecable en Sistemas Digitales" Description="Descubre cómo una integración perfecta puede cambiar el juego en tu transformación digital. Profundizamos en la importancia de fusionar soluciones con tu infraestructura existente, optimizando procesos y potenciando la eficiencia, y cómo asegurar una transición fluida que fortalezca tu negocio." ImagePost="/rentabilidad.jpg"/>
      <CardPost Titulo="Empoderamiento Digital: Capacitando Equipos para el Futuro" Description="Explora el poder del empoderamiento digital y cómo un equipo bien capacitado puede ser tu mayor activo. Hablamos sobre estrategias para equipar a tus empleados con las herramientas necesarias para maximizar el potencial de las nuevas tecnologías y garantizar el éxito continuo de tu transformación digital." ImagePost="/sistematizar.png"/>


      
    </div>
    </>
  );
}

export default LastNews;