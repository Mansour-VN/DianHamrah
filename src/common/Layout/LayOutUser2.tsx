import React, {useState} from "react";
import {BiUserCircle} from "react-icons/bi";
import {MdOutlineCancel} from "react-icons/md";
import {links} from "../../../public/Constants/dummy";
import {User} from "../../../public/Constants/dummy";
import Link from "next/link";

const Sidebar = ({children}: { children: React.ReactNode }) => {
    const handleCloseSideBar = () => {
    if (activeMenu ) {
        setActiveMenu(false);
    }
    };
    const [activeMenu,setActiveMenu]=useState(true)
    const activelink =
        "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink =
        "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    return (
        <>
            <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
                {activeMenu && (
                    <>
                        <div className="flex justify-between items-center">
                            <Link
                                href="/profile"
                                onClick={() => setActiveMenu(false)}
                                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                            >
                                <BiUserCircle className="text-3xl"/> <span>User Name</span>
                            </Link>
                            <div className="tooltip tooltip-open tooltip-bottom" data-tip="hello"></div>
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                                }
                                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                            >
                                <MdOutlineCancel/>
                            </button>
                        </div>
                        <div className="mt-10">
                            {links.map((item) => (
                                <div key={item.title}>
                                    <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                                    {item.links.map((link) => (
                                        <Link key={link.name}
                                              href={`/${link.name}`}
                                              onClick={handleCloseSideBar}

                                            className={activeMenu ? activelink : normalLink}
                                        >
                                            {link.icon}
                                            <span className="capitalize">{link.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className=" bg-slate-800 w-5/6 p-4">{children}</div>
        </>
    );
};

export default Sidebar;
