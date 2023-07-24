import react from 'react'
import * as Icon from 'react-feather';
import './MiddleHeader.scss'

const MiddleHeader = _ => {

    return(
        <div className="MiddleHeader">

            <img src="../../images/elenex-logo.svg" />

            <div className="Pesquisa">
                <input type="text" placeholder="Product search" />
                <button>
                    <Icon.Search stroke-width="1.5" color="#fff" size="25" />
                </button>
            </div>

            <div>
                <Icon.User className="Icon" stroke-width="1.5" />

                <Icon.Heart className="Icon" stroke-width="1.5" />

                <Icon.ShoppingCart className="Icon" stroke-width="1.5" />
            </div>

        </div>
    )
}

export default MiddleHeader