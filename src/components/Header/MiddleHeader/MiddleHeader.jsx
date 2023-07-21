import react from 'react'
import * as Icon from 'react-feather';

const MiddleHeader = _ => {

    return(
        <div>

            <img src="../../images/elenex-logo.svg" />

            <div>
                <input type="text" placeholder="Product search" />
                <button>
                    <Icon.Search stroke-width="1.5" />
                </button>
            </div>

            <div>
                <Icon.User stroke-width="1.5" />

                <Icon.Heart stroke-width="1.5" />

                <Icon.ShoppingCart stroke-width="1.5" />
            </div>

        </div>
    )
}

export default MiddleHeader