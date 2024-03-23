import Script from 'next/script'
import { Rubik } from 'next/font/google'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ModalCookies from '../components/ModalCookies/ModalCookies'
import { useRouter } from 'next/router'; // Importa useRouter


const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const router = useRouter(); // Utiliza el hook useRouter
  // Función para determinar si debe mostrar las moving balls
  const shouldShowMovingBalls = () => {
    // Aquí puedes ajustar la condición para coincidir con tus rutas de blog
    // Esta condición verifica si la ruta actual NO es parte de los posts del blog
    return !router.pathname.includes('/blogs/');
  };
  return (
    <html lang="es">
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-HFW2B50CLE" 
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date())
          gtag('config', 'G-HFW2B50CLE')
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[]w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'})var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''j.async=truej.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dlf.parentNode.insertBefore(j,f)
          })(window,document,'script','dataLayer','GTM-M57HBTQP')
        `}
      </Script>

      <body className={rubik.className}>
        <ModalCookies />
        <div className="container-layout">
          <div className="glass">
            <NavbarComponent />

            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M57HBTQP"
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>

            {children}

            <Footer />
          </div>
          {shouldShowMovingBalls() && (
          <div className="moving-balls">
            <div className="ball small-day"></div>
            <div className="ball medium"></div>
            <div className="ball ultra-tiny"></div>
            <div className="ball mini"></div>
            <div className="ball giant"></div>
          </div>
          )}
        </div>
      </body>
    </html>
  )
}
