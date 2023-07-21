import react from 'react'
import * as Icon from 'react-feather';

const TopHeader = _ => {

    return(
        <div>
            <div>
                <p>
                    HOTLINE: +01 234 567 890
                </p>

                <p>
                    FREE SHIPPING ON ALL ORDERS OVER $100
                </p>

                <div>
                    <Icon.Facebook stroke-width="1.5" />

                    <Icon.Instagram stroke-width="1.5"/>

                    <Icon.Twitter stroke-width="1.5"/>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default TopHeader