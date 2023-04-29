import {AdminButton} from "@/common/components/Button";
import Link from "next/link";
import {UserPanel} from "public/Constants/dummy";
import axios from "axios";
import {useEffect, useState} from "react";
import {Cookies, useCookies} from "react-cookie";
import useWindowDimensions  from '@/common/hooks/useWindowDimensions';
import {SlMenu} from 'react-icons/sl'
const LayoutAdmin = ({children}: { children: React.ReactNode }) => {


    const [token, setToken, removeToken] = useCookies(['token']);

    const {Navbar} = UserPanel;
    const getProfileInformation = async () => {

        const cookie = new Cookies()
        const token = cookie.get("token")
        const res = await axios.get("http://188.121.102.86:8081/api/user/", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        return res
    }
    const [userName, setUserName] = useState({
        name: "",
        lastName: ""
    })

    type WindowDimentions = {
        width: number | undefined;
        height: number | undefined;
    };



    useEffect(() => {
        getProfileInformation().then((res) =>
            setUserName({
                name: res.data.firstName,
                lastName: res.data.lastName

            })
        )
    }, []);


    const exitAdmin = () => {
        console.log("ckick")
        removeToken("token")
        window.location.reload()
    }

    const { width, height } = useWindowDimensions();
    const [activeMenu, setActiveMenu]=useState<boolean>()
    useEffect(()=>{
        if(width>=960){
            setActiveMenu(true)
        }else{
            setActiveMenu(false)
        }
    },[width])

    return (
        <div className="flex flex-col h-screen">
            <div
                id="HeaderAdmin"
                className="pr-4 h-12 flex flex-row items-center  bg-gradient-to-l from-slate-800 border-b-2"
            >
                <p className="p-4 text-white">نام و نشان شما: </p>
                <p className="p-4 text-orange-300">{userName.name + " " + userName.lastName}</p>
            </div>
            <div className="flex flex-row max-w-screen h-full">
                <div
                    id="SidebarAdmin"
                    className={`bg-slate-900 z-0 h-full  ${activeMenu?'w-2/6 ':''}  flex  flex-col justify-between items-center`}
                >
                    <div className="w-full flex justify-end ">
                    <SlMenu className='text-white m-6 hover:cursor-pointer' onClick={()=>setActiveMenu(!activeMenu)}/>
                    </div>
                    <ul className="flex gap-4 flex-col justify-center items-center w-full ">
                        {Navbar.map((item, index) => {
                            return (
                                <li className={activeMenu?'w-full ':'hidden'} key={index}>
                                    <Link href={`/${item.route}`}  onClick={()=>setActiveMenu(false)}>
                                        <AdminButton text={item.name} icon={item.icon} type={"btnNavbar"}/>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className='pb-6'>
                        <p className={`text-white hover:text-slate-400 rounded-sm border-2 p-1 ${activeMenu?'w-full ':'hidden'}`}>
                            <Link href="/">
                                بازگشت به صفحه اصلی
                            </Link>
                        </p>
                        <p className={`text - white hover:text-red-400 mt-4 text-sm text-center ${activeMenu?'w-full ':'hidden'}`}>
                            <Link href="" onClick={exitAdmin}>
                                خروج از حساب کاربری
                            </Link>
                        </p>
                    </div>
                </div>
                <div className={`bg-slate-800   w-full p-4`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;
