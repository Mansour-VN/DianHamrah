import { AdminButton } from "@/common/components/Button";
import Link from "next/link";
import { AdminPanel } from "public/Constants/dummy";

const LayOutAdmin = ({children}:{children:React.ReactNode}) => {

  const { Navbar } = AdminPanel;

  return (
    <div className="flex flex-col h-screen">
      <div
        id="HeaderAdmin"
        className="pr-4 h-12 flex flex-row items-center  bg-gradient-to-l from-slate-800 border-b-2"
      >
        <p className="p-4 text-white">نام و نشان کارمند: </p>
        <p className="p-4 text-orange-300">مرتضی ابوالفتحی</p>
      </div>
      <div className="flex flex-row max-w-screen h-full">
        <div
          id="SidebarAdmin"
          className="bg-cyan-700 z-0 h-full w-1/6 flex  flex-col justify-around items-center"
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

          <p className="text-white hover:text-red-400">
            <Link href="/" onClick={(e) => localStorage.removeItem("token")}>
              خروج
            </Link>
          </p>
        </div>
        <div className=" bg-slate-800 w-5/6 p-4">{children}</div>
      </div>
    </div>
  )
}

export default LayOutAdmin