// import Card2 from "../../components/card2/Card2";
import { services } from "@/../public/Constants/dummy";
// import React from "react";
// import supportIcon from "@/../public/assets/images/Icons/se-icon7.png"
// import supportPNG from "@/../public/assets/images/Icons/se-icon7-af.png";
// import planingIcon from "@/../public/assets/images/Icons/se-icon4.png";
// import planingPNG from "@/../public/assets/images/Icons/se-icon4-af.png";
// import managementIcon from "@/../public/assets/images/Icons/se-icon6.png";
// import managementPNG from "@/../public/assets/images/Icons/se-icon6-af.png";
// import keepingIcon from "@/../public/assets/images/Icons/se-icon5.png";
// import keepingPNG from "@/../public/assets/images/Icons/se-icon5-af.png";
import Card5 from "@/components/card5/card5";


// import * as console from "console";

const ServicesDian = () => {

    return (
        // <div id="servicesDian" className="section2 w-full flex flex-col items-center relative z-0">
        //     <h1 className="text-4xl font-bold text-center h-72 bg-bg6 w-full text-white pt-16">
        //         خدمات دیان همراه فردا
        //     </h1>
        //     <div className="container relative bottom-32">
        //         <div className="flex md:flex-row flex-col gap-12 justify-center items-center">
        //             {services.map((service) => (
        //                 <Card2
        //                     key={service.id}
        //                     src={service.image}
        //                     alt={service.title}
        //                     textTitleCard={service.title}
        //                     mainTextCard={service.Description}
        //                 />
        //             ))}

        //         </div>
        //     </div>

        // </div>
        <div id="servicesDian">
                <div className="container flex flex-row flex-wrap items-center">
                    <div className="flex-col md:pr-8 font-bold">
                        <h2 className="text-4xl font-semibold py-2">
                            خدمات دیان همراه فردا
                        </h2>
                        <p>
                            شرکت دیان همراه فردا دی ماه سال 1400 تاسیس و در راستای تصویب و اجرای قانون پایانه های فروشگاهی و سامانه مودیان از مهرماه 1401 به عنوان اولین و تنها معتمد مالیاتی نوع دو و سه با همکاری تیم متخصص و حرفه ای در حال فعالیت است.
                        </p>
                        <p className="py-2">
                            خدمات اصلی این شرکت، آموزش قانون پایانه‌های فروشگاهی و سامانه مودیان، از تصویب تا اجرا می‌باشد.
                        </p>
                        <p>
                           از مهم‌ترین بخش‌های خدمات ما، واحد فعال پشتیبانی است که این اطمینان خاطر را به شرکت‌های متقاضی خدمات دیان‌همراه می‌دهد که از ابتدا تا پایان قرار داد همکاری، در کنار شما هستیم. در کنار این خدمات می‌توانید از مشاوره‌های تلفنی و حضوری اساتید مایلی و مالیاتی شرکت نیز بهره‌مند شوید.
                        </p>

                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col p-2 md:w-1/2">
                            <Card5 backImg={services[1].image} icon={services[1].image} title={services[1].title}
                                content={services[1].Description} />

                            <Card5 backImg={services[0].image} icon={services[0].image} title={services[0].title}
                                content={services[0].Description} />

                        </div>
                        <div className="flex flex-col p-2 md:mt-16  md:w-1/2">
                            <Card5 backImg={services[2].image} icon={services[2].image} title={services[2].title}
                                content={services[2].Description} />
                            <Card5 backImg={services[3].image} icon={services[3].image} title={services[3].title}
                                content={services[3].Description} />      
                        </div>
                    </div>
                    

                </div>
        
        </div>
    )
}

export default ServicesDian;