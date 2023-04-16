import Image from "next/image"
import BgCustomerClub from "public/assets/images/background/customerClub.jpg";
import {Button} from "@/common/components/Button";
import { AiOutlineLogin } from 'react-icons/ai';

const CustomerClub = () => {
  return (
    <div id="CustomerClub"
    className="w-full flex items-center justify-center relative flex-col h-[400px] my-20 ">
   <div className="w-full  z-0 bg-cover">
       <Image placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                  objectFit: 'cover',
              }} src={BgCustomerClub} alt="image"/>
   </div>
   <div
       className="z-1 absolute container flex flex-col items-center justify-between gap-6 md:px-36 py-6 text-justify bg-white/30 rounded-2xl">
       <h2 className="text-center w-full md:text-7xl  text-4xl font-extrabold hover:cursor-pointer">باشگاه مشتریان</h2>
       <p className="px-4 font-bold">
           
       از مهم‌ترین هدف باشگاه دیان‌همراه فردا ایجاد ارتباط دو سویه با شما مشتری گرامی و ایجاد منافع مشترک است.
       برای وارد شدن به باشگاه مشتریان روی لینک زیر کلید
           </p>
           <a href="http://club.dianhamrah.ir/branch/1196">
                <Button text="ورود" type="normal" icon={<AiOutlineLogin/>} mobile={false} onClick=""/>
           </a>
   </div>
</div>
  )
}

export default CustomerClub