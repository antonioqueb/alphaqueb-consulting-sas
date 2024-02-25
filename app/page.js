import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Plans from '../components/Plans/Plans'
import LastNews from '../components/LastNews/LastNews'

export const metadata = {
  title: 'Transformación Digital',
  description: 'Transformación Digital, expertos en tecnología y desarrollo de software'
}

export default function Home () {
  return (
    
    <main className={styles.main}>
        
      <Hero /> 
     
      <Testimonials />    
       
      <WhyWe />
        <Methodology />
        <Plans / >
     
      <LastNews />
     
    </main>
  )
}
