import LayOutAdmin from "@/common/Layout/LayOutAdmin";
import React from "react";
import { FcOpenedFolder } from "react-icons/fc";

const PushCertification = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="rounded flex justify-between items-center p-4 border-2 border-gray-600	 w-1/2 h-10 ">
        <p className="text-white">نام و نشان کاربر</p>
        <label htmlFor="my-modal" className="hover:cursor-pointer">
          <FcOpenedFolder />
        </label>
        {/* BsFolderCheck */}
      </div>
   

      {/* Modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            برای مرتضی ابوالفتحی
          </h3>
          <p className="py-4">
           فایل PDF  گواهی نامه را بارگذری کنید
          </p>
          <div className="flex flex-row justify-between">
            <div className="modal-action">
                <button className="rounded border-2 p-2 hover:cursor-pointer">
                انتخاب فایل
                </button>
            </div>
            <div className="modal-action">
                <label htmlFor="my-modal" className="rounded border-2 p-2 bg-slate-800 text-white hover:cursor-pointer">
                تایید
                </label>
            </div>

          </div>
        </div>
      </div>
    </div>
  ); 
};

PushCertification.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutAdmin>{page}</LayOutAdmin>;
};

export default PushCertification;
