'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Slidechilds from './Slidechilds';
// import { sliderProduct } from '@/data/productpage'
import "swiper/css";
import "swiper/css/pagination";
function Slider({product}) {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return `<span class=${className}></span>`
                    }
                }}
                slidesPerView={3}
                autoHeight = {true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    525: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                }}
            >
                {
                    product?.data?.map((value, index) => {
                        return <SwiperSlide key={index}>
                            <Slidechilds name={value?.name} path={value?.slug} image={value.image} />
                        </SwiperSlide>

                    })
                }
            </Swiper>
            <div className='swiper-pagination'></div>
        </>
    )
}
export default Slider