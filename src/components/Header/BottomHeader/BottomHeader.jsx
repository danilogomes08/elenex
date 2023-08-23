import React, {useState} from 'react';
import * as Icon from 'react-feather';

import './BottomHeader.scss'

const BottomHeader = _ => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
      };

    return(

        <div>
            
            <div className="BottomHeader">

                <div className="Dropdown">
                    <button onClick={handleOpen} className="MenuCategories">
                        <Icon.Menu className="Icon" stroke-width="1.5" />
                        <p> Categories </p>
                        <Icon.ChevronDown className="Icon" stroke-width="1.5" />
                    </button>
                    {open ? 
                            <ul className="MenuDropdown">
                                <li>
                                    <a href="#"> Smartphone </a>
                                    <hr />
                                </li>
                                <li>
                                    <a href="#"> Gamer </a>
                                    <hr />
                                </li>
                                <li>
                                    <a href="#"> Smartwatch </a>
                                    <hr />
                                </li>
                                <li>
                                    <a href="#"> Audio </a>
                                    <hr />
                                </li>
                                <li>
                                    <a href="#"> Notbook </a>
                                    <hr />
                                </li>
                            </ul>
                    : null}
                </div>

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