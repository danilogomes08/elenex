import React, {useState, useEffect, useRef} from 'react';
import * as Icon from 'react-feather';

import './BottomHeader.scss'

const BottomHeader = _ => {

    return(

        <div>
            
            <div className="BottomHeader">

                <div className="MenuCategories">
                    <Icon.Menu className="Icon" stroke-width="1.5" />
                    <p> Categories </p>
                    <Icon.ChevronDown className="Icon" stroke-width="1.5" />
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