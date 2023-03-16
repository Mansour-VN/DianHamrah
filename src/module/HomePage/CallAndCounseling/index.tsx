import Button from "@/common/components/Button"
import Image from 'next/image'
import {FiPhoneCall} from 'react-icons/fi';


const Section6 = () => {
    return (
        <div id="callAndCounseling" className=" text-white w-full relative pt-16">
            <div className="bg-bg6 w-full h-[400px] absolute bottom-0 z-0 "></div>
            <div className="container mx-auto  flex items-center gap-4 md:px-0 px-4 z-10 py-28 md:py-0" id="Contact">
                <div className=" w-full md:w-8/12 z-10">
                    <h2 className=" text-2xl  md:text-5xl py-2 md:pb-8  leading-normal">با دیان همراه فردا مطمئن قدم
                        بردارید</h2>
                    <p className="py-4 md:text-xl">جهت راهنمایی و دریافت مشاوره رایگان با مشاوران ما تماس حاصل
                        فرمائید.</p>
                    <div className="phone flex items-center gap-4 ">

                        <div className="text-center text-4xl flex flex-row flex-wrap items-center gap-4">
                            <Button mobile="" text="تماس با ما" type="tel" icon={<FiPhoneCall/>} onClick=""/>

                            <div className=" text-2xl md:text-4xl">021-96646</div>
                            <div className=" text-2xl md:text-4xl">info@dianhamrah.ir</div>
                        </div>

                    </div>
                </div>
                <div className="md:w-4/12  z-10">
                    <Image className="hidden md:block "
                           src="/assets/images/People/features-lg-img.png"
                           alt="Picture of the author"
                           width={500}
                           height={500}
                    />
                </div>

            </div>


        </div>
    )
}

export default Section6