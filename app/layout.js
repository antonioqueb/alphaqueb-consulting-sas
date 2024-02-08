import { Rubik } from 'next/font/google'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


const rubik = Rubik ({ subsets: ['latin'] })

export const metadata = {
  title: 'Transformación Digital',
  description: 'Transformación Digital, expertos en tecnología y desarrollo de software',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HFW2B50CLE"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)};
      gtag('js', new Date());

      gtag('config', 'G-HFW2B50CLE');
    </script>
      <body className={rubik.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
