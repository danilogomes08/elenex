import react, {useState, useContext, useRef, useEffect} from 'react'
import * as Icon from 'react-feather';
import './MiddleHeader.scss'
import { Cart } from '../../Cart'

const MiddleHeader = props => {

    const [cart, setCart] = useContext(Cart)
    const [active, setActive] = useState(false);

    const newRef = useRef(null);

    const handleOutsideClick = (e) => {
      if (newRef.current && !newRef.current.contains(e.target)) {
          setActive(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
    })
    
    const toggleMenu = () => {
        setActive(!active);
    }

    return(
        <div className="MiddleHeader" ref={newRef}>

            <img src="../../images/elenex-logo.svg" />

            <div className="Pesquisa">
                <input type="text" placeholder="Product search" />
                <button>
                    <Icon.Search stroke-width="1.5" color="#fff" size="25" />
                </button>
            </div>


            <div>
                <nav className="Navbar">
                    <div className={active ? 'Active Nav-menu' : 'Nav-menu'}>
                        <ul>   
                            <li className="Nav-item"><a href="#"> Home </a></li>
                            <li className="Nav-item"><a href="#"> Delivery </a></li>
                            <li className="Nav-item"><a href="#"> Payment </a></li>
                            <li className="Nav-item"><a href="#"> Contacts </a></li>
                            <li className="Nav-item"><a href="#"> FAQ </a></li>
                        </ul> 

                        <div className="NavbarSocial">

                                <p> Follow Us </p>
                            
                            <div>
                            <Icon.Facebook className="Icon" size="20" stroke-width="1.5" />

                            <Icon.Instagram className="Icon" size="20" stroke-width="1.5"/>

                            <Icon.Twitter className="Icon" size="20" stroke-width="1.5"/>
                            </div>
                        </div>

                        <div className="Hamburger Active" onClick={toggleMenu}>
                            <span className="Bar"></span>
                            <span className="Bar"></span>
                            <span className="Bar"></span>
                            <span className="Bar"></span>
                        </div>
                    </div>
                    <div className="Hamburger" onClick={toggleMenu}>
                        <span className="Bar"></span>
                        <span className="Bar"></span>
                        <span className="Bar"></span>
                        <span className="Bar"></span>
                    </div>
                </nav>

                <div className="IconsMiddle"> 
                    
                    <Icon.User className="Icon" stroke-width="1.5" />

                    <Icon.Heart className="Icon" stroke-width="1.5" />
                    
                    <div>
                        <p class="Cart"> {cart} </p>
                        <Icon.ShoppingCart className="Icon" stroke-width="1.5" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiddleHeader