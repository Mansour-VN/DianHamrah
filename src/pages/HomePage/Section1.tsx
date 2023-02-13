import Image from 'next/image';
import headerBg from "../../../public/assets/images/background/header-bg.png";
import happyMan from "../../../public/assets/images/People/header-img.png";
import Button from "@/components/Button/Button";
import {BsArrowLeftSquare} from "react-icons/bs";


const section1 = () => {
    return (
        <div id="sec1" className="w-full z-0 flex items-center justify-center relative flex-col md:h-[700px] h-[1300px]  ">
            <div className="w-full z-0 	bg-cover">
                <Image placeholder="blur"
                       quality={100}
                       fill
                       sizes="100vw"
                       style={{
                           objectFit: 'cover',
                       }} src={headerBg} alt="image"/>
            </div>
            <div
                className="container flex flex-wrap flex-row  justify-center items-center mx-auto  z-10 absolute bottom-0	">
                <div className="header-img px-4 mt-[100px] ">
                    <Image src={happyMan} alt="image"/>
                </div>
                <div className="px-4 flex-1  ">
                    <div className=" mt-[140px] md:mt-[170px]">
                        <p className="text-black text-6xl font-extrabold mb-5">دیان همراه فردا</p>
                        <h2 className="text-2xl font-extrabold mb-6 text-black">اولین و تنها معتمد مالیاتی نوع دو و سه در کشور </h2>
                        <p className="text-lg text-gray-400">
                            شرکت دیان همراه فردا دی ماه سال 1400 تاسیس و در راستای تصویب و اجرای قانون پایانه های فروشگاهی و سامانه مودیان از مهرماه 1401 به عنوان اولین و تنها معتمد مالیاتی نوع دو و سه با هکاری تیم متخصص و حرفه ای در حال فعالیت است.
                        </p>
                        <div className="mt-[40px] mb-[100px]">
                            <Button text="اطلاعات بیشتر" type="normal" icon=<BsArrowLeftSquare/> mobile={false}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default section1