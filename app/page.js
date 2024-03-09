import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Plans from '../components/Plans/Plans'
import CallToAction from '../components/CallToAction/CallToAction'

// Metadata from 'next/head'



export const metadata = {
  title: {
    default: 'Módulos a Medida Odoo',
    template: '%s | alphaqueb',
  },
  description: 'Adaptamos y extendemos Odoo para cumplir con tus requisitos específicos, asegurando que cada función se alinee perfectamente con tus procesos empresariales.',
  url: 'https://alphaqueb.online/',
  type: 'website',
  keywords: [
    'odoo',
    'desarrollo de apps odoo',
    'personalización de módulos odoo',
    'implementación odoo',
    'soluciones odoo',
    'desarrollo a medida',
    'software a medida',
    'digitalización de empresas',
    'automatización de procesos',
    'erp odoo',
    'crm odoo',
    'ecommerce odoo',
    'odoo development',
    'odoo customization',
    'odoo implementation',
    'odoo solutions',
    'custom software',
    'business digitization',
    'process automation',
    'odoo erp',
    'odoo crm',
    'odoo ecommerce',
  ],
  metadataBase: new URL(process.env.DOMAIN_URL),
}

export default function Home () {
  return (
    
    <main className={styles.main}>
      <Hero />  
      <WhyWe />
      <Plans />
      <Methodology />
      <CallToAction />
      <Testimonials />   
      
    </main>
  )
}
