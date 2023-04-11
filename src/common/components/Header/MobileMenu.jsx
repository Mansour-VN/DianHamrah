import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import React,{useState} from "react";
import Image from "next/image";
import {Library} from "../../../../public/Constants/Library";

const DeskTopMenu = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>

          <nav  
        className={`w-screen bg-slate-800 text-white flex items-center justify-around
        duration-1000 ease-in-out ${menu? "h-screen fixed " : "h-20"} `}
      >
    <div className={`${menu ? "hidden" : "flex flex-row items-center"}`}>
          <div className={`${menu ? "hidden" : ""}`}>
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
      <button
        onClick={() => setMenu(!menu)}
        className={`text-4xl ${
          menu ? "fixed top-4 left-10" : "block left-10"
        }`}
      >
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <ul
        className={`flex-col md:flex-row items-center gap-6 ${
          menu ? `flex` : `hidden`
        }`}
      >
        <li
          onClick={() => setMenu(!menu)}
          className="border-2 border-slate-700 w-full text-center p-2 rounded-lg"
        >
          <Link href="/">صفحه اصلی</Link>
        </li>

        <li className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
          <div className="dropdown dropdown-bottom dropdown-end hover:bg-slate-600 p-2 rounded-lg">
            <div className="flex flex-row item-center justify-center gap-1">
              <label tabIndex={0}> درباره ما </label>
              <AiFillCaretDown className="mt-1.5" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-slate-600 rounded-box w-52 "
            >
              <li>
                <Link
                  href="/AboutUs/#History"
                  scroll={false}
                  onClick={() => setMenu(!menu)}
                >
                  تاریخچه
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs/#Contact"
                  scroll={false}
                  onClick={() => setMenu(!menu)}
                >
                  {" "}
                  اطلاعات تماس{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutUs/#Branches"
                  scroll={false}
                  onClick={() => setMenu(!menu)}
                >
                  {" "}
                  شعب و دفاتر{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="border-2 border-slate-700 w-full text-center p-2 rounded-lg">
          <div className="dropdown dropdown-bottom dropdown-end hover:bg-slate-600 p-2 rounded-lg">
            <div className="flex flex-row item-center justify-center gap-1">
              <label tabIndex={0}> کتابخانه دیان همراه </label>
              <AiFillCaretDown className="mt-1.5" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-slate-600 rounded-box w-[300px] "
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

        <li className="border-2 w-full border-slate-700 text-center p-2 rounded-lg">
          <Link
            href="http://club.dianhamrah.ir/branch/1196"
            scroll={false}
            onClick={() => setMenu(!menu)}
          >
            {" "}
            باشگاه مشتریان{" "}
          </Link>
        </li>

        <li
          onClick={() => setMenu(!menu)}
          className="border-2 border-slate-700 w-full text-center p-2 rounded-lg"
        >
          <Link href="/Library">کتابخانه دیان همراه</Link>
        </li>
        <li className="hidden border-2  border-slate-700 w-full text-center p-2 rounded-lg">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div className="flex flex-row item-center justify-center gap-1">
              <label tabIndex={0} className="bg-slate-800">
                {" "}
                دوره های آموزشی{" "}
              </label>
              <AiFillCaretDown className="mt-1.5 md:block hidden" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-slate-800 rounded-box w-52"
            >
              <li onClick={() => setMenu(!menu)}>
                <a> آموزش حضوری </a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a> آموزش آنلاین </a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a> آموزش های سازمانی </a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a> سمینارهای استانی </a>
              </li>
            </ul>
          </div>
        </li>

        <li
          onClick={() => setMenu(!menu)}
          className="border-2 border-slate-700 w-full text-center p-2 rounded-lg"
        >
          <Link href="tel:+982196646" scroll={false}>
            تماس با ما
          </Link>
        </li>
        <li
          onClick={() => setMenu(!menu)}
          className="border-2 border-slate-700 w-full text-center p-2 rounded-lg"
        >
          <Link href="/Login" scroll={false}>
            ثبت‌نام / ورود
          </Link>
        </li>

        <li className="border-2 border-slate-700 w-full text-center p-2 rounded-lg hidden">
          <Link href="/" scroll={false}>
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
