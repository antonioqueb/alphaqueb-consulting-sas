
  //Methodology
import React from 'react';
import styles from './Methodology.module.css';
import Image from 'next/image';

export const Methodology = () => {
  return (
    <div className={styles.Methodology__container}>
      <div className={styles.Methodology__title}>
        <h2>Metodología<span className={styles.Dot}>.</span></h2>
      </div>
      <div className={styles.Methodology__container_steps}>
         <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/analisis.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Comprensión Profunda</h3>
            <p>Damos inicio con un análisis exhaustivo, sumergiéndonos en las profundidades de tu empresa. Nuestra meta es entender cada faceta de tu negocio, desde la operación diaria hasta tus metas a largo plazo. Este entendimiento profundo sienta las bases para una estrategia personalizada.</p>
            <p>En este primer paso crucial, no dejamos piedra sin mover. Al comprender tus necesidades y retos, podemos diseñar soluciones que no solo responden a tus requisitos actuales, sino que también se alinean con tus aspiraciones futuras. Es aquí donde tu visión comienza a tomar forma.</p>

          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/estrategia.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Planeación Digital</h3>
            <p>Con una comprensión clara de tu negocio, pasamos a la fase de planeación. Aquí, seleccionamos las tecnologías y procesos más adecuados, diseñando una estrategia que no solo resuelve tus necesidades actuales, sino que también es escalable y flexible frente a los cambios futuros.</p>
            <p>Este plan no es estático; es un ente vivo que evoluciona junto con tu negocio. Estamos comprometidos a asegurar que cada paso en tu ruta hacia la transformación digital sea firme y esté alineado con tus metas de crecimiento y adaptación.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/iteration.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Integración Impecable</h3>
            <p>La implementación de nuestras soluciones es donde la visión se convierte en realidad. Nos enfocamos en una integración sin fisuras de las tecnologías, asegurando que cada solución se incruste perfectamente en tu infraestructura existente, optimizando los procesos y potenciando la eficiencia.</p>
            <p>Entendemos que el cambio es un proceso continuo. Por ello, nuestro enfoque en la gestión del cambio no solo se centra en la implementación inicial, sino que también proporciona el soporte necesario para adaptarse a los desafíos emergentes. Estamos aquí para asegurarnos de que cada transición sea fluida y fortalezca tu negocio.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/support.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Empoderamiento Digital</h3>
            <p>Una vez implementadas las soluciones, la atención se centra en tu equipo. Nuestro programa de capacitación está diseñado para empoderar a tus empleados, asegurando que estén bien equipados para maximizar el potencial de las nuevas herramientas y procesos.</p>
            <p>Pero nuestro apoyo no termina con la capacitación. Estamos comprometidos a proporcionar un soporte continuo, resolviendo dudas y facilitando una transición fluida. Queremos que cada miembro de tu equipo se sienta confiado y competente, asegurando así el éxito continuo de tu transformación digital.</p>

          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/inspection.svg" width={700} height={700} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Evolución Constante</h3>
            <p>La transformación digital no es un destino, sino un viaje continuo. Por eso, nuestra metodología incluye una evaluación constante del impacto de las soluciones implementadas. Analizamos los resultados y ajustamos las estrategias para optimizar el rendimiento y garantizar que tu inversión siga generando valor.</p>
            <p>Este enfoque iterativo significa que siempre estamos buscando maneras de mejorar y evolucionar. Nos dedicamos a asegurar que tu empresa no solo se mantenga al día con las tendencias digitales, sino que las lidere, elevándote a nuevos horizontes de éxito y eficiencia.</p>
          </div>
          </div>
      </div>

    
    </div>
  );
}

export default Methodology;