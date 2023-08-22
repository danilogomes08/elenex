import react from 'react'
import './Brands.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Brands = _ => {

    return (
        <section className="BrandsContainer">
            
            <Swiper
                slidesPerView={4}
                loop={true}
                modules={[Pagination, Navigation]}
                navigation={true}
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
            
                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/apple-logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/dell-logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/lenovo-logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/JBL--logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/nitendo-logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/samsung-logo.png" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/sony-logo.png" />
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="Brands">
                        <img src="./images/vaio-logo.png" />
                    </div>
                </SwiperSlide>
            
            </Swiper>

        </section>
    )
}

export default Brands