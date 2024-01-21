import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar/navbar'
import Index from './components/Index'
import Review from './components/Review/review'
import Tolerance from './components/Tolerance/tolerance'
import Faq from './components/FAQ/faq'
import About from './components/About/about'
import { registerLicense } from '@syncfusion/ej2-base';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Footer from './components/Footer/footer'
import './main.scss'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main className='body-wrapper'>
        <Navbar />
        <Index />
        <About />
        <Tolerance />
        <Review />
        <Faq />
        <Footer />
      </main>
    </QueryClientProvider>
  </React.StrictMode>,
)
