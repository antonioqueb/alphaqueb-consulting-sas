import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Plans from '../components/Plans/Plans'



export const metadata = {
  title: {
    default: 'Desarrollo de Apps Odoo Personalizadas',
    template: '%s | Alphaqueb'
  },
  description: 'Personalizamos tu implementación odoo para cumplir tus metas'
}

export default function Home () {
  return (
    
    <main className={styles.main}>
      
      <Hero /> 
      <Testimonials />    
      <WhyWe />
      <Methodology />
      <Plans />

     
    </main>
  )
}
