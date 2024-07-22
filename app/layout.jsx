import { Metadata } from "next";
import '@styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title:"alexi's Learning app",
  description:"One stop shop for all your learning needs"
}

const RootLayout = ({children}) => {
  return (
    <html lang = "en">
      <body>
          <main>
          <Navbar/>
            {children} 
          <Footer/>      
          </main>
      </body>
    </html>
  );
}

export default RootLayout;
