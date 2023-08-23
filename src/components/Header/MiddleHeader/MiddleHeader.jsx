import react, {useState, useContext} from 'react'
import * as Icon from 'react-feather';
import './MiddleHeader.scss'
import { Cart } from '../../Cart'


const MiddleHeader = props => {

    const [cart, setCart] = useContext(Cart)

    return(
        <div className="MiddleHeader">

            <img src="../../images/elenex-logo.svg" />

            <div className="Pesquisa">
                <input type="text" placeholder="Product search" />
                <button>
                    <Icon.Search stroke-width="1.5" color="#fff" size="25" />
                </button>
            </div>

            <div className="IconsMiddle">
                <Icon.User className="Icon" stroke-width="1.5" />

                <Icon.Heart className="Icon" stroke-width="1.5" />
                
                <div>
                    <p class="Cart"> {cart} </p>
                    <Icon.ShoppingCart className="Icon" stroke-width="1.5" />
                </div>
            </div>

        </div>
    )
}

export default MiddleHeader