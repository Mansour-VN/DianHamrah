import Image from "next/image";
import SocialMedial from "@/components/SocialMedia/Socialmedia";
import {useState} from "react";
const Avatar = ({image, name, title}) => {

    const [display,setDisplay]=useState(false)


    return (

        <div className="py-20 relative flex items-center justify-center " onMouseOver={()=>setDisplay(true)} onMouseOut={()=>setDisplay(false)}>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="rounded-full w-[180px] h-[180px] border-4">
                    <Image src={image} alt={name}
                           width={180}
                           height={180}/>
                </div>
                <a className="text-black hover:cursor-pointer">{name}</a>
                <p className="text-official">{title}</p>
            </div>
            <div className={`absolute pt-20  ${display ? "block" : "hidden"}`} >
                <SocialMedial/>
            </div>

        </div>
    )
}

export default Avatar