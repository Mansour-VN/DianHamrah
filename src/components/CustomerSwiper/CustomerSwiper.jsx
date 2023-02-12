import React from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function CustomerSwiper () {
    const swiperHeight = 0
    const swiperWidth = 500

    return (

        <div className="mx-auto">
            <div className="p-20 text-center">
                <h2 className="text-xl md:text-4xl font-bold">
                    سازمان هایی که افتخار همکاری با آنها را داریم
                </h2>
            </div>
            <div className="bg-slate-800 w-full">
                <div className="container mx-auto py-10">
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

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo1.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo4.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}

                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo2.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}

                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo1.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo5.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo4.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo3.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src="/assets/images/Logos/b-logo2.png"
                                alt="image1"
                                width={swiperWidth}
                                height={swiperHeight}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


        </div>

    );
}

export default CustomerSwiper;