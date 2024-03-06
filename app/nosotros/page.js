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
        <h2 className={style.container__text__title}>¿Quiénes somos nosotros?</h2>
        <p className={style.container__text__paragraph}>Alphaqueb Consulting S.A.S. es una empresa líder en el campo del desarrollo de apps odoo. Nos especializamos en ayudar a las organizaciones a adaptarse y prosperar en la era digital, ofreciendo soluciones innovadoras y resultados duraderos.</p>
        
      </div>
    </section>
     <section  className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src='/mision.svg' width={630} height={630} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Misión</h2>
        <p className={style.container__text__paragraph}>Estamos comprometidos con la transformación digital corporativa. Nos esforzamos por estar en el corazón de la revolución digital, llevando a nuestros clientes más allá de la simple transición digital hacia una completa reinvención. Innovamos y generamos resultados duraderos para impulsar el crecimiento y el éxito de nuestros clientes.</p>
      </div>
    </section>
        <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/vision.svg' width={630} height={630}   alt='cover'
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Visión</h2>
        <p className={style.container__text__paragraph}>Nos comprometemos a convertir la promesa de la transformación digital en una realidad tangible para nuestros clientes. Guiamos a cada cliente en un viaje transformador, asegurando que cada fase de su proyecto, desde el diagnóstico hasta la evaluación, marque un avance significativo hacia la realización de su visión digital.</p>
        </div>
    </section>
         <section className={style.container_reverse}>
          <div className={style.container__img}>
        <Image src='valores.svg' width={630} height={630} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestros Valores</h2>
        <p className={style.container__text__paragraph}><strong>Profesionalismo:</strong> Nos esforzamos por mantener los más altos estándares de profesionalismo en todas nuestras interacciones y entregables.</p>
        <p className={style.container__text__paragraph}><strong>Orientación al cliente:</strong> Colocamos las necesidades y objetivos de nuestros clientes en el centro de todo lo que hacemos, buscando siempre superar sus expectativas.</p>
        <p className={style.container__text__paragraph}><strong>Innovación:</strong> Abrazamos la innovación y la creatividad en la búsqueda de soluciones digitales efectivas y sostenibles para nuestros clientes.</p>
        <p className={style.container__text__paragraph}><strong>Compromiso:</strong> Estamos comprometidos con el éxito de nuestros clientes y nos esforzamos por brindarles un servicio excepcional en cada etapa de su viaje digital.</p>
        <p className={style.container__text__paragraph}><strong>Colaboración:</strong> Trabajamos en estrecha colaboración con nuestros clientes, escuchando activamente sus necesidades y trabajando juntos para alcanzar sus objetivos digitales.</p>
        <p className={style.container__text__paragraph}><strong>Excelencia:</strong> Buscamos la excelencia en todo lo que hacemos, desde la planificación estratégica hasta la implementación y el soporte continuo.</p>

        </div>
    </section>
    </>
  )
}
