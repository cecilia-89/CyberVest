import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Footer />
  </React.StrictMode>,
)
