import styles from './page.module.css'
import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import WhyWe from '../components/WhyWe/WhyWe'
import Methodology from '../components/Methodology/Methodology'
import Plans from '../components/Plans/Plans'

// Metadata from 'next/head'



export const metadata = {
  title: {
    default: 'Desarrollo de Apps Odoo Personalizadas | Alphaqueb',
    template: '%s | Alphaqueb',
  },
  description: 'Amplía tu oferta de implementación Odoo con la personalización de módulos a medida. Desarrollamos soluciones Odoo personalizadas para tu negocio.',
  image: '/images/alphaqueb-logo.png',
  url: 'https://alphaqueb.com/',
  type: 'website',
  keywords: [
    'odoo',
    'desarrollo de apps odoo',
    'personalización de módulos odoo',
    'implementación odoo',
    'soluciones odoo',
    'desarrollo a medida',
    'software a medida',
    'aplicaciones web',
    'aplicaciones móviles',
    'aplicaciones de escritorio',
    'digitalización de empresas',
    'automatización de procesos',
    'erp odoo',
    'crm odoo',
    'ecommerce odoo',
    'odoo development',
    'odoo customization',
    'odoo implementation',
    'odoo solutions',
    'tailored development',
    'custom software',
    'web applications',
    'mobile applications',
    'desktop applications',
    'business digitization',
    'process automation',
    'odoo erp',
    'odoo crm',
    'odoo ecommerce',
  ],
  metadataBase: new URL(process.env.DOMAIN_URL),
};

export default function Home () {
  return (
    
    <main className={styles.main}>
      <Hero />  
      <WhyWe />
      <Plans />
      <Methodology />
      <Testimonials />   
      <Plans />
    </main>
  )
}
