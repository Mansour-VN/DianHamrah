import Card2 from "../../components/card2/Card2";
import {services} from "@/../public/Constants/dummy";
import React from "react";
// import * as console from "console";

const Section2 = () => {

    return (
        <div id="servicesDian" className="section2 w-full flex flex-col items-center relative z-0">
            <h1 className="text-4xl font-bold	text-center	 sticky h-72 bg-bg6 w-full text-white pt-6">
                خدمات دیان همراه فردا
            </h1>
            <div className="container relative bottom-32">
                <div className="flex md:flex-row flex-col gap-12 justify-center items-center">
                    {services.map((service) => (
                        <Card2
                            key={service.id}
                            src={service.image}
                            alt={service.title}
                            textTitleCard={service.title}
                            mainTextCard={service.Description}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Section2