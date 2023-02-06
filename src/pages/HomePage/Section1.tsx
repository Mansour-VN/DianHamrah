import Image from 'next/image';
import headerBg from "../../../public/assets/images/background/header-bg.png";
import happyMan from "../../../public/assets/images/People/header-img.png";
import Button from "@/components/Button/Button";
import {BsArrowLeftSquare} from "react-icons/bs";


const section1 = () => {
    return (
        <div className="w-full flex items-center justify-center relative flex-col md:h-[700px] h-[1300px] ">
            <div className="z-0 ">
                <Image src={headerBg} alt="image"   quality={100}
                       fill
                       sizes="100vw"
                       style={{
                           objectFit: 'cover',
                       }}/>
            </div>
            <div className="container flex flex-wrap flex-row  justify-center items-center mx-auto  z-10 absolute bottom-0	">
                <div className=" px-4 mt-[100px] ">
                    <Image  src={happyMan} alt="image" />
                </div>
                <div className="px-4 flex-1 col-lg-8 ">
                    <div className="slider-content s-slider-content mt-[170px]">
                        <h5 className="text-official font-xl font-extrabold mb-5">خوش آمدید</h5>
                        <h2 className="text-6xl font-extrabold mb-6">کسب و کار شما راه حل بهتری پیدا می کند</h2>
                        <p className="text-lg text-gray-400">طراحان سایت هنگام طراحی قالب سایت معمولا با این
                            موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
                            فرما
                            نمیدهد.
                        </p>
                        <div className="mt-[40px] mb-[100px]">
                            <Button text="اطلاعات بیشتر" type="normal" icon=<BsArrowLeftSquare/>/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default section1