import Button from "@/components/Button/Button"
import Image from 'next/image'

const Section6 = () => {
  return (
    <div id="sec6"  className="bg-bg6  text-white w-full">
    <div className="container mx-auto py-4 flex items-center" >
      <div className="w-8/12">
        <h2 className="text-7xl">اکنون یک مشاوره رایگان برای مشاغل خود دریافت کنید!</h2>
        <p className="py-4">طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود.</p>
        <div className="phone flex items-center gap-4 " >

          <div><Button text ="تلفن" type="tel" icon=""/></div>
          <div className="text-7xl">0123456789</div>
        </div>
      </div>
      <div className="w-4/12 ">
        <Image className="scale-100 "
            // loader={myLoader}
               src="/assets/images/People/features-lg-img.png"
               alt="Picture of the author"
               width={500}
               height={500}
        />


        {/*<img className="w-full h-full scale-105" decoding="async" src="https://dehkadeh2.ir/zebizz/wp-content/uploads/2021/06/features-lg-img.png" alt="features-lg-img" />*/}
      </div>

    </div>

    </div>
  )
}

export default Section6