import History from "@/pages/AboutUs/History";
import Contact from "@/pages/AboutUs/Contact";
import BranchesCard from "../../components/BranchesCard/BranchesCard"
import Image from "next/image";
import BgCustomerClub from "../../../public/assets/images/background/customerClub.jpg";
import Button from "@/components/Button/Button";
import { AiOutlineLogin } from 'react-icons/ai';

const AboutUs = () => {
    //ts
    return (
        <div id="AboutUS" className="bg-sky-50 flex flex-col justify-center items-center">
            <History/>
            <Contact/>
            <div id="Branches" className="flex flex-col items-center justify-center container my-10"> {/*Branches*/}
                <h2 className="mb-10 text-4xl font-extrabold text-official">لیست شعب و دفاتر</h2>
                <div className="container flex flex-col items-center justify-center  gap-4	">
                    <BranchesCard title="دفتر مرکزی" address="میدان صنعت، خیابان دادمان"
                                  map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="021-2165496" mobile="09121234567" mail="info@dian.ir" manager="آقای دکتر محمودی"
                                  services={["ارایه خدمات نرم افزاری", "آموزش کلیه امور حسابداری و مالیاتی", "صدور امضاء الکترونیک", "صدور گواهینامه های آموزشی"]}/>
                    <BranchesCard title="مازندران" address="متل قو، جاده ساحلی"
                                  map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="021-2165496" mobile="09121234567" mail="mazandaran@dian.ir"
                                  manager="خانم دکتر شریف"
                                  services={["ارایه خدمات نرم افزاری", "صدور امضاء الکترونیک"]}/>
                    <BranchesCard title="مشهد" address="خیابان امام رضا، انتهای دانش شرقی"
                                  map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="021-2165496" mobile="09121234567" mail="mazandaran@dian.ir"
                                  manager="خانم دکتر شریف"
                                  services={["ارایه خدمات نرم افزاری", "صدور امضاء الکترونیک"]}/>
                    <BranchesCard title="اصفهان" address="اصفهان، جنب سی و سه پل"
                                  map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                                  tel="021-2165496" mobile="09121234567" mail="mazandaran@dian.ir"
                                  manager="خانم دکتر شریف"
                                  services={["ارایه خدمات نرم افزاری", "صدور امضاء الکترونیک"]}/>
                </div>
            </div>

            <div id="CustomerClub"
                 className="w-full flex items-center justify-center relative flex-col h-[400px] my-20 ">
                <div className="w-full  z-0 bg-cover">
                    <Image placeholder="blur"
                           quality={100}
                           fill
                           sizes="100vw"
                           style={{
                               objectFit: 'cover',
                           }} src={BgCustomerClub} alt="image"/>
                </div>
                <div
                    className="z-1 absolute container flex flex-col items-center justify-between gap-6 md:px-36 py-6 text-justify bg-white/30 rounded-2xl">
                    <h2 className="text-center w-full md:text-7xl  text-4xl font-extrabold hover:cursor-pointer">باشگاه مشتریان</h2>
                    <p className="px-4 font-bold">
                        
                    از مهم‌ترین هدف باشگاه دیان‌همراه فردا ایجاد ارتباط دو سویه با شما مشتری گرامی و ایجاد منافع مشترک است. 
            <hr/>
            برای وارد شدن به باشگاه مشتریان روی لینک زیر کلید
                        </p>
                        <a href="http://club.dianhamrah.ir/branch/1196">
                             <Button text="ورود" type="normal" icon={<AiOutlineLogin/>} mobile={false} onClick=""/>
                        </a>
                </div>
            </div>
            {/* <OurTeam/> */}
        </div>
    )
}
export default AboutUs