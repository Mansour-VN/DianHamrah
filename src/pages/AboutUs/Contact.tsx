import Button from "@/components/Button/Button"
import Image from 'next/image'
import {FiPhoneCall} from 'react-icons/fi';
import Socialmedia from "@/components/SocialMedia/Socialmedia";


const Contact = () => {
    return (
        <div id="Contact" className="bg-bg6  text-white w-full   ">
            <div className="container mx-auto  flex items-center">
                <div className=" w-full md:w-8/12">
                    <h2 className=" text-2xl  md:text-5xl py-2 md:pb-8  leading-normal">با دیان همراه فردا مطمئن قدم
                        بردارید</h2>
                    <p className="py-4 md:text-xl">جهت راهنمایی و دریافت مشاوره رایگان با مشاوران ما تماس حاصل
                        فرمائید.</p>
                    <div className="phone flex flex-col items-start gap-4 ">

                        <div className="text-center text-4xl flex flex-row gap-4 items-center">
                            <Button mobile="" text="تماس با ما" type="tel" icon={<FiPhoneCall/>}/>
                            <div className=" text-2xl md:text-4xl">021-96646</div>
                        </div>
                        <p>آدرس: تهران، میدان صنعت، خیابان دادمان، کوچه میلاد چهارم،پلاک ۱۵</p>
                        <p>کدپستی: 1468644451</p>
                        <p>ایمیل: info@dianhamrah.ir</p>
                        <Socialmedia/>
                    </div>
                </div>
                <div className="  w-0 md:w-4/12">
                    <Image className=" "
                        // loader={myLoader}
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

export default Contact