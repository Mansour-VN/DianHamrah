import Image from "next/image";
import SocialMedial from "@/components/SocialMedia/Socialmedia";
import {useState} from "react";

const Avatar = ({image, name, title}) => {

    return (

        <div className="flex py-20 flex-col gap-4 items-center justify-center">
            <div className="rounded-full w-[180px] h-[180px] border-4">
                <Image src={image} alt={name}
                       width={180}
                       height={180}/>
            </div>
            <a className="text-black hover:cursor-pointer">{name}</a>
            <p className="text-official">{title}</p>
        </div>

    )
}

export default Avatar