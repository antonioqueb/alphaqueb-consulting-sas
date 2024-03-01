// Methodology

import React from 'react'
import styles from './Methodology.module.css'
import Image from 'next/image'

export default function Methodology () {
  return (
    <div className={styles.Methodology__container}>
      <div className={styles.Methodology__title}>
        <h2>Metodología de Desarrollo<span className={styles.Dot}>.</span></h2>
      </div>
      <div className={styles.Methodology__container_steps}>
         <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src='/discovery.svg' width={650} height={650} alt='step1' />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
            <h3>Requerimiento de personalización Odoo.</h3>
             <h4 className='text-2xl my-2'><strong>Etapa de descubrimiento:</strong></h4>
             <p className='text-gray-300'><strong >Conoceremos tu implementación:</strong > Entenderemos tus necesidades, objetivos y procesos para desarrollar una solución personalizada.</p>
             <p className='text-gray-300'><strong>Definiremos la aplicación:</strong> Trabajaremos contigo para identificar las funcionalidades clave y el plan de desarrollo.</p>
             </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src='/diseño.svg' width={700} height={700} alt='step1' />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
          <h3>Diseño Odoo Funcional.</h3>
          <h4 className='text-2xl my-2'><strong>Etapa de Diseño:</strong></h4>

          <p className='text-gray-300'><strong >Funcionalidad sobre diseño:</strong > Nos centramos en crear una interfaz intuitiva que priorice la funcionalidad del módulo.</p>
          <p className='text-gray-300'><strong>Aprovechamiento del diseño estándar de Odoo:</strong> Mantenemos la familiaridad y usabilidad de la plataforma.</p>

         
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src='/develop.svg' width={700} height={700} alt='step1' />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
          <h3>Desarrollo de software Odoo.</h3>
          <h4 className='text-2xl my-2'><strong>Etapa de Desarrollo:</strong></h4>

          <p className='text-gray-300'><strong >Tecnologías y frameworks de vanguardia:</strong >  Implementamos las últimas tecnologías y frameworks de Odoo para construir una aplicación robusta y escalable.</p>
          <p className='text-gray-300'><strong>Comunicación constante:</strong> Te mantenemos informado del progreso del desarrollo mediante comunicaciones constantes, asegurando que el proyecto esté alineado con tus expectativas.</p>
    
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_right}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src='/implement.svg' width={700} height={700} alt='step1' />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
          <h3>Implementación tu solución personalizada Odoo.</h3>
          <h4 className='text-2xl my-2'><strong>Etapa de Implementación:</strong></h4>

          <p className='text-gray-300'><strong >Asistencia en la implementación:</strong > Te ayudaremos a implementar la aplicación en tu entorno de producción, asegurándonos de que la transición sea fluida y sin interrupciones.</p>
          <p className='text-gray-300'><strong>Capacitación personalizada:</strong> Ofreceremos capacitación y soporte técnico personalizado a tu equipo para que puedan usar la aplicación de manera eficiente, aprovechando al máximo todas sus funcionalidades.</p>
    
          </div>
          </div>
          <div className={styles.Methodology__container_steps_step_left}>
         <div className={styles.Methodology__container_steps_step_image}>
            <Image className={styles.Methodology__container_steps_step_image__img} src='/evo.svg' width={700} height={700} alt='step1' />
          </div>
          <div className={styles.Methodology__container_steps_step_text}>
          <h3>Evoluciónamos nuestra solución personalizada Odoo</h3>
          <h4 className='text-2xl my-2'><strong>Etapa de Evolución:</strong></h4>

          <p className='text-gray-300'><strong >Mejora continua:</strong > Continuaremos trabajando contigo para mejorar la aplicación y adaptarla a las nuevas necesidades de tu negocio, asegurando que siempre esté alineada con tus objetivos.</p>
          <p className='text-gray-300'><strong>Mantenimiento y seguridad:</strong> Te ayudaremos a mantener la aplicación actualizada y segura, protegiendo tu información y garantizando su correcto funcionamiento.</p>
    
         </div>
          </div>
      </div>

    
    </div>
  )
}


