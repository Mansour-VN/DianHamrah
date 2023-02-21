import Image from "next/image";
import headerBg from "../../../public/assets/images/background/header-bg.png";
import about_image from "../../../public/assets/images/People/about-img2.png";

const Secton1 = () => {
    return (
        <div id="History" className="block w-full">
            <div
                className="w-full flex items-center justify-center relative flex-col h-[300px]  ">
                <div className="w-full  z-0 bg-cover">
                    <Image placeholder="blur"
                           quality={100}
                           fill
                           sizes="100vw"
                           style={{
                               objectFit: 'cover',
                           }} src={headerBg} alt="image"/>
                </div>
                <div className="z-1 absolute container flex md:flex-row-reverse flex-col items-center justify-between ">
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>صفحه اصلی</a></li>
                            <li className="text-official">درباره ما</li>

                        </ul>
                    </div>
                    <div className="breadcrumb-title  mb-30">
                        <h2 className="text-[60px] md:p-0 px-2 text-black ">درباره ما</h2>
                        <p className="text-gray-400 px-2 md:p-0">با استفاده از الگوهای پیش ساخته ما وب سایت های قدرتمند و
                            چشمگیری ایجاد کنید</p>
                    </div>
                </div>

            </div>

            <div   className="container mx-auto flex flex-col md:flex-row items-center justify-center py-20">
                <div className=" md:w-1/2 w-full">
                    <div className="s-about-img ">
                        <Image
                            src={about_image}
                            alt="img"/>
                    </div>
                </div>
                <div className="md:w-1/2 w-full ">
                    <div className="about-content ">
                        <div className="about-title">
                            <h5 className="text-official p-2 md:p-0"> تاریخچه</h5>
                            <h2 className="text-4xl text-center p-2">بهترین راه حل کسب و کار خود را با ما دریافت کنید</h2>
                        </div>
                        <p className="text-justify p-2 md:p-0">نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست
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