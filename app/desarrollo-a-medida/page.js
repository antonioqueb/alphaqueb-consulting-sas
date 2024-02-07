import style from './page.module.css';
import Image from 'next/image';
import CallToAction from '../../components/CallToAction/CallToAction';

export default function Page() {
  return (
    <>
      <section className={style.container}>
        <div className={style.container__img}>
          <Image src='/quienesomos.svg' width={330} height={330} alt='cover' />
        </div>
        <div className={style.container__text}>
          <h2 className={style.container__text__title}>Desarrollo a medida</h2>
          <p className={style.container__text__paragraph}>Ofrecemos servicios de desarrollo de software a medida, adaptados a las necesidades específicas de cada cliente.</p>
          <p className={style.container__text__paragraph}>Nos especializamos en crear soluciones tecnológicas personalizadas que impulsan el crecimiento y la eficiencia de los negocios.</p>
          <p className={style.container__text__paragraph}>Nuestro compromiso es brindar un servicio excepcional, trabajando en estrecha colaboración con nuestros clientes para garantizar su satisfacción.</p>
        </div>
      </section>
      <CallToAction />

    </>
  );
}
