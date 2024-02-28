import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Plans from '../components/Plans/Plans'



export const metadata = {
  title: {
    default: 'Apps Odoo Personalizadas',
    template: '%s | Alphaqueb'
  },
  description: 'Personalizamos tu implementación odoo para cumplir tus metas',
  image: './alphaquebweb.png'
}

export default function Home () {
  return (
    
    <main className={styles.main}>
      <Head>
        <meta property="og:title" content={metadata.image} />
      </Head>
      
      <Hero /> 
      <Testimonials />    
      <WhyWe />
      <Methodology />
      <Plans />

     
    </main>
  )
}
