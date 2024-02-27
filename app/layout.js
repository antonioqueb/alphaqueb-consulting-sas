import { Rubik } from 'next/font/google'
import './globals.css'
import NavbarComponent from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
  
    <body className={rubik.className}>
    
  <div className="container-layout">
      <div className="glass">
      <NavbarComponent />
     
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
