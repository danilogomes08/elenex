import react from 'react'
import * as Icon from 'react-feather';

const BottomHeader = _ => {

    return(

        <div>
            
            <div>

                <button>
                    <Icon.Menu stroke-width="1.5" />
                    Categories
                    <Icon.ChevronDown stroke-width="1.5" />
                </button>

                <ul>

                    <li><a href="#"> Home </a></li>
                    <li><a href="#"> Delivery </a></li>
                    <li><a href="#"> Payment </a></li>
                    <li><a href="#"> Contacts </a></li>
                    <li><a href="#"> FAQ </a></li>

                </ul>                
            </div>

            <hr />
        </div>
    )
}

export default BottomHeader