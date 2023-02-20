import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiFillCaretDown} from 'react-icons/ai';
import Image from "next/image";
import Socialmedia from "@/components/SocialMedia/Socialmedia";
import Link from "next/link";

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

                <div>
                    <button onClick={() => setMenu(!menu)}
                            className={`text-4xl md:hidden ${menu ? "fixed top-4 left-10" : "block fixed top-4 left-10"}`}>
                        {menu ? <AiOutlineClose/> : <AiOutlineMenu/>}
                    </button>
                    <ul className={`md:flex flex-col md:flex-row items-center gap-6 ${menu ? `flex` : `hidden`}`}>

                        <li onClick={() => setMenu(!menu)}>
                            <Link href="/">صفحه اصلی</Link>
                        </li>
                        <li>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="flex flex-row item-center justify-center gap-1">
                                    <label tabIndex={0} className="bg-slate-800"> درباره ما </label>
                                    <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                                </div>
                                <ul tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-slate-800 rounded-box w-52 ">
                                    <li ><Link  href="/AboutUs/#History" scroll={false}  onClick={() => setMenu(!menu)}>تاریخچه</Link></li>
                                    <li><Link href="/AboutUs/#Contact" scroll={false}  onClick={() => setMenu(!menu)}> اطلاعات تماس </Link></li>
                                    <li><Link href="/AboutUs/#Branches" scroll={false}  onClick={() => setMenu(!menu)}> شعب و نمایندگی </Link></li>
                                    <li><Link href="/AboutUs/#CustomerClub" scroll={false}  onClick={() => setMenu(!menu)}> باشگاه مشتریان </Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href="/AboutUs"  onClick={() => setMenu(!menu)}>
                                ارتباط با ما
                            </Link>
                        </li>

                        <li>
                            <Link href="/ghavanin"  onClick={() => setMenu(!menu)}>
                                کتابخانه دیان همراه
                            </Link>

                        </li>
                        <li>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="flex flex-row item-center justify-center gap-1">
                                    <label tabIndex={0} className="bg-slate-800"> دوره های آموزشی </label>
                                    <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                                </div>
                                <ul tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-slate-800 rounded-box w-52">
                                    <li><a onClick={() => setMenu(!menu)}> آموزش حضوری </a></li>
                                    <li><a onClick={() => setMenu(!menu)}> آموزش آنلاین </a></li>
                                    <li><a onClick={() => setMenu(!menu)}> آموزش های سازمانی </a></li>
                                    <li><a onClick={() => setMenu(!menu)}> سمینارهای استانی </a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Socialmedia/>
                </div>
            </nav>
        </div>
    )
}


export default Header;