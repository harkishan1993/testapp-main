'use client'
import Container from "@/components/Container"
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import MyLink from "@/components/Mylink";
import Myimage from "@/components/Myimage";
function Productdetail({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let prod = product?.data?.[0]
    let image = prod?.image?.[0]?.url ? JSON.parse(prod?.image?.[0]?.url) : []
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
                <div className="w-full">
                    <div>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#000",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 mb-10"
                        >
                            {
                                image.map((value, index) => {
                                  return  <SwiperSlide key={index}>
                                        <Myimage src={value.secure_url} width={300} height={300} />
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="mb-5 lg:mb-0">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={6}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                              {
                                image.map((value, index) => {
                                   return <SwiperSlide key={index} >
                                        <Myimage src={value.secure_url} width={50} height={50} />
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>

                </div>
                <div className="lg:p-5 flex flex-col gap-4">
                    <div className="mb-4">
                        <h1 className="productdetailTitle inline-block">{prod?.name}
                            <div className="h-[1px] w-full bg-slate-300"></div>
                        </h1>
                    </div>
                    {/* <span className="productdetailprice">₹6,300 – ₹9,188</span>
                    <span className="text-emerald-800 text-sm capitalize">Prices are inclusive of Delivery Charges.</span> */}
                    {/* <div>
                        <span className="text-base font-extrabold text-gray-600 capitalize">Product Description:</span>
                        <h2 className="text-base capitalize text-gray-600">DPI-902 – Temperature and Process Indicator.</h2>
                        <div className="text-base capitalize text-gray-600">
                            <div className="flex gap-1">
                                <span className="font-semibold">Configuration:</span>
                                <span>(1 AI + 1 AO )</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-semibold">Size:</span>
                                <span>96 x 96 x 75</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-semibold">Part No:</span>
                                <span>1304</span>
                            </div>
                        </div>
                    </div> */}
                    <MyLink href='/' className="text-blue-500 text-xl font-semibold underline underline-offset-8 mb-2">Download Catalog</MyLink>
                    {/* <span className="text-gray-500 text-base font-semibold">Please refer the Ordering Information table before placing your order.</span>
                    <div className="py-3">
                        <label htmlFor="model" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Select Part No :</label>
                        <select id="model" className="form-select w-full rounded-[6px] border-none shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-gray-500 focus:ring-0 focus:shadow-[0px_0px_8px_0px_rgba(40,70,255,0.3)]">
                            <option>Choose an option</option>
                            <option>model2</option>
                            <option>model3</option>
                            <option>model4</option>
                        </select>
                    </div>
                    <div className="py-3">
                        <label htmlFor="quentity" className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Quantity :</label>
                        <input id="quentity" type="number" size="4" min='1' step='1' defaultValue='1' inputMode="numeric" autoComplete="off" className="form-input w-full rounded-[6px] border-none shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-gray-500 focus:ring-0 focus:shadow-[0px_0px_8px_0px_rgba(40,70,255,0.3)]" />
                    </div> */}
                    {/* <div>
                        <span className="productdetailprice text-emerald-800 tracking-wider">₹9,188</span>
                    </div> */}
                    {/* <div className="flex flex-col min-[540px]:flex-row gap-2">
                        <MyLink href='/' className="cartbtn text-sm w-full">
                            add to cart
                        </MyLink>
                        <MyLink href='/' className="cartbtn w-full px-2 py-2 text-sm h-auto text-center">
                            request to quote
                        </MyLink>
                    </div> */}
                </div>
            </div>
        </Container>
    )
}

export default Productdetail