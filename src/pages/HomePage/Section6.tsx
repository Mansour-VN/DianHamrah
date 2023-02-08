import Button from "@/components/Button/Button"
import Image from 'next/image'
import { FiPhoneCall } from 'react-icons/fi';


const Section6 = () => {
  return (
    <div id="sec6"  className="bg-bg6  text-white w-full   ">
    <div className="container mx-auto  flex items-center py-2 md:py-0" >
      <div className=" w-full md:w-8/12">
        <h2 className=" text-2xl text-center md:text-6xl py-2 md:pb-8  leading-normal">اکنون یک مشاوره رایگان برای مشاغل خود دریافت کنید!</h2>
        <p className="py-4">طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود.</p>
        <div className="phone flex items-center gap-4 " >

          <div className="text-center text-4xl flex items-center"><Button text ="" type="tel" icon={<FiPhoneCall  size={30}/> } mobile = {false}/></div>
          <div className=" text-2xl md:text-4xl">0123456789</div>
        </div>
      </div>
      <div className="  w-0 md:w-4/12 ">
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

export default Section6