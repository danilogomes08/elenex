import react from 'react'
import './Banners.scss'

const Banners = props => {

    return (
        <section className="Banner">
            <div>
                <h2>{props.titulo1}</h2>
                <p>{props.subtitulo1} </p>
                <img src={props.img1} />
            </div>

            <div>
                <h2>{props.titulo2}</h2>
                <p>{props.subtitulo2} </p>
                <img src={props.img2} />
            </div>
        </section>
    )
}

export default Banners