import React from "react";
import { TypeAnimation } from 'react-type-animation';


const section1 = () => {

    return (
        <div id="demo" className="w-full z-0 flex items-center justify-center relative flex-col border-b-8 border-bg6">
            <video
                src="/assets/video/tizerDian.mp4"
                loop
                muted
                autoPlay
                className="w-full opacity-70"
            />

            <div className="absolute bg-gray-100 opacity-70 rounded-md md:p-4">
                <TypeAnimation
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        'شرکت دیان‌ همراه‌ فردا',
                        1000,
                        'شرکت دیان‌ همراه‌ فردا اولین و تنها‌ترین معتمد نوع دو و سه سازمان‌ امور مالیاتی کشور',
                        1000,
                        'شرکت دیان‌ همرا‌ه فردا شما را آموزش می‌دهد که خودتان صورت حساب ارسال کنید',
                        1000,
                        'شرکت دیان همراه فردا با پشتیبانی تیم فنی در کنار شما است',
                        1000,
                    ]}
                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                    // style={{ fontSize: '2em' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    className="text-xl md:text-3xl font-semibold"
                />
            </div>
            
        </div>
    )
}

export default section1
