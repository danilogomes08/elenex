import react from 'react'

import './Categories.scss'

const Categories = _ => {

    return(
        <section className="Categories">

            <h2>Categories</h2>

            <div>

                <div className="Category">
                    <img src="./images/category01.png" />
                    <h3> Smartphones </h3>
                </div>

                <div className="Category">
                    <img src="./images/category02.png" />
                    <h3> Gamer </h3>
                </div>

                <div className="Category">
                    <img src="./images/category03.png" />
                    <h3> Smartwatch </h3>
                </div>

                <div className="Category">
                    <img src="./images/category04.png" />
                    <h3> Audio </h3>
                </div>

                <div className="Category">
                    <img src="./images/category05.png" />
                    <h3> Notbook </h3>
                </div>

            </div>

        </section>
    )
}

export default Categories