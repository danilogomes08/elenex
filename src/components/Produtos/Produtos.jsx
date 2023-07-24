import React, { useState, useEffect } from 'react'

import * as Icon from 'react-feather';
import Axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './Produtos.scss'

const Produtos = props => {

    const [dados, setDados] = useState([])
    const URL = 'https://elenex.vercel.app/produtos.json'

    useEffect( () => {
        Axios.get(URL) 
             .then((resp) => {
                 setDados(resp.data.products)
             })    
     }, [])

     
    return (
        <section className="ProdutosContainer">
            
            <h2> {props.titulo} </h2>

        <div className="Produtos">
        <Swiper
                slidesPerView={4}
        
                className="Swiper-container"
                breakpoints={{
                    320: {
                      width: 320,
                      slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                      960: {
                        width: 960,
                        slidesPerView: 3,
                    },
                    1280: {
                      width: 1280,
                      slidesPerView: 4,
                    },
                  }}
            >
                {dados.map((item) => (
                    <SwiperSlide 
                        key={item.id}
                    >
                        <div key={item.id} className="ItemProducts">
                            <img src={item.photo} />
                            <h3> {item.productName} </h3>
                            <p> {item.brand} </p>
                            <p> R$ {item.price} </p>
                            <button> 
                                <Icon.ShoppingCart className="Icon" size="20" stroke-width="1.5" />
                                Add to Cart
                            </button>
                        </div>
                    </SwiperSlide>
            ))}
           </Swiper>

        </div>
        <hr />

            <img src={props.banner} />

        </section>
    )
}

export default Produtos