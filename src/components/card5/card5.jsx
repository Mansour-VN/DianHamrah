import React from 'react';
import Image from "next/image";

function Card5({backImg, icon, title, content}) {
    return (
        <div className="w-full rounded-lg drop-shadow-xl relative p-8 box-border mt-3" data-theme="light">
            <div >
                <Image
                       src={backImg}
                       alt="img"
                       width={300}
                       style={{
                           position: "absolute",
                           top: 0,
                           left: 0
                       }}
                       className="opacity-20"
                />
            </div>
            <div className="bg-orange-100 mb-4 rounded inline-block">
                <Image
                       src={icon}
                       alt="img"
                       width={100}
                       height={100}

                />
            </div>
            <div className="services-content2 h-40 overflow-hidden">
                <h5 className="hover:text-official text-2xl font-extrabold py-4"><a href="">{title}</a>
                </h5>
                <p className="font-bold text-justify">{content}</p>
            </div>
            <div className="card-actions justify-end ">
                <button className="btn btn-primary">اطلاعات بیشتر</button>
            </div>
        </div>

    );
}

export default Card5;