import Image from 'next/image';
import React from 'react';
import SocialMedia from "@/components/SocialMedia/Socialmedia";
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='w-full bg-gray-700 flex items-center justify-center relative flex-col'>
            <div className='z-0'>
                <Image
                    src={"/assets/images/background/f-bg.png"}
                    alt="bg"
                    width={1900}
                    height={400}
                />
            </div>
            <div id='footerr'
                 className='flex flex-col gap-2 md:flex-row md:container md:gap-4 md:absolute md:h-80 z-10'>

                <div id='About' className='flex flex-col md:w-1/3 md:p-0 p-4'>
                    <div className=" flex flex-row g">
                        <Image
                            width={45}
                            height={45}
                            src="/assets/images/Logos/DianHamrah.jpg"
                            alt="LogoDian"
                            className="rounded-full"
                        />
                        <h3 className='border-b-4 border-dotted border-orange-500/100  w-1/3  text-white p-2 font-extrabold'>دیان‌همراه‌فردا</h3>
                    </div>
                    <p className="text-sky-100 text-justify pl-12 pt-5">
                        شرکت دیان همراه فردا دی ماه سال 1400 تاسیس و در راستای تصویب و اجرای قانون پایانه های فروشگاهی و سامانه مودیان از مهرماه 1401 به عنوان اولین و تنها معتمد مالیاتی نوع دو و سه با همکاری تیم متخصص و حرفه ای در حال فعالیت است.
                    </p>
                </div>

                <div id='Link' className='flex flex-col gap-5 md:w-1/3 md:p-0 p-4'>
                    <h3 className='border-b-4 border-dotted border-orange-500/100 w-1/2  text-white p-2 font-extrabold'>سایت‌های
                        مورد نیاز</h3>
                    <div className="flex flex-col gap-2 text-sky-100 ">
                        <ul className="flex flex-col gap-2">
                            <li className="hover:text-official">
                                <a href="https://dianhamrah.ir/"> آساک قرن</a>
                            </li>
                            <li  className="hover:text-official">
                                <a href="https://mefa.ir/fa-IR/mefa/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C">وزارت اقتصاد و دارایی</a>
                            </li>
                            <li   className="hover:text-official">
                                <a href="https://www.tax.gov.ir/Pages/HomePage">سازمان امورمالیاتی کشور</a>
                            </li>
                            <li  className="hover:text-official">
                                <a href="https://www.evat.ir/">سامانه عملیات الکترونیک مالیات بر ارزش افزوده</a>
                            </li>
                            <li  className="hover:text-official">
                                <a href="https://irsherkat.ssaa.ir/Design/EstablishmentRequest/Index.aspx">سازمان ثبت اسناد و املاک کشور</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div id='location social' className='flex flex-col md:w-1/3 md:p-0 p-4 gap-5'>
                    <h3 className='border-b-4 border-dotted border-orange-500/100 w-1/3  text-white p-2 font-extrabold'>ارتباط
                        باما </h3>

                        <div className="text-sky-100 flex flex-col gap-2">
                            <p>شماره تماس :   96646-021</p>
                            <p> آدرس : تهران، شهرک غرب، بلوارد دادمان کوچه میلاد چهارم پلاک 5</p>
                        </div>
                    <div id="socialMediaFooter" className="">
                        <SocialMedia/>
                    </div>
                    <div className='p-8 flex justify-center items-center'>

                        <Link  target="_blank"  href="https://trustseal.enamad.ir/?id=314366&amp;Code=wZigmxkmHR2UnStBUQ0T">
                            <Image
                                width={145}
                                height={145}
                                src="/assets/images/People/enamad.jpg"
                                alt="LogoDian"
                                className="rounded-full"
                            />


                        </Link>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Footer