import React from "react";
import { TypeAnimation } from 'react-type-animation';


const DemoVideo = () => {

    return (
        <div id="demo" className="w-full z-0 flex justify-center relative flex-col border-b-8 border-bg6">
            <video
                src="/assets/video/tizerDian.mp4"
                loop
                muted
                autoPlay
            />
        </div>
    )
}

export default DemoVideo;
