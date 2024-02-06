import style from './nosotros.module.css'
import Image from 'next/image'



export default function AboutPage() {

  

  return (
    <>
    <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/quienesomos.svg' width={330} height={330} alt='cover' />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>¿Quiénes somos?</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
     <section  className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src='/mision.svg' width={330} height={330} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Misión</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
        <section  className={style.container}>
      <div className={style.container__img}>
        <Image src='/vision.svg' width={330} height={330}   alt='cover'
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestra Visión</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
         <section  className={style.container_reverse}>
      <div className={style.container__img}>
        <Image src='valores.svg' width={330} height={330} alt='cover'  
         />
      </div>
      <div className={style.container__text}>
        <h2 className={style.container__text__title}>Nuestros Valores</h2>
        <p className={style.container__text__paragraph}>Somos una empresa dedicada a la venta de productos de limpieza, para el hogar, oficina, industria, etc. Contamos con productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro objetivo es satisfacer las necesidades de nuestros clientes, ofreciendo productos de calidad y precios competitivos.</p>
        <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un excelente servicio, para que nuestros clientes se sientan satisfechos.</p>
      </div>
    </section>
    </>
  )
}
