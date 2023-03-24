import Image from 'next/image';
import headerBg from "public/assets/images/background/header-bg.png";
import {Button} from "@/common/components/Button";
import {BsArrowLeftSquare} from "react-icons/bs";


const TitleLegislation = () => {
    return (
        <div id="sec1" className="w-full flex items-center justify-center relative flex-col h-screen">
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
                className="container flex flex-wrap flex-row  justify-center items-center mx-auto  z-10">
                {/*<div className="header-img px-4 mt-[100px] ">*/}
                {/*    <Image src={happyMan} alt="image"/>*/}
                {/*</div>*/}

                <div className="px-4 flex-1 ">
                    <div>
                        <p className="text-black md:text-6xl text-4xl font-extrabold mb-5">کتابخانه قوانین دیان همراه</p>
                        <h2 className="text-xl font-extrabold mb-6 text-black">اولین و تنها معتمد مالیاتی نوع دو و سه در کشور </h2>
                        <div className=" flex  flex-col  mx-auto">
                            <form>
                                <div className="flex justify-center items-center md:gap-x-4 ">
                                    <input type="text" placeholder="به دنبال چه قانونی می گردید " className="input w-full max-w-xl md:my-20" />
                                    <Button text="جستوجو " type="normal" icon=<BsArrowLeftSquare/> mobile={false} onClick=""/>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleLegislation