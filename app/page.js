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
    default: 'Innovación y Crecimiento con Odoo: Implementamos la solución integral de CRM y ERP en español para tu negocio.',
    template: '%s | alphaqueb',
  },
  description: 'Adaptamos y extendemos Odoo para cumplir con tus requisitos específicos, asegurando que cada función se alinee perfectamente con tus procesos empresariales.',
  url: 'https://alphaqueb.online/',
  type: 'website',
  keywords: [
    'odoo',
    'erp para pymes',
    'crm odoo',
    'erp en español',
    'implementación erp',
    'soporte odoo',
    'consultoría erp',
    'desarrollo de apps odoo',
    'odoo ecommerce',
    'consultor odoo',
    'sistema erp odoo',
    'integración erp',
    'consultoría odoo',
    'erp personalizado',
    'sistemas erp en la nube',
    'personalización de módulos odoo',
    'erp para la industria de la construcción',
    'implementación de odoo',
    'migrar a odoo',
    'implementación odoo',
    'capacitación erp',
    'soluciones odoo',
    'odoo para pymes',
    'seguridad odoo',
    'integración odoo',
    'consultoría de estrategia empresarial odoo',
    'erp para planificación de recursos de ti',
    'integración de comercio electrónico con odoo',
    'crm y gestión de leads con odoo',
    'odoo para herramientas de gestión de la demanda',
    'implementación de sistemas de seguimiento de proyectos con odoo',
    'gestión de la relación con proveedores en odoo',
    'erp para herramientas de análisis operacional',
    'erp para soluciones de inteligencia de negocios en tiempo real',
    'erp para herramientas de optimización empresarial',
    'erp para soluciones de planificación de recursos empresariales móviles',
    'personalización de odoo',
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
      <Testimonials />  
      <Methodology />
      <CallToAction />
       
      
    </main>
  )
}
