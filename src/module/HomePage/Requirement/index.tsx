import Image from "next/image";
import about_img from "public/assets/images/People/karman1.jpg"
import {useState} from "react";
import {HomePage} from "public/Constants/dummy";

const Section3 = () => {

    const [courses, setCourses] = useState(0)
    const [customers, setCustomer] = useState(0)
    const [agent, setAgent] = useState(0)
    const increaseCounter = () => {
        if (courses < 221) {
            setCourses(courses + 1)
        }
        if (customers < 245) {
            setCustomer(customers + 1)
        }
        if (agent < 12) {
            setAgent(customers + 1)
        }
    }
    setTimeout(increaseCounter, 75)
    return (
        <div id="requirement" className=" container flex flex-col gap-24 border-t-official border-t-8">
            <div className="flex flex-col md:flex-row-reverse  gap-4 items-center justify-center">
                <div className="flex-1 pt-12">
                    <Image width={500} src={about_img} alt="about" className="rounded"/>
                </div>
                <div className="flex-1 flex flex-col justify-between  ">
                    <div className="about-title second-atitle ">
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
                <div className="flex md:flex-row flex-wrap md:gap-0 gap-2 justify-between  flex-col items-center">

                    <div className="stats shadow w-1/2 md:w-1/4">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg bg-bg6 text-white">
                            <div className="stat-title">تعداد مشتریان</div>
                            <div className="stat-value">{`${customers}`}</div>
                            <div className="stat-desc">22% بیشتر از ماه قبل</div>
                        </div>
                    </div>
                    <div className="stats shadow w-1/2 md:w-1/4">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg  bg-bg6 text-white">
                            <div className="stat-title text-ellipsis ">تعداد شعب و دفاتر</div>
                            <div className="stat-value">{`${agent}`}</div>
                            <div className="stat-desc">فعال در کشور</div>
                        </div>
                    </div>
                    <div className="stats shadow w-1/2 md:w-1/4">
                        <div className="stat flex flex-col items-center justify-center drop-shadow-lg  bg-bg6 text-white">
                            <div className="stat-title text-ellipsis ">تعداد دوره‌های برگزار شده</div>
                            <div className="stat-value">{`${courses}`}</div>
                            <div className="stat-desc">تاکنون</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Section3