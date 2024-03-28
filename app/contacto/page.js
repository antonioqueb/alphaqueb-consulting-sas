import styles from './contacto.module.css'
import CallToActionContactPage from '../../components/CallToActionContactPage/CallToActionContactPage'



export const metadata = {
    
  title: "Contactos"
}

export default function ContactPage () {
  return (
        <>
        <h1 className='text-3xl pt-3 font-bold lg: text-5xl mt-5'>Contacto</h1>
        <section className={styles.contacto}>
            <section className={styles.contacto__info}>
            <CallToActionContactPage />
            </section>
        </section>
        </>
  )
}
