import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Landing Page/Header.jsx'
import ImageGallery from './Components/Landing Page/ImageGallery.jsx'
import WomenNewArrivals from './Components/Landing Page/WomenArrivals.jsx'
import Cards from './Components/Landing Page/Cards.jsx'
import VideoPlayerInterface from './Components/Landing Page/VideoPlayerInterface.jsx'
import ProductDetailPage from './Components/Itemlisting/ProductDetailPage.jsx'
import Dashboard from './Components/Userdashboard/Dashboard.jsx'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Header/>
     <ImageGallery/>
     <WomenNewArrivals/>
     <Cards/>
     <VideoPlayerInterface/>
     <ProductDetailPage/>
     <Dashboard/>
    

    </div>
  )
}

export default App