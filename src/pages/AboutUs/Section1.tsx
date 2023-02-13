import Image from "next/image";
import headerBg from "../../../public/assets/images/background/header-bg.png";
import about_image from "../../../public/assets/images/People/about-img2.png";

const Secton1 = () => {
    return (
        <div className="block">
            <div
                className="w-full flex items-center justify-center relative flex-col md:h-[700px] h-[1300px]  ">
                <div className="w-full z-0 	bg-cover">
                    <Image placeholder="blur"
                           quality={100}
                           fill
                           sizes="100vw"
                           style={{
                               objectFit: 'cover',
                           }} src={headerBg} alt="image"/>
                </div>
                <div className="z-1 absolute container flex flex-row-reverse items-center justify-between ">
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>صفحه اصلی</a></li>
                            <li className="text-official">درباره ما</li>

                        </ul>
                    </div>
                    <div className="breadcrumb-title  mb-30">
                        <h2 className="text-[60px] text-black ">درباره ما</h2>
                        <p className="text-gray-400 ">با استفاده از الگوهای پیش ساخته ما وب سایت های قدرتمند و
                            چشمگیری ایجاد کنید</p>
                    </div>
                </div>

            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-20">
                <div className=" md:w-1/2 w-full">
                    <div className="s-about-img ">
                        <Image
                            src={about_image}
                            alt="img"/>
                    </div>
                </div>
                <div className="md:w-1/2 w-full ">
                    <div className="about-content ">
                        <div className="about-title pb-20">
                            <h5 className="text-official p-5 md:p-0"> درباره ما</h5>
                            <h2 className="text-[45px]">بهترین راه حل کسب و کار خود را با ما دریافت کنید</h2>
                        </div>
                        <p>نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست
                            کاران
                            بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می&zwnj;برند که متن لورم
                            را
                            از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب
                            اوقات
                            ما با وبسایتهایی مواجه می&zwnj;شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم
                            هنوز
                            وجود دارد.</p>
                        <ul className="flex flex-row flex-wrap">
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    تحقیقات کاربر
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    گزینه ها را سفارشی کنید
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    سرویس حسابرسی و ارزیابی
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    بازارهای مصرف کننده مالی
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    توسعه تجره کاربری
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    24/7 پشتیبانی آنلاین
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Secton1