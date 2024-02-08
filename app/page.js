import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'

export default function Home() {


  return (

    
    <main className={styles.main}>




     
        
      <Hero /> 


 
     
      <Testimonials />    
       
      <WhyWe />
        <Methodology />
     

     
      {/*       <LastNews /> */} 
     
    </main>
  )
}
