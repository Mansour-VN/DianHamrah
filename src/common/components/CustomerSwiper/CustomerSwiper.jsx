import React from 'react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Logos} from "public/Constants/dummy"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function CustomerSwiper() {


    return (

        <div className="mx-auto py-12">
            <div className="text-center">
                <h2 className="text-xl md:text-4xl font-semibold pb-4 ">
                    سازمان هایی که افتخار همکاری با آنها را داریم
                </h2>
            </div>
            <div className="bg-slate-800 w-full mt-4 md:h-32 flex items-center ">
                <div className="container mx-auto">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}

                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"


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