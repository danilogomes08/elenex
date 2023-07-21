import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Categories from './components/Categories/Categories'
import Produtos from './components/Produtos/Produtos'
import Banners from './components/Banners/Banners'
import Countdown from './components/Countdown/Countdown'
import Brands from './components/Brands/Brands'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Categories />
      <Produtos 
        titulo="New Products"
      />
      <Banners 
        titulo1="iPhone" subtitulo1="melhor iphone" 
        titulo2="Samsung" subtitulo2="melhor Samsung" 
      />
      <Produtos 
        titulo="Apple"
        banner="./images/banner-central.png"
      />
      <Countdown />
      <Banners 
        titulo1="iPhone" subtitulo1="melhor iphone" 
        titulo2="Samsung" subtitulo2="melhor Samsung" 
      />
      <Produtos 
        titulo="Special Products"
      />
      <Brands />
      <Footer />

    </div>
  )
}

export default App;
