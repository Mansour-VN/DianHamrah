import Image from 'next/image';
import React from 'react';

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
            <div id='footerr' className='flex flex-col md:flex-row  container justify-around md:absolute md:h-80 z-10'>

                <div id='About' className='flex flex-col '>
                    <h3 className='border-b-4 font-bold text-white p-4'>دیان‌همراه‌فردا</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>

                <div id='Link' className='flex flex-col'>
                    <h3 className='border-b-4 font-bold text-white p-4'>سایت‌های مربوطه</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                    <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                    <p>لورم ایپسوم متن ساختگی با تولید صنعت وگرافیک است</p>
                </div>

                <div id='location social' className='flex flex-col'>
                    <h3 className='border-b-4 font-bold text-white p-4'>دسترسی ما</h3>
                    <div className=''>
                        Location
                    </div>
                    <div>
                        social Media
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer