import react from 'react'

import TopHeader from './TopHeader/TopHeader'
import MiddleHeader from './MiddleHeader/MiddleHeader'
import BottomHeader from './BottomHeader/BottomHeader'

const Header = props => {

    return (
        <header>

            <TopHeader />
            <MiddleHeader />
            <BottomHeader />

        </header>
    )
}

export default Header