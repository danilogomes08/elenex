import react from 'react'

import './Categories.scss'

const Categories = _ => {

    return(
        <section className="Categories">

            <h2>Categories</h2>

            <div>

                <div className="Category">
                    <img src="./images/iPhone-13-PRO-MAX.png" />
                    <h3> Smartphones </h3>
                </div>

                <div className="Category">
                    <img src="./images/Apple-Watch-se-2.png" />
                    <h3> Smartphones </h3>
                </div>

                <div className="Category">
                    <img src="./images/Airpods-3.png" />
                    <h3> Smartphones </h3>
                </div>

                <div className="Category">
                    <img src="./images/Playstation5.png" />
                    <h3> Smartphones </h3>
                </div>

                <div className="Category">
                    <img src="./images/MacBook-PRO-14.png" />
                    <h3> Smartphones </h3>
                </div>

            </div>

            <hr />

        </section>
    )
}

export default Categories