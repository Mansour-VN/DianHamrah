import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiFillCaretDown} from 'react-icons/ai';
import Image from "next/image";
import Socialmedia from "@/components/SocialMedia/Socialmedia";
import Link from "next/link";
import DeskTopMenu from "@/components/Header/DeskTopMenu";
import MobileMenu from "@/components/Header/MobileMenu";

const Header = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div>
            <nav
                className={`w-fulltransition  duration-1000 ease-in-out justify-around md:p-0 bg-slate-800 text-white flex items-center justify-center md:justify-around
                   md:font-bold ${menu ? 'h-screen  ' : 'md:h-24 h-20 '} `}
            >
                <div className={`${menu ? 'hidden' : 'fixed top-8 right-8 bock'}`}>
                    <Image
                        src="/assets/images/Logos/DianHamrah.jpg"
                        alt="لوگو"
                        width={40}
                        height={40}
                        className='rounded animate-bounce '/>

                </div>

                {/*deskTop*/}
                <div className="hidden md:flex">
                    <DeskTopMenu setMenu={setMenu} menu={menu}/>
                </div>

                {/* Mobile responsive*/}
                <div className="flex md:hidden">
                    <MobileMenu setMenu={setMenu} menu={menu}/>
                </div>

                <div className="hidden md:block">
                    <Socialmedia/>
                </div>
            </nav>
        </div>
    )
}


export default Header;