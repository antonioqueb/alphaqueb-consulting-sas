
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
            <Image className={styles.Methodology__container_steps_step_image__img} src="/analisis.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Comprensión Profunda</h3>
             <p>Iniciamos con un análisis exhaustivo para comprender tu negocio y trazar una estrategia personalizada. Este enfoque asegura soluciones ajustadas a tus necesidades actuales y futuras, marcando el inicio de una transformación significativa y un crecimiento sostenido.</p>
             <p>Profundizamos en tus operaciones y desafíos para alinear nuestras soluciones con tus objetivos. Este primer paso es crucial, sentando las bases para que tu visión empresarial comience a tomar forma y evolucionar.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/estrategia.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Planeación Digital</h3>
            <p>Seleccionamos tecnologías y procesos que se adaptan y escalan con tu negocio, estableciendo un plan flexible y evolutivo. Este enfoque garantiza que cada fase de tu transformación esté alineada con tus metas de crecimiento y adaptación.</p>
            <p>El plan es dinámico, creciendo con tu empresa y asegurando una base sólida para la transformación digital. Nos comprometemos a que tu viaje digital sea firme, coherente y progresivo.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/iteration.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Integración Impecable</h3>
            <p>Convertimos tu visión en realidad mediante una integración perfecta de soluciones en tu infraestructura actual, optimizando procesos y eficiencia. Esta fase es clave para una transición sin fisuras y una mejora continua de tu operatividad.</p>
            <p>Nuestro enfoque abarca más allá de la implementación inicial, proporcionando soporte continuo para superar desafíos futuros. Garantizamos que cada transición fortalezca tu negocio y facilite un cambio gestionado eficazmente.</p>
            
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/support.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Empoderamiento Digital</h3>
            <p>Post-implementación, enfocamos en capacitar a tu equipo para maximizar el uso de nuevas herramientas. Nuestro programa asegura que cada empleado se sienta confiado y competente, clave para el éxito continuo de tu transformación digital.</p>
            <p>Nuestro soporte se extiende más allá de la capacitación, ofreciendo asistencia constante para una transición suave y efectiva. Estamos comprometidos en fortalecer las capacidades de tu equipo, respaldando cada paso de tu viaje digital.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/inspection.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Evolución Constante</h3>
            <p>La transformación digital es un proceso continuo. Evaluamos constantemente el impacto de nuestras soluciones, ajustando estrategias para maximizar el rendimiento y el valor de tu inversión. Este enfoque iterativo nos mantiene en la vanguardia, buscando siempre maneras de mejorar y evolucionar.</p>
            <p>Nos dedicamos a que tu empresa no solo se mantenga al día, sino que lidere en innovación digital. Con nosotros, tu negocio está en un camino constante hacia nuevos horizontes de éxito y eficiencia, marcando la pauta en el sector.</p>
            
             </div>
          </div>
      </div>

    
    </div>
  );
}

export default Methodology;