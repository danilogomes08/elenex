import react from 'react'
import Produtos from '../../components/Produtos/Produtos'

import './Countdown.scss'

const Countdown = props => {

    return (
        <section className="Countdown">

            <div className="Sale">
                <h2>
                    Week Deals limited<br />
                    Just now iPhone
                </h2>

                <hr />

                <span> % </span>


            </div>

            <Produtos 
                filteredCategory={true}
                qtSlider={3}
            />

        </section>
    )
}

export default Countdown