import { Rubik } from 'next/font/google'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ModalCookies from '../components/ModalCookies/ModalCookies'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HFW2B50CLE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date())
              gtag('config', 'G-HFW2B50CLE')
            `,
          }}
        />
  
    <body className={rubik.className}>


    <ModalCookies/>
    
  <div className="container-layout">
      <div className="glass max-w-[1200px] mx-auto px-[2rem] xl:px-[8rem]">
      <NavbarComponent/>
    
     {children}
      
     <Footer/>
    

      </div>
      <div className="moving-balls">
          <div className="ball small-day"></div>
          <div className="ball medium"></div>
          <div className="ball ultra-tiny"></div>
          <div className="ball mini"></div>
          <div className="ball giant"></div>
      </div>
  </div>
      </body>
    
  </html>
  )
}
