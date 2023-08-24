import React, { useState, useEffect, useContext  } from 'react'
import { Cart } from '../Cart'

import * as Icon from 'react-feather';
import Axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Produtos.scss'

const Produtos = props => {

    const [dados, setDados] = useState([]);
    const [random, setRandom] = useState([]);
    const [cart, setCart] = useContext(Cart)
    const URL = 'https://elenex.vercel.app/produtos.json'

    const getProducts = () => {
        Axios.get(URL) 
        .then((resp) => {
            setDados(resp.data.products)
        })  
    }

    const addCart = () => {
        setCart(cart + 1)
    }

    const RenderAllProducts = () => {
        
        if(props.allProducts === true) {
            return (
                <>
                    {dados.map((item) => (
                        <SwiperSlide 
                            key={item.id}
                        >
                            <div key={item.id} className="ItemProducts">
                                <img src={item.photo} />
                                <h3> {item.productName} </h3>
                                <p> {item.brand} </p>
                                <p> R$ {item.price} </p>
                                <button onClick={addCart}> 
                                    <Icon.ShoppingCart className="Icon" size="20" stroke-width="1.5" />
                                    Add to Cart
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </>
            )
        }
    }

    const RenderFilteredCategory = () => {
        const filteredCategory = dados.filter((item) => {
            return item.category === "Smartphone"
        })

        if(props.filteredCategory === true) {
            return (
                <>

                    {filteredCategory.map((item) => (
                        <SwiperSlide 
                            key={item.id}
                        >
                            <div key={item.id} className="ItemProducts">
                                <img src={item.photo} />
                                <h3> {item.productName} </h3>
                                <p> {item.brand} </p>
                                <p> R$ {item.price} </p>
                                <button onClick={addCart}> 
                                    <Icon.ShoppingCart className="Icon" size="20" stroke-width="1.5" />
                                    Add to Cart
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}

                </>
            )
        }
    }

    const RenderFilteredBrand = () => {

        const filteredBrand = dados.filter((item) => {
            return item.brand === "Apple"
    })

        if(props.filteredBrand === true) {
        return (
            <>
                {filteredBrand.map((item) => (
                    <SwiperSlide 
                        key={item.id}
                    >
                        <div key={item.id} className="ItemProducts">
                            <img src={item.photo} />
                            <h3> {item.productName} </h3>
                            <p> {item.brand} </p>
                            <p> R$ {item.price} </p>
                            <button onClick={addCart}> 
                                <Icon.ShoppingCart className="Icon" size="20" stroke-width="1.5" />
                                Add to Cart
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </>
            )
        }
    }

    const RenderSpecial = () => {
        const filteredSpecial = dados.filter((item) => {
            return item.category === "Notbook" || item.category === "Game" || item.brand === "JBL"
    })

        if(props.filteredSpecial === true) {
        return (
            <>
                {filteredSpecial.map((item) => (
                    <SwiperSlide 
                        key={item.id}
                    >
                        <div key={item.id} className="ItemProducts">
                            <img src={item.photo} />
                            <h3> {item.productName} </h3>
                            <p> {item.brand} </p>
                            <p> R$ {item.price} </p>
                            <button onClick={addCart}> 
                                <Icon.ShoppingCart className="Icon" size="20" stroke-width="1.5" />
                                Add to Cart
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </>
            )
        }
    }


    useEffect( () => {
        getProducts()
     }, [])

    return (
        <section className="ProdutosContainer">
            
            <h2> {props.titulo} </h2>

            <div className="Produtos">
                <Swiper
                    slidesPerView={props.qtSlider}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className="Swiper-container"
                    breakpoints={{
                        300: {
                        width: 300,
                        slidesPerView: 1,
                        },
                        600: {
                            width: 600,
                            slidesPerView: 2,
                        },
                        900: {
                            width: 900,
                            slidesPerView: 3,
                        },
                        1200: {
                        width: 1200,
                        slidesPerView: props.qtSlider,
                        },
                    }}
                >
                
                    {RenderAllProducts()}
                    {RenderFilteredCategory()}
                    {RenderFilteredBrand()}
                    {RenderSpecial()}
                
                

                </Swiper>

            </div>

            { props.bannerDesktop ? <img src={props.bannerDesktop} className="BannerDesktop" /> : null }
            { props.bannerMobile ? <img src={props.bannerMobile} className="BannerMobile" /> : null }

        </section>
    )
}

export default Produtos;

