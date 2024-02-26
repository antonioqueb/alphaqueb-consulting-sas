import styles from './page.module.css'
import LastNews from '../../components/LastNews/LastNews'

export default function BlogPage () {
  return (
    <main className={styles.main}>
     <LastNews />
    </main>
  )
}
