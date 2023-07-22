import react from 'react'
import * as Icon from 'react-feather';
import './TopHeader.scss'

const TopHeader = _ => {

    return(
        <div>
            <div className="TopHeader">
                <p>
                    HOTLINE: +01 234 567 890
                </p>

                <p>
                    FREE SHIPPING ON ALL ORDERS OVER $100
                </p>

                <div>
                    <Icon.Facebook className="Icon" size="20" stroke-width="1.5" />

                    <Icon.Instagram className="Icon" size="20" stroke-width="1.5"/>

                    <Icon.Twitter className="Icon" size="20" stroke-width="1.5"/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default TopHeader