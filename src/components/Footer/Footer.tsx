import Image from 'next/image';
import React from 'react';
import SocialMedia from "@/components/SocialMedia/Socialmedia";


const Footer = () => {
    return (
        <div className='w-full bg-gray-700 flex items-center justify-center relative flex-col'>
            <div className='z-0'>
                <Image
                    src={"/assets/images/background/f-bg.png"}
                    alt=""
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                        صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                        زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                    </p>
                </div>

                <div id='Link' className='flex flex-col gap-5 md:w-1/3 md:p-0 p-4'>
                    <h3 className='border-b-4 border-dotted border-orange-500/100 w-1/3  text-white p-2 font-extrabold'>سایت‌های
                        مربوطه</h3>
                    <div className="flex flex-col gap-2 text-sky-100 ">
                        <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                        <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                        <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                        <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                    </div>
                </div>

                <div id='location social' className='flex flex-col md:w-1/3 md:p-0 p-4'>
                    <h3 className='border-b-4 border-dotted border-orange-500/100 w-1/3  text-white p-2 font-extrabold'>ارتباط
                        باما </h3>
                    <div className='p-8 flex justify-center items-center'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                            width="250" height="200" className="border-2 border-sky-500"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div id="socialMediaFooter" className="">
                        <SocialMedia/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer