import { AdminButton } from "@/common/components/Button";
import Link from "next/link";
import { UserPanel } from "public/Constants/dummy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";


const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const[token, setToken, removeToken] = useCookies(['token']);

  const { Navbar } = UserPanel;
  // const getProfileInformation = async ()=>{
  //   const token = localStorage.getItem("token")
  //   const res = await axios.get("http://188.121.102.86:8000/api/user/" , {
  //     headers:{
  //       "Authorization" : "Bearer " + token
  //     }
  //   })
  //   return res
  // }

  // const [userName, setUserName] = useState({
  //   name:"",
  //   lastName:""
  // })

  // useEffect(()=>{
  //   getProfileInformation().then((res)=>
  //   setUserName({
  //     name:res.data.firstName,
  //     lastName:res.data.lastName
  //   })
  //   )
  // },[]);

  return (
    <div className="flex flex-col h-screen">
      <div
        id="HeaderAdmin"
        className="pr-4 h-12 flex flex-row items-center  bg-gradient-to-l from-slate-800 border-b-2"
      >
        <p className="p-4 text-white">نام و نشان شما: </p>
        <p className="p-4 text-orange-300">نام و نشانی که از کاربر میگیری</p>
      </div>
      <div className="flex flex-row max-w-screen h-full">
        <div
          id="SidebarAdmin"
          className="bg-slate-900 z-0 h-full w-1/6 flex  flex-col justify-around items-center"
        >
          <ul className="flex gap-4 flex-col justify-center items-center w-full ">
            {Navbar.map((item, index) => {
              return (
                <li className="w-full" key={index}>
                  <Link href={`/${item.route}`}>
                    <AdminButton text={item.name} icon={item.icon} type={"btnNavbar"}/>
                  </Link>
                </li>
              );
            })}
          </ul>
            <div>
              <p className="text-white hover:text-slate-400 rounded-sm border-2 p-1">
                <Link href="/">
                    بازگشت به صفحه اصلی 
                </Link>
              </p>
              <p className="text-white hover:text-red-400 mt-4 text-sm text-center">
                <Link href="/" onClick={(e) =>removeToken("token",{path:'/'})}>
                  خروج از حساب کاربری
                </Link>
              </p>
            </div>
        </div>
        <div className=" bg-slate-800 w-5/6 p-4">{children}</div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
