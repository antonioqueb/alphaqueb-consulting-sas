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
          <h2 className={style.container__text__title}>Consultoría y Análisis</h2>
          <p className={style.container__text__paragraph}>Ofrecemos servicios de consultoría y análisis especializados para ayudar a nuestros clientes a maximizar el potencial de sus proyectos tecnológicos.</p>
          <p className={style.container__text__paragraph}>Nuestro equipo de expertos en tecnología trabaja en estrecha colaboración con los clientes para identificar oportunidades, analizar datos y desarrollar estrategias que impulsen el éxito de sus empresas.</p>
          <p className={style.container__text__paragraph}>Nos comprometemos a ofrecer soluciones personalizadas y prácticas que generen resultados tangibles y mejoren la competitividad de nuestros clientes en el mercado.</p>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
