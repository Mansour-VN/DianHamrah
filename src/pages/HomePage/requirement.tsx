import Image from "next/image";
import about_img from "../../../public/assets/images/background/about_img.png"
import {useState} from "react";
import {HomePage} from "../../../public/Constants/dummy";

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
        if (agent < 5) {
            setAgent(customers + 1)
        }
    }
    setTimeout(increaseCounter, 20)
    return (
        <div id="requirement" className="section3 container flex flex-col gap-24 py-[100px]">
            <div className="bg-official w-full h-1.5"></div>
            <div className="flex flex-col md:flex-row-reverse  gap-4 items-center justify-center">
                <div className="flex-1">
                    <Image style={{width: "540px",}} src={about_img} alt="about"/>
                </div>
                <div className="flex-1 flex flex-col justify-between  ">
                    <div className="about-title second-atitle ">
                        <h5 className="text-official mt-4 px-4"> قوانین جدید مالیاتی را بهتر بشناسید!</h5>
                        <h2 className="text-4xl text-black font-semibold  mt-2 px-4">
                            {HomePage.Requirement.title}
                        </h2>
                        <p className="text-l text-justify text-black mt-4 px-4 leading-loose">
                            {HomePage.Requirement.Description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex md:flex-row flex-wrap justify-between gap-4 flex-col items-center">

                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg bg-bg6 text-white">
                            <div className="stat-title">تعداد مشتریان</div>
                            <div className="stat-value">{`${customers}+`}</div>
                            <div className="stat-desc">22% بیشتر از ماه قبل</div>
                        </div>
                    </div>
                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg  bg-bg6 text-white">
                            <div className="stat-title text-ellipsis ">تعداد نمایندگی</div>
                            <div className="stat-value">{`${agent}+`}</div>
                            <div className="stat-desc">فعال در کشور</div>
                        </div>
                    </div>
                    <div className="stats shadow w-[185px] h-[120px] overflow-hidden ">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg  bg-bg6 text-white">
                            <div className="stat-title text-ellipsis ">تعداد دوره های موفق</div>
                            <div className="stat-value">{`${courses}+`}</div>
                            <div className="stat-desc">تاکنون</div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-official w-full h-1.5"></div>
        </div>
    )
}

export default Section3