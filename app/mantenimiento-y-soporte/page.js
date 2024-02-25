import style from './page.module.css'
import Image from 'next/image'
import CallToAction from '../../components/CallToAction/CallToAction'

export default function Page () {
  return (
    <>
      <section className={style.container}>
        <div className={style.container__img}>
          <Image src='/quienesomos.svg' width={330} height={330} alt='cover' />
        </div>
        <div className={style.container__text}>
          <h2 className={style.container__text__title}>Mantenimiento y Soporte</h2>
          <p className={style.container__text__paragraph}>Ofrecemos servicios de mantenimiento y soporte técnico continuo para garantizar el rendimiento óptimo y la seguridad de tus sistemas y aplicaciones.</p>
          <p className={style.container__text__paragraph}>Nuestro equipo de profesionales altamente capacitados está disponible para resolver cualquier problema técnico, realizar actualizaciones y proporcionar asistencia en tiempo real cuando más lo necesites.</p>
        </div>
      </section>
      <CallToAction />
    </>
  )
}
