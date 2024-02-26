import { Rubik } from 'next/font/google'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      

      <body className={rubik.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
