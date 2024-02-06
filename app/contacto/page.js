import styles from './contacto.module.css';
import Doubts from '@/components/Doubts/Doubts';

export default function ContactPage() {
    return (
        <>
        <section className={styles.contacto}>
            <section className={styles.contacto__info}>
            <Doubts />
            </section>
        </section>
        </>
    )
}

