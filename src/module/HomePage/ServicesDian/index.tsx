import { services } from "public/Constants/dummy";
import ServicesCard from "@/common/components/ServicesCard";
import Button from "@/common/components/Button";
import {useRouter} from "next/navigation";


// import * as console from "console";

const ServicesDian = () => {
    const router = useRouter()

    return (

        <div id="servicesDian">
                <div className="container flex flex-row flex-wrap items-center">
                    <div className="flex-col md:pr-8 font-bold p-4 text-justify">
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
                            <ServicesCard backImg={services[1].image} icon={services[1].image} title={services[1].title}
                                content={services[1].description.slice(0,120)+" . . ."} path={`Services/${services[1].title}`}/>

                            <ServicesCard backImg={services[0].image} icon={services[0].image} title={services[0].title}
                                content={services[0].description.slice(0,120)+" . . ."} path={`Services/${services[0].title}`}/>

                        </div>
                        <div className="flex flex-col p-2 md:mt-16  md:w-1/2">
                            <ServicesCard backImg={services[2].image} icon={services[2].image} title={services[2].title}
                                content={services[2].description.slice(0,120)+" . . ."} path={`Services/${services[2].title}`}/>
                            <ServicesCard backImg={services[3].image} icon={services[3].image} title={services[3].title}
                                content={services[3].description.slice(0,120)+" . . ."} path={`Services/${services[3].title}`}/>
                        </div>
                    </div>
                    <div className="w-full px-4 md:px-0">
                        <Button
                            text="اطلاعات بیشتر" type="wide" icon="" mobile=""
                            onClick={() => router.push(`/Services`)}
                        />
                    </div>
                </div>
        
        </div>
    )
}

export default ServicesDian;