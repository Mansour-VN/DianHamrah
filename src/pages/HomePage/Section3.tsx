import Image from "next/image";
import about_img from "../../../public/assets/images/background/about_img.png"

const Section3 = () => {

    const counter =(num=0)=>{

            console.log(num)
            return(
                setTimeout(()=> {
                    if(num<285){
                        num++
                    }
                },0.5)
            )

    }

    return (
        <div>Section3 Mansour
            <Image src={about_img} alt="about"/>
            <div>
                <div className="">
                    <div className="about-content s-about-content">
                        <div className="about-title second-atitle pb-40">
                            <h5> راهی جدید برای رشد پیدا کنید</h5>
                            <h2>بهترین راه حل کسب و کار خود را با قالب ما دریافت کنید</h2>
                            <p>طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات
                                آماده
                                نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                                بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به
                                دنبال
                                این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود.

                            </p>
                        </div>
                        <ul className="progress-outer">
                            <li>
                                <div className="progress-box">


                                    <div className="stats shadow">

                                        <div className="stat">
                                            <div className="stat-title">تعداد مشتریان</div>
                                            <div className="stat-value"></div>
                                            <div className="stat-desc">22% بیشتر از ماه قبل</div>
                                        </div>

                                    </div>


                                    <h4>راه حل تجاری</h4>
                                </div>
                            </li>

                            <li>
                                <div className="progress-box mt-50">

                                    <h4>رشد کسب و کار</h4>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
)
}

export default Section3