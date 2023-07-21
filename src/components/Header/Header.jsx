import react from 'react'

import TopHeader from './TopHeader/TopHeader'
import MiddleHeader from './MiddleHeader/MiddleHeader'
import BottomHeader from './BottomHeader/BottomHeader'

const Header = _ => {

    return (
        <header>

            <TopHeader />
            <MiddleHeader />
            <BottomHeader />

        </header>
    )
}

export default Header