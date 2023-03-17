import { AdminButton } from "@/common/components/Button";
import Link from "next/link";
import { AdminPanel } from "public/Constants/dummy";
import  axios from "axios"
import { useEffect } from "react";

const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
  const { Navbar } = AdminPanel;
  const getProfileInformation = async ()=>{
    const token = localStorage.getItem("token")
    const res = await axios.get("http://188.121.102.86:8000/api/user/" , {
      headers:{
        "Authorization" : "Bearer " + token
      }
    }) 
    return res
  }

  useEffect(()=>{
    getProfileInformation().then((res)=>console.log(res.data))
  },[])
  return (
    <div className="flex flex-col max-h-screen h-screen">
      <div
        id="HeaderAdmin"
        className="px-4 h-10 flex items-center  bg-slate-800 border-b-2"
      >
        <p className="p-4 text-white">نام و نشان شما: </p>
      </div>
      <div className="flex flex-row gap-2 max-w-screen">
      <div
          id="SidebarAdmin"
          className="bg-slate-800 w-1/6 flex  flex-col justify-around items-center px-2">
          <ul className="flex gap-4 flex-col justify-center items-center w-full">
            {Navbar.map((item, index) => {
              return (
                <li className="w-full" key={index}>
                  <Link href={`/${item.route}`}>
                    <AdminButton text={item.name} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="text-white hover:text-red-400">
            <Link href="/" onClick={(e)=>localStorage.removeItem("token")}>خروج</Link>
          </p>
      </div>
      <div className=" bg-green-100 w-5/6">
            {children}
      </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
