import styles from './page.module.css'
import LastNews from '../../components/LastNews/LastNews'



export const metadata  = {
  title: {
    absolute: 'Blog '
  },
  description: 'Personalizamos tu implementación odoo para cumplir tus metas'
}


export default function BlogPage () {
  return (
    <main className={styles.main}>
     <LastNews />
    </main>
  )
}
