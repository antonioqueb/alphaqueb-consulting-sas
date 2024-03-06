import styles from './contacto.module.css'
import CallToAction from '../../components/CallToAction/CallToAction'



export const metadata = {
    
  title: "Contactos"
}

export default function ContactPage () {
  return (
        <>
        <h1 className='text-3xl pt-3 font-bold lg: text-5xl mt-5'>¡Queremos escucharte!</h1>
        <section className={styles.contacto}>
            <section className={styles.contacto__info}>
            <CallToAction />
            </section>
        </section>
        </>
  )
}
