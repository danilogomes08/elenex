import react from 'react'

const Banners = props => {

    return (
        <section>
            <div className={props.bg1}>
                <h2>{props.titulo1}</h2>
                <p>{props.subtitulo1} </p>
            </div>

            <div className={props.bg2}>
                <h2>{props.titulo2}</h2>
                <p>{props.subtitulo2} </p>
            </div>
        </section>
    )
}

export default Banners