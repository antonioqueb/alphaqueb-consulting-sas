
  //Methodology
import React from 'react';
import styles from './Methodology.module.css';
import Image from 'next/image';

export const Methodology = () => {
  return (
    <div className={styles.Methodology__container}>
      <div className={styles.Methodology__title}>
        <h2>Nuestra Metodología<span className={styles.Dot}>.</span></h2>
      </div>
      <div className={styles.Methodology__container_steps}>
         <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/analisis.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Diagnóstico:</h3>
            <p>Iniciamos con un análisis profundo para entender a fondo tus necesidades y retos. Cada aspecto de tu operación es examinado, estableciendo un diagnóstico integral que guía nuestras futuras acciones.</p>
            <p>Siguiendo el diagnóstico, conectamos los hallazgos con soluciones estratégicas, asegurando que cada paso esté alineado con tus objetivos y expectativas del mercado.</p>

          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/estrategia.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Planeación:</h3>
            <p>Desarrollamos una estrategia personalizada, seleccionando tecnologías y procesos que no solo se ajustan a tus necesidades actuales sino que también son escalables. Esta estrategia es tu mapa hacia la transformación digital.</p>
            <p>La estrategia evoluciona contigo, adaptándose a cambios y anticipando necesidades futuras. Es un plan vivo, diseñado para crecer y adaptarse junto con tu negocio.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/iteration.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Implementación y Gestión del Cambio:</h3>
            <p>Implementamos soluciones tecnológicas y gestionamos el cambio organizacional de manera precisa y fluida. Este enfoque práctico asegura una integración perfecta y minimiza las interrupciones.</p>
            <p>La gestión del cambio es continua, con soporte y guía en cada etapa. Anticipamos obstáculos y aseguramos que la transición sea no solo exitosa, sino también sostenible.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/support.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Formación y Soporte:</h3>
            <p>Ofrecemos un programa de formación integral que empodera a tu equipo y maximiza el potencial de las nuevas herramientas. Nuestro entrenamiento inspira confianza y competencia.</p>
            <p>El soporte continúa más allá de la formación. Estamos comprometidos a resolver dudas y garantizar una transición fluida, asegurando que cada miembro del equipo se sienta apoyado y capacitado.</p>

          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/inspection.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Evaluación y Mejora Continua:</h3>
            <p>Nuestra búsqueda de excelencia implica una evaluación y mejora continuas. Analizamos el impacto de las soluciones implementadas y ajustamos estrategias para optimizar los resultados.</p>
            <p>Este enfoque iterativo garantiza que tu inversión en transformación digital siga generando valor, elevando tu empresa hacia nuevos horizontes de éxito y eficiencia.</p>
          </div>
          </div>
      </div>

    
    </div>
  );
}

export default Methodology;