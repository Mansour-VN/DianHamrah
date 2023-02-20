import React from 'react';
import Image from "next/image";

function Card5({backImg, icon, title, content}) {
    return (
        <div className="sm:w-full rounded-lg drop-shadow-xl relative p-8 box-border mt-3" data-theme="light">
            <div >
                <Image
                       src={backImg}
                       alt="img"
                       style={{
                           position: "absolute",
                           top: 0,
                           left: 0,
                       }}
                />
            </div>
            <div className="bg-orange-100 mb-4 p-5 rounded inline-block">
                <Image
                       src={icon}
                       alt="img"

                />
            </div>
            <div className="services-content2">
                <h5 className="hover:text-official text-2xl font-extrabold"><a href="">{title}</a>
                </h5>
                <p>{content}</p>
            </div>
        </div>

    );
}

export default Card5;