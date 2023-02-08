import Card7 from "@/components/card7/card7"
//swiper
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//end import swiper
import Image from 'next/image';
const Section7 = () => {
  return (
 <>
 <div id="sec7 " className="w-full p-10">
   <div className="container mx-auto">
       <div className="p-20 text-center">
            <h2 className="text-xl md:text-4xl font-bold">
                سازمان هایی که افتخار همکاری با آنها را داریم
            </h2>
       </div>
       <div className="bg-slate-800">
               <Swiper
                   slidesPerView={1}
                   spaceBetween={10}
                   pagination={{
                       clickable: true,
                   }}
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
                            width={500}
                            height={500}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo4.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo2.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo1.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo5.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo4.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo3.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>

                   <SwiperSlide>
                       <Image
                            src="/assets/images/Logos/b-logo2.png"
                            alt="image1"
                            width={400}
                            height={400}
                       />
                   </SwiperSlide>
               </Swiper>
       </div>



   </div>

 </div>
 </>
  )
}

export default Section7