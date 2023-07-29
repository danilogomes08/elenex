import react, { useEffect, useState } from 'react'
import Produtos from '../../components/Produtos/Produtos'

import './Countdown.scss'

const Countdown = props => {


    const [time, setTime] = useState((60 * 60))

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    
    useEffect(() => {
        setTimeout(() =>{
            setTime(time -1)
        }, 1000)
    })

    return (
        <section className="Countdown">

            <div className="Sale">
                <h2>
                    Week Deals limited<br />
                    Just now iPhone
                </h2>

                <span> % </span>

                <p>
                    Hurry up! Offer ends in:
                </p>

                <div className="Offer">

                    <div>
                        <p> {minutes.toString().padStart(2, "0")} </p>
                        <p> MINS </p>
                    </div>

                    <div>
                        <p> {seconds.toString().padStart(2, "0")} </p>
                        <p> SECS </p>
                    </div>

                </div>

            </div>

            <div>

                <Produtos 
                    filteredCategory={true}
                    qtSlider={3}
                />

            </div>

        </section>
    )
}

export default Countdown