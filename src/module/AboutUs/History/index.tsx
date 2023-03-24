import Image from "next/image";
import headerBg from "public/assets/images/background/header-bg.png";
import about_image from "public/assets/images/People/about-img2.png";

const History = () => {
    return (
        <div id="History" className="block w-full">
            <div
                className="w-full flex items-center justify-center relative flex-col h-screen  ">
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
                            <h2 className="text-4xl text-center p-2"> دیان همراه‌فردا</h2>
                        </div>
                        <p className="text-justify p-2 md:p-0"> 
                        شرکت دیان همراه فردا دی ماه سال 1400 تاسیس و در راستای تصویب و اجرای قانون پایانه های فروشگاهی و سامانه مودیان از مهرماه 1401 به عنوان اولین و تنها معتمد مالیاتی نوع دو و سه با همکاری تیم متخصص و حرفه ای در حال فعالیت است.       
                            </p>
                        <ul className="flex flex-row  flex-wrap mt-8">
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                   آموزش قانون پایانه فروشگاهی و سامانه مودیان
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    آموزش نحوه صدور و ارسال صورت حساب الکترونیکی به سامانه مودیان
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                            برگزاری سمینار
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    پشتیبانی
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    مشاوره مالیاتی 
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start w-full md:w-1/2">
                                <div
                                    className="rounded-full border-2 w-10 h-10 flex items-center justify-center text-official">✔
                                </div>
                                <div className="text pr-2">
                                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History