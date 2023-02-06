import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import Image from "next/image";

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <nav
                className={`w-full px-10 py-5 justify-center bg-slate-800 text-white flex gap-5 items-center md:justify-around
                    md:h-24 md:font-bold ${menu ? 'h-screen ' : 'h-20 '} `}
            >
                <Image
                    src="/assets/images/Logos/DianHamrah.jpg"
                    alt="لوگو"
                    width={500}
                    height={500}
                    className='w-14 fixed top-5 right-8 rounded-full'/>

                <button onClick={() => setMenu(!menu)} className="fixed top-8 left-10 md:hidden ">
                    <AiOutlineMenu/>
                </button>

                <ul className={`md:flex flex-col md:flex-row items-center gap-6 ${menu ? `flex` : `hidden`}`}>
                    <li><a href="#">خانه</a></li>
                    <li><a href="#">درباره دیان</a></li>
                    <li><a href="#">ارتباط با دیان</a></li>
                    <li><a href="#">آموزشهای دیان</a></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;