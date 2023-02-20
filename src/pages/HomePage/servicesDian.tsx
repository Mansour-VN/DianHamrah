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
        <div id="servicesDian ">
            <div className="py-8">
                <div className="container flex flex-row flex-wrap items-center">
                <h2 className="text-4xl  text-center w-full font-semibold md:hidden">
                            خدمات دیان همراه فردا
                 </h2>
                    <div className="md:w-1/2 flex flex-col md:flex-row">
                        <div className="flex flex-col p-2 md:w-1/2">

                            <Card5 backImg={services[0].image} icon={services[0].image} title={services[0].title}
                                content={services[0].Description} />


                            <Card5 backImg={services[1].image} icon={services[1].image} title={services[1].title}
                                content={services[1].Description} />


                        </div>
                        <div className="flex flex-col p-2 md:mt-16  md:w-1/2">
                            <Card5 backImg={services[2].image} icon={services[2].image} title={services[2].title}
                                content={services[2].Description} />
                            <Card5 backImg={services[2].image} icon={services[2].image} title={services[2].title}
                                content={services[2].Description} />
                           
                        </div>
                    </div>
                    <div className="md:w-1/2 flex-col md:pr-8">
                        <h2 className="text-4xl hidden font-semibold py-8 md:flex">
                            خدمات دیان همراه فردا
                        </h2>
                        <p className="py-2">
                            طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات
                            آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های
                            مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح
                            به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد
                            افراد روی متن های موجود تمرکز کنند.
                        </p>
                        <p className="py-2">
                            از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم
                            استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن
                            در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است
                        </p>
                        <p className="py-2">
                            نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست
                            کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را
                            از قسمتهای مختلف سایت حذف کنند

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicesDian;