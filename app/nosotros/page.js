import style from './nosotros.module.css'
import Image from 'next/image'



export const metadata = {
    
  title: "Nosotros"
}

export default function AboutPage () {
  return (
    <>
    <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/brand/white_and_text.png' width={630} height={630} alt='cover' />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Sobre Nosotros</h2>
        <p className={style.container__text__paragraph}>En Alphaqueb Consulting S.A.S., nos distinguimos como pioneros en el campo del desarrollo y personalización de aplicaciones Odoo, enfocándonos en propulsar a organizaciones hacia la cúspide de la innovación digital. Nuestra especialización radica en diseñar y ejecutar estrategias de transformación digital que no solo modernizan infraestructuras tecnológicas, sino que también redefinen procesos empresariales para garantizar resultados tangibles y sostenibles.</p>
        
      </div>
    </section>
     <section  className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src='/mision.svg' width={630} height={630} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Misión: Catalizadores de Tu Éxito Digital</h2>
        <p className={style.container__text__paragraph}>Nuestra misión es ser el motor de cambio en tu viaje hacia la digitalización. Nos comprometemos a entregarte no solo una transición tecnológica, sino una reinvención completa de tu modelo de negocio, asegurando que cada solución Odoo se adapte de manera única a tus desafíos y ambiciones. Innovamos incansablemente para que, a través de nuestra colaboración, tu organización no solo se adapte, sino que lidere en la era digital.</p>
      </div>
    </section>
        <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/vision.svg' width={630} height={630}   alt='cover'
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Visión: Transformando Promesas en Realidades</h2>
        <p className={style.container__text__paragraph}>Aspiramos a ser tu guía confiable en el complejo viaje de la transformación digital. Nuestro enfoque está en convertir cada promesa de innovación en resultados concretos y medibles, asegurando que cada paso que des con nosotros te acerque más a la realización plena de tu visión digital. Estamos aquí para demostrar que la transformación digital es más que un concepto: es una realidad accesible y escalable para tu negocio.</p>
        </div>
    </section>
         <section className={style.container_reverse}>
          <div className={style.container__img}>
        <Image src='valores.svg' width={630} height={630} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestros Valores: La Brújula de Nuestra Actuación</h2>
        <p className={style.container__text__paragraph}><strong>Profesionalismo:</strong> Nos adherimos a los más altos estándares de calidad y ética en cada proyecto, garantizando soluciones de vanguardia entregadas con integridad.</p>
        <p className={style.container__text__paragraph}><strong>Orientación al cliente:</strong> Tu visión y necesidades dirigen nuestro enfoque. Nos dedicamos a superar tus expectativas, personalizando nuestras soluciones para alinearse perfectamente con tus objetivos.</p>
        <p className={style.container__text__paragraph}><strong>Innovación:</strong> La innovación está en el núcleo de todo lo que hacemos. Nos esforzamos por ofrecerte soluciones avanzadas y creativas que aseguren tu liderazgo en un mercado en constante evolución.</p>
        </div>
    </section>
    </>
  )
}
