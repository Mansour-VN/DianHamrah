import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from 'next/link';

function ServicesCard({ backImg, icon, title, content, path }) {
    const router = useRouter()
    return (
        <div className="w-full rounded-lg drop-shadow-xl relative p-8 box-border mt-3" data-theme="light">
            <div >
                <Image
                    src={backImg}
                    alt={title}
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
                    alt={title}
                    width={100}
                    height={100}

                />
            </div>
            <div className="services-content2 h-40 ">
                <h5 className="hover:text-official text-2xl font-extrabold py-4 text-right"><a href="">{title}</a>
                </h5>
                <p className="font-bold text-justify">{content.slice(0,150)} . . .</p>
            </div>
            <div className="card-actions justify-end ">
                <Link href={`/${path}`}>
                    <button className="btn btn-primary">اطلاعات بیشتر</button>
                </Link>
            </div>
        </div>

    );
}

export default ServicesCard;