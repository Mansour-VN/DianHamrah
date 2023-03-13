import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Logos} from "public/Constants/dummy"

function CustomerSwiper() {
    const swiperHeight = 0
    const swiperWidth = 500

    return (

        <div className="mx-auto">
            <div className="text-center">
                <h2 className="text-xl md:text-4xl font-semibold">
                    سازمان هایی که افتخار همکاری با آنها را داریم
                </h2>
            </div>
            <div className="bg-slate-800 w-full mt-4 md:h-32 flex items-center ">
                <div className="container mx-auto">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoHeight={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper hidden "
                    >

                        <>
                            {Logos.map((logo, i) => {
                                return (
                                    <div  key={i}>
                                        <SwiperSlide>
                                            <Image

                                                src={logo.Logo}
                                                alt="image1"
                                                width={75}
                                                height={75}
                                                className="rounded-lg"
                                            />
                                        </SwiperSlide>
                                    </div>
                                )
                            })}

                        </>
                    </Swiper>
                </div>
            </div>


        </div>

    );
}

export default CustomerSwiper;