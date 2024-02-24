
  //Methodology
import React from 'react';
import styles from './Methodology.module.css';
import Image from 'next/image';

export const Methodology = () => {
  return (
    <div className={styles.Methodology__container}>
      <div className={styles.Methodology__title}>
        <h2>Nuestra metodología:<span className={styles.Dot}>.</span></h2>
      </div>
      <div className={styles.Methodology__container_steps}>
         <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/analisis.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Descubrimiento</h3>
             <p>Trabajaremos contigo para definir los objetivos de la aplicación y las funcionalidades que se requieren.</p>
             <p>Te asesoraremos sobre las mejores prácticas en desarrollo de apps con Odoo.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/estrategia.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Diseño</h3>
            <p>Crearemos un diseño intuitivo y atractivo que se adapte a la imagen de tu marca.</p>
            <p>Te presentaremos prototipos y mockups para que puedas visualizar la aplicación antes de su desarrollo.</p>
            <p>Validaremos el diseño con usuarios reales para asegurarnos de que sea fácil de usar y cumpla con sus expectativas.</p>

          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/iteration.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Desarrollo</h3>
            <p>Utilizaremos las últimas tecnologías y frameworks de Odoo para desarrollar una aplicación robusta y escalable.</p>
            <p>Te mantendremos informado del progreso del desarrollo mediante comunicaciones constantes.</p>
            <p>Realizaremos pruebas exhaustivas para garantizar la calidad de la aplicación.</p>

            
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/support.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Implementación</h3>
            <p>Te ayudaremos a implementar la aplicación en tu entorno de producción.</p>
            <p>Ofreceremos capacitación a tu equipo para que puedan usar la aplicación de manera eficiente.</p>
            <p>Brindaremos soporte técnico continuo para resolver cualquier problema que pueda surgir.</p>
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src="/inspection.svg" width={500} height={500} alt="step1" />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Evolución</h3>
            <p>Continuaremos trabajando contigo para mejorar la aplicación y adaptarla a las nuevas necesidades de tu negocio.</p>
            <p>Te ofreceremos actualizaciones y nuevas funcionalidades de forma regular.</p>
            <p>Te ayudaremos a mantener la aplicación actualizada y segura.</p>
            
             </div>
          </div>
      </div>

    
    </div>
  );
}

export default Methodology;