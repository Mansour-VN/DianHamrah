import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import DeskTopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuScroll, setMenuScroll] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {

      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }

  }, [])

  console.log("scrollPosition is:", scrollPosition)
  useEffect(()=>{
    if(scrollPosition>250) {
      setMenuScroll(true)
      console.log("menuScroll is:", menuScroll)
    }else {
      setMenuScroll(false)
    }
  },[scrollPosition])


  return (
    <div className="md:flex md:justify-center">
      <nav  
        className={`${menuScroll? "md:bg-opacity-90 w-full": "md:bg-opacity-60 md:w-3/4 " } duration-1000 ease-in-out  md:p-0 md:rounded-lg  bg-slate-800 text-white flex items-center justify-center md:justify-around
                   md:font-bold ${menu? "h-screen " : "md:h-24 h-20"} `}
      >
        <div className={`${menu ? "hidden" : "flex flex-row items-center  "}`}>
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

        {/*deskTop*/}
        <div className="hidden md:flex">
          <DeskTopMenu setMenu={setMenu} menu={menu} />
        </div>

        {/* Mobile responsive*/}
        <div className="flex md:hidden">
          <MobileMenu setMenu={setMenu} menu={menu} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
