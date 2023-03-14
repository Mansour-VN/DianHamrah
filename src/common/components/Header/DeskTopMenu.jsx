import {AiFillCaretDown, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Link from "next/link";
import React from "react";

const DeskTopMenu = ({setMenu, menu}) => {


    return(
        <div className="md:flex">
            <button
                onClick={()=>setMenu(!menu)}
                className={`text-4xl md:hidden ${menu ? "fixed top-4 left-10" : "block fixed top-4 left-10"}`}>
                {menu ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </button>

            <ul className={`md:flex flex-col md:flex-row items-center gap-6 ${menu ? `flex` : `hidden`}`}>


                <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                    <Link href="/">صفحه اصلی</Link>
                </li>
                <li className="hover:bg-slate-600 p-2 rounded-lg" >
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div className="flex flex-row item-center justify-center gap-1" >
                            <label tabIndex={0} className="hover:cursor-pointer"> درباره ما </label>
                            <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content menu p-2 mt-2 shadow bg-slate-800 border-t-2 rounded-box w-52 ">
                            <li className="hover:bg-slate-600" ><Link  href="/AboutUs/#History" scroll={false}>تاریخچه</Link></li>
                            <li className="hover:bg-slate-600"><Link href="/AboutUs/#Contact" scroll={false}> اطلاعات تماس </Link></li>
                            <li className="hover:bg-slate-600"><Link href="/AboutUs/#Branches" scroll={false}> شعب و دفاتر </Link></li>
                        </ul>
                    </div>
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