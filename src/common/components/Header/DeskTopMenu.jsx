import {AiFillCaretDown} from "react-icons/ai";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Library} from "public/Constants/Library"

const DeskTopMenu = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuScroll, setMenuScroll] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const position = window.scrollY;
                setScrollPosition(position);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if (scrollPosition > 170) {
            setMenuScroll(true);
            // console.log("menuScroll is:", menuScroll)
        } else {
            setMenuScroll(false);
        }
    }, [scrollPosition]);

    return (
        <div
            className={`flex justify-center items-center w-full flex-col  duration-1000 ease-in-out ${
                menuScroll ? "fixed top-0" : "absolute top-6 "
            } `}
        >
            <nav
                className={`${
                    menuScroll ? "bg-opacity-100 w-screen" : "bg-opacity-60"
                }  p-0 rounded-lg h-20  bg-slate-800 text-white flex items-center justify-around first-letter font-bold"} `}
            >
                <div className="flex flex-row items-center">
                    <div>
                        <Image
                            src="/assets/images/Logos/DianHamrah.jpg"
                            alt="لوگو"
                            width={40}
                            height={40}
                            className="rounded m-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-xl">دیان همراه فردا</h5>
                        <span className="badge badge-sm">
              تنها معتمد مالیاتی نوع دو و سه کشور
            </span>
                    </div>
                </div>

                <div className="md:flex">
                    <ul className="md:flex flex-col md:flex-row items-center gap-6">
                        <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                            <Link href="/">صفحه اصلی</Link>
                        </li>
                      

                        <li className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg">
                            <Link href="http://club.dianhamrah.ir/branch/1196" scroll={false}>
                                {" "}
                                باشگاه مشتریان{" "}
                            </Link>
                        </li>

                        <li className="hover:bg-slate-600 p-2 rounded-lg">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="flex flex-row item-center justify-center gap-1">
                                    <label tabIndex={0} className="hover:cursor-pointer">
                                      قوانین و کتابخانه 
                                    </label>
                                    <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 mt-2 shadow bg-slate-800 bg-opacity-50 border-t-2 rounded-box w-[350px] "
                                >

                                    {Library.map((item) => {
                                        return (
                                            <li key={item.id} className="hover:bg-slate-600">
                                                <Link href={item.NavAddress} scroll={false}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>

                        {/*<li>*/}
                        {/*  <Link*/}
                        {/*    href="/Library"*/}
                        {/*    className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg"*/}
                        {/*  >*/}
                        {/*    کتابخانه دیان همراه*/}
                        {/*  </Link>*/}
                        {/*</li>*/}
                        <li className="hover:bg-slate-600 p-2 rounded-lg hidden">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="flex flex-row item-center justify-center gap-1">
                                    <label tabIndex={0} className="hover:cursor-pointer">
                                        {" "}
                                        دوره های آموزشی{" "}
                                    </label>
                                    <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu mt-2 border-t-2 p-2 shadow bg-slate-800 rounded-box w-52"
                                >
                                    <li className="hover:bg-slate-600">
                                        <a> آموزش حضوری </a>
                                    </li>
                                    <li className="hover:bg-slate-600">
                                        <a> آموزش آنلاین </a>
                                    </li>
                                    <li className="hover:bg-slate-600">
                                        <a> آموزش های سازمانی </a>
                                    </li>
                                    <li className="hover:bg-slate-600">
                                        <a> سمینارهای استانی </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/#Contact"
                                scroll={false}
                                className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg"
                            >
                                تماس با ما
                            </Link>
                        </li>

                        <li className="hover:bg-slate-600 p-2 rounded-lg">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div className="flex flex-row item-center justify-center gap-1">
                                    <label tabIndex={0} className="hover:cursor-pointer">
                                        {" "}
                                        درباره ما{" "}
                                    </label>
                                    <AiFillCaretDown className="mt-1.5 md:block hidden"/>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 mt-2 shadow bg-slate-800 bg-opacity-50 border-t-2 rounded-box w-52 "
                                >
                                    <li className="hover:bg-slate-600">
                                        <Link href="/AboutUs/#History" scroll={false}>
                                            تاریخچه
                                        </Link>
                                    </li>
                                    <li className="hover:bg-slate-600">
                                        <Link href="/AboutUs/#Contact" scroll={false}>
                                            {" "}
                                            اطلاعات تماس{" "}
                                        </Link>
                                    </li>
                                    <li className="hover:bg-slate-600">
                                        <Link href="/AboutUs/#Branches" scroll={false}>
                                            {" "}
                                            شعب و دفاتر{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/Login"
                                scroll={false}
                                className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg bg-slate-900"
                            >
                                 ورود
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                scroll={false}
                                className="hover:cursor-pointer hover:bg-slate-600 p-2 rounded-lg hidden"
                            >
                                دریافت گواهی آموزشی
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default DeskTopMenu;
