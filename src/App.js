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
        titulo1="iPhone" subtitulo1="Why buy iPhone anywhere else?" bg1="Banner01"
        titulo2="AirPods" subtitulo2="A magical connection to your devices." bg2="Banner02"
      />
      <Produtos 
        titulo="Apple"
        banner="./images/banner-central.png"
      />
      <Countdown />
      <Banners 
        titulo1="Switch" subtitulo1="Find the perfect Nintendo Switch system for you." bg1="Banner03"
        titulo2="Apple Watch" subtitulo2="Get more out of Apple Watch." bg2="Banner04"
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
