
  //LastNews
import React from 'react';
import styles from './LastNews.module.css';
import { CardPost } from '../CardPost/CardPost';

export const LastNews = () => {
  return (
    <>
    <div className={styles.LastNews__container__title}>
      <h2 className={styles.LastNews__title}>Últimas Noticias<span className={styles.Dot}>.</span></h2>
    
    </div>
    <div className={styles.LastNews__container}>
      
      <CardPost Titulo="Mejor ERP en 2024" Description="Elige el ERP destacado de 2024 para una gestión y análisis empresarial superior. Maximiza la eficiencia y lidera tu industria con nuestra solución integral." ImagePost="/erp.webp" />
      <CardPost Titulo="¿Cómo la Automatización Ayudará a Mi Negocio?" Description="Descubre cómo la automatización potencia la eficiencia, reduce costos y acelera el crecimiento. Transforma tu negocio para el futuro hoy." ImagePost="/automatizacion.jpg"/>
      <CardPost Titulo="Negocios Rentables en 2024" Description="Identifica las oportunidades de mercado más lucrativas en 2024. Invierte con inteligencia y asegura un crecimiento sostenible y rentable." ImagePost="/rentabilidad.jpg"/>
      <CardPost Titulo="Sistematizar es el Secreto para Crecer sin Límites" Description="Aprende a sistematizar tu negocio para un crecimiento escalable. Descubre estrategias que rompen barreras y aseguran un éxito continuo." ImagePost="/sistematizar.png"/>


      
    </div>
    </>
  );
}

export default LastNews;