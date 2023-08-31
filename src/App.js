import React, { useState, useRef, useEffect } from 'react';

import { Cart } from './components/Cart'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Categories from './components/Categories/Categories'
import Produtos from './components/Produtos/Produtos'
import Banners from './components/Banners/Banners'
import Countdown from './components/Countdown/Countdown'
import Footer from './components/Footer/Footer'

function App() {

  const [cart, setCart] = useState(0);

  return (
    <Cart.Provider value={[cart, setCart]} >
      <div>
        <Header />
        <Main />
        <Categories />
        <Produtos 
          titulo="New Products"
          allProducts={true}
          qtSlider={4}
        />
        <Banners 
          titulo1="iPhone" 
          subtitulo1="Why buy iPhone anywhere else?" 
          img1="./images/banner01.png"
          titulo2="AirPods" 
          subtitulo2="A magical connection to your devices." 
          img2="./images/banner02.png"
        />
        <Produtos 
          titulo="Apple"
          filteredBrand={true}
          bannerDesktop="./images/banner-central.png"
          bannerMobile="./images/banner-central-mobile.png"
          qtSlider={4}
        />
        <Countdown />
        <Banners 
          titulo1="Switch" 
          subtitulo1="Find the perfect Nintendo Switch system for you." 
          img1="./images/banner03.png"
          titulo2="Apple Watch" 
          subtitulo2="Get more out of Apple Watch." 
          img2="./images/banner04.png"
        />
        <Produtos 
          titulo="Special Products"
          filteredSpecial={true}
          qtSlider={4}
        />
        <Footer />
      </div>
    </Cart.Provider >
  )
}

export default App;
