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


                <li onClick={()=>setMenu(!menu)} className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
                    <Link href="/">صفحه اصلی</Link>
                </li>

                <li onClick={()=>setMenu(!menu)} className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
                    <Link href="/AboutUs">درباره ما</Link>
                </li>

                <li className="border-2 w-full border-slate-700 text-center p-2 rounded-lg">
                    <Link href="http://club.dianhamrah.ir/branch/1196" scroll={false} onClick={()=>setMenu(!menu)}> باشگاه مشتریان </Link>
                </li>

                <li onClick={()=>setMenu(!menu)} className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
                    <Link href="/Legislation" >
                        کتابخانه دیان همراه
                    </Link>

                </li>
                <li className="hidden border-2  border-slate-700 w-full text-center p-2 rounded-lg" >
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div className="flex flex-row item-center justify-center gap-1">
                            <label tabIndex={0} className="bg-slate-800"> دوره های آموزشی </label>
                            <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-slate-800 rounded-box w-52">
                            <li onClick={()=>setMenu(!menu)}><a> آموزش حضوری </a></li>
                            <li onClick={()=>setMenu(!menu)}><a> آموزش آنلاین </a></li>
                            <li onClick={()=>setMenu(!menu)}><a> آموزش های سازمانی </a></li>
                            <li onClick={()=>setMenu(!menu)}><a> سمینارهای استانی </a></li>
                        </ul>
                    </div>
                </li>

                <li onClick={()=>setMenu(!menu)} className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
                    <Link href="tel:+982196646" scroll={false} >
                          تماس با ما
                    </Link>
                </li>

                <li className="border-2 border-slate-700 w-full text-center p-2 rounded-lg hidden">
                    <Link href="/" scroll={false} >
                          دریافت گواهی آموزشی
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default  DeskTopMenu