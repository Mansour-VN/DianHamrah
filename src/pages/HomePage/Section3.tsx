import Image from "next/image";
import about_img from "../../../public/assets/images/background/about_img.png"
import {useState} from "react";

const Section3 = () => {

    const [courses, setCourses] = useState(0)
    const [customers, setCustomer] = useState(0)
    const [agent, setAgent] = useState(0)
    const increaseCounter = () => {
        if (courses < 575) {
            setCourses(courses + 1)
        }
        if (customers < 385) {
            setCustomer(customers + 1)
        }
        if (agent < 15) {
            setAgent(customers + 1)
        }
    }
    setTimeout(increaseCounter, 7)
    return (
        <div
            className="section3 container flex flex-col gap-24 py-[100px]">
            <div className="flex flex-col md:flex-row-reverse  gap-4 items-center justify-center">
                <div className="flex-1">
                    <Image style={{width: "540px",}} src={about_img} alt="about"/>
                </div>
                <div className="flex-1 flex flex-col justify-between  ">
                    <div className="about-title second-atitle ">
                        <h5 className="text-official mt-4 px-4"> راهی جدید برای رشد پیدا کنید</h5>
                        <h2 className="text-7xl text-black mt-2 px-4">بهترین راه حل کسب و کار خود را با قالب ما دریافت
                            کنید</h2>
                        <p className="text-sm text-black mt-4 px-4">طراحان سایت هنگام طراحی قالب سایت معمولا با این
                            موضوع رو برو هستند که محتوای اصلی صفحات
                            آماده
                            نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                            بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به
                            دنبال
                            این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود.

                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex md:flex-row flex-wrap justify-between gap-4 flex-col items-center">

                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden ">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="stat-title">تعداد مشتریان</div>
                            <div className="stat-value">{`${customers}+`}</div>
                            <div className="stat-desc">22% بیشتر از ماه قبل</div>
                        </div>
                    </div>
                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden ">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="stat-title text-ellipsis ">تعداد نمایندگی</div>
                            <div className="stat-value">{`${agent}+`}</div>
                            <div className="stat-desc">فعال در کشور</div>
                        </div>
                    </div>
                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden ">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="stat-title text-ellipsis ">تعداد دوره های موفق</div>
                            <div className="stat-value">{`${courses}+`}</div>
                            <div className="stat-desc">تاکنون</div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Section3