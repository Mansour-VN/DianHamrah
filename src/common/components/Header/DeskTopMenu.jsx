import {AiFillCaretDown, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Link from "next/link";
import React from "react";

const DeskTopMenu = () => {


    return(

        <div className="md:flex">
            <ul className="md:flex flex-col md:flex-row items-center gap-6">
                <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                    <Link href="/">صفحه اصلی</Link>
                </li>
                <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                    <Link href="/AboutUs">درباره ما</Link>
                </li>

                 <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg"><Link href="http://club.dianhamrah.ir/branch/1196" scroll={false}> باشگاه مشتریان </Link></li>

                <li>

                    <Link href="/Legislation" className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                        کتابخانه دیان همراه
                    </Link>

                </li>
                <li className="hover:bg-slate-600 p-2 rounded-lg hidden">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div className="flex flex-row item-center justify-center gap-1">
                            <label tabIndex={0} className="hover:cursor-pointer"> دوره های آموزشی </label>
                            <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content menu mt-2 border-t-2 p-2 shadow bg-slate-800 rounded-box w-52">
                            <li className="hover:bg-slate-600"><a> آموزش حضوری </a></li>
                            <li className="hover:bg-slate-600"><a> آموزش آنلاین </a></li>
                            <li className="hover:bg-slate-600"><a> آموزش های سازمانی </a></li>
                            <li className="hover:bg-slate-600"><a> سمینارهای استانی </a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <Link href="/#Contact" scroll={false} className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg" >
                        تماس با ما
                    </Link>
                </li>

                <li>
                    <Link href="/" scroll={false} className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg hidden">
                          دریافت گواهی آموزشی
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default  DeskTopMenu