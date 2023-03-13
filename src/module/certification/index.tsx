import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";


const Certification = () =>{

    const [userId, setUserId]= useState<{id:number; name:string}>({
        id:0,
        name:""
    })

    const [validate, setValidation] = useState<string>()

    const router = useRouter()
    const user:any = [
        {
            id: 4120422,
            name: "electron412"
        },
        {
            id:4130422,
            name: "electron413"
        },
        {
            id:4140422,
            name:"electron414"
        }
    ]


    const changeHandler = (e:any) => {
        setUserId({...userId, [e.target.name]: e.target.value})
    }
    const searchUser = ()=>{
       const userInter = user.find((item:any) => item.id==userId.id && item.name==userId.name);

       if(userInter!==undefined){
            router.push("/certification/GetCertification")
       }else{
           setValidation("اطلاعات خودرا  به صورت صحیح وارد کنید")
       }
       setUserId({
           id:0,
           name:""
       })

        // console.log(userId)
    }
    // console.log("userId is :", userId)

    return (
        <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: `url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)`}}>
            <div className="hidden md:flex absolute md:bg-gradient-to-b from-primary-500 to-primary-400 opacity-75 inset-0 z-0 "></div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                            <h1 className="mb-3 font-bold text-5xl">سلام، دیان همراه فردا در کنارشماست برای ارائه بهترین خدمات مالی </h1>
                    </div>
                </div>
                <div className="flex justify-center self-center  z-10 m-10 md:m-0">
                    <div className="p-12 bg-white bg-opacity-70  mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">لطفا برای ورود نام کاربری خود را وارد کنید </h3>
                        </div>
                            <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">نام کاربری</label>
                                <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-orange-400" name="name" value={userId.name}   onChange={(e)=>changeHandler(e)} type="" placeholder="نام کاربری خود را وارد کنید"/>
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                    رمز عبور
                                </label>
                                <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"  type="password" name="id" onChange={(e)=>changeHandler(e)}  placeholder="رمز عبور خود را وارد کنید...."/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {/*<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />*/}
                                        <label  className="ml-2 block text-sm text-gray-800">

                                        </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="text-green-400 hover:text-green-500">

                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" onClick={searchUser} className="w-full flex justify-center btn  text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                       وارد شوید
                                </button>
                            </div>
                                {validate? (<p className="text-orange-400 text-sm text-center">{validate}</p>) : ("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Certification;