import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Testimonials from '@/components/Testimonials/Testimonials'
import WhyWe from '@/components/WhyWe/WhyWe'
import Methodology from '@/components/Methodology/Methodology'
import LastNews from '@/components/LastNews/LastNews'
import Doubts from '@/components/Doubts/Doubts'

/**
 * Renders the Home component.
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <main className={styles.main}>
      
     
        
      <Hero /> 
 
     
      <Testimonials />    
       
      <WhyWe />
        <Methodology />
     
      <LastNews />
      <Doubts />
      {/*  */} 
     
    </main>
  )
}
