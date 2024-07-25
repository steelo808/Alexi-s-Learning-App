import { Metadata } from "next";
import '@styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title:"Alexi's Learning app",
  description:"One stop shop for all your learning needs",
  icons: {
      icon:'/Images/alexi_s_learning_app_logo-removebg-preview.png',
  },
}

const RootLayout = ({children}) => {
  return (
    <html lang = "en">
      <body>
      <div className="main overflow-hidden">
        <div className= "gradient absolute inset-0 z-0" />
      </div>

          <main className="app relative z-10 overflow-hidden">
          <Navbar/>
            {children} 
          <Footer/>      
          </main>
      </body>
    </html>
  );
}

export default RootLayout;
