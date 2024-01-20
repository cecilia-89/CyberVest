import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/navbar'
import Index from './components/Index'
import Faq from './components/FAQ/faq'
import Review from './components/Reviews/review'
import Footer from './components/Footer/footer'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Index />
    <Review />
    <Faq />
    <Footer />
  </React.StrictMode>,
)
