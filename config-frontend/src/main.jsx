import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/navbar'
import Index from './components/Index'
import Faq from './components/FAQ/faq'
import About from './components/About/about'
import Footer from './components/Footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Index />
    <About />
    <Faq />
    <Footer />
  </React.StrictMode>,
)
