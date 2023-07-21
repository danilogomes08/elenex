import react from 'react'

const Produtos = props => {

    return (
        <section>
            
            <h2> {props.titulo} </h2>

            <hr />

            <img src={props.banner} />

        </section>
    )
}

export default Produtos