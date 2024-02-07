import styles from './contacto.module.css';
import CallToAction from '../../components/CallToAction/CallToAction';

export default function ContactPage() {
    return (
        <>
        <section className={styles.contacto}>
            <section className={styles.contacto__info}>
            <CallToAction />
            </section>
        </section>
        </>
    )
}

