'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Slidechilds from './Slidechilds';
import "swiper/css";
import "swiper/css/pagination";
function Slider() {
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
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        525: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1360: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidechilds />
                    </SwiperSlide>
                </Swiper>
                <div className='swiper-pagination'></div>
        </>
    )
}

export default Slider