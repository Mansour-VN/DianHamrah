import Image from 'next/image';
import headerBg from "../../../public/assets/images/background/header-bg.png";
import happyMan from "../../../public/assets/images/People/header-img.png";
import Button from "@/components/Button/Button";
import {BsArrowLeftSquare} from "react-icons/bs";


const section1 = () => {
    return (
        <div className="w-full flex items-center justify-center relative flex-col md:h-[700px] h-[1300px]  ">
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
                        <h5 className="text-official font-xl font-extrabold mb-5">خوش آمدید</h5>
                        <h2 className="text-6xl font-extrabold mb-6 text-black">کسب و کار شما راه حل بهتری پیدا می کند</h2>
                        <p className="text-lg text-gray-400">طراحان سایت هنگام طراحی قالب سایت معمولا با این
                            موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
                            فرما
                            نمیدهد.
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