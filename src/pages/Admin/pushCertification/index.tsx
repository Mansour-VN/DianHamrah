import LayOutAdmin from "@/common/Layout/LayOutAdmin";
import React, { useState, useEffect } from "react";
import { FcOpenedFolder, FcDeleteDatabase} from "react-icons/fc";
import axios from "axios";
import { Cookies } from "react-cookie";

type UserData = {
  firstName:string;
  lastName:string;
  id:number;
  password:string;
  phoneNumber:string
}

const PushCertification = () => {
  const [user , setUser] =useState<UserData>({
    id:0,
    firstName:"",
    lastName:"",
    password:"",
    phoneNumber:""
  })
  const cookie = new Cookies();
  const adminToken = cookie.get("adminToken");

  const getUser = async () => {
    const result = await axios.get(
      `http://188.121.102.86:8081/api/user/list/`,
      {
        headers: {
          Authorization: "Bearer " + adminToken,
        },
      }
    );
    return result;
  };

  const sendFile = (e:any)=>{
    e.preventDefault()
    const file =  e.target.file.files[0]

    const formData = new FormData()

    formData.append("file" , file)
    const adminToken = cookie.get("adminToken");
    axios.post(`http://188.121.102.86:8081/api/file/${user.id}`,formData, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    }).then((res)=>{console.log(res)})
    

  }

  const deleteFile = (e:any)=>{
    e.preventDefault()
    axios.delete(`http://188.121.102.86:8081/api/file/${user.id}`,{ 
        headers: {
          Authorization: "Bearer " + adminToken,
        },
    }).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    getUser().then((res) => setAllUser(res.data));
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {allUser.map((item: any) => (
        <div
          key={item.id}
          className="rounded flex justify-between items-center p-4 border-2 border-gray-600	 w-1/2 h-10 "
        >
          <p className="text-white">{item.firstName +" " + item.lastName}</p>
          <div className="flex gap-16 flex-row">
            <label  htmlFor="del-modal" onClick={()=>setUser(item)} className="hover:cursor-pointer">
              <FcDeleteDatabase />
            </label>
            <label htmlFor="my-modal"  onClick={()=>setUser(item)} className="hover:cursor-pointer">
              <FcOpenedFolder />
            </label>
          </div>
        </div>
      ))}

      {/* Modal add */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{user.firstName+" "+user.lastName}</h3>
          <p className="py-4">فایل PDF گواهی نامه را بارگذری کنید</p>
          <form onSubmit={sendFile} className="flex flex-row justify-between">
            
            <div className="modal-action">
              <input className="rounded border-2 p-2 hover:cursor-pointer" name="file" placeholder="انتخاب فایل" type={"file"} />
                
            </div>
            <div className="modal-action">
            <button type="submit" >
              <label
                htmlFor="my-modal"
                className="rounded border-2 p-2 bg-slate-800 text-white hover:cursor-pointer"
              >
                تایید
              </label>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* modal delete */}
      <input type="checkbox" id="del-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col gap-8 items-center justify-center">
          <h3 className="font-bold text-lg">{`آیا مطمئن به حذف گواهی  ${user.firstName+" "+user.lastName} هستید؟`}</h3>
          <form onSubmit={deleteFile} className="flex flex-row justify-between w-full">
            <div className="modal-action w-full flex justify-around">
              <button type="submit" className="">
                <label
                  htmlFor="del-modal"
                  className="rounded border-2 p-3  bg-red-800 text-white hover:cursor-pointer hover:p-4"
                >
                  بله
                </label>
              </button>
              <button>
                <label
                  htmlFor="del-modal"
                  className="rounded border-2 p-3 bg-slate-800 text-white hover:cursor-pointer hover:p-4"
                >
                  خیر
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PushCertification.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutAdmin>{page}</LayOutAdmin>;
};

export default PushCertification;
