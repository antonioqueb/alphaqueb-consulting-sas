import { Rubik } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <head>
        {/* En esta sección puedes incluir otras etiquetas relacionadas a  <head>
         como los metadatos, títulos, links  */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HFW2B50CLE"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'G-HFW2B50CLE')
          `}
        </Script>
      </head>

      <body classNameName={rubik.classNameName}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  )
}
