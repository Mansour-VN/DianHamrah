import { AdminButton } from '@/common/components/Button';
import LayoutAdmin from '@/common/Layout/LayOutAdmin';
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';



const Certification = () => {
  return (
    <div className="text-white h-full  flex justify-center items-center">
    <div className=' w-1/2 h-1/4 rounded-sm  flex items-center justify-center flex-col gap-10 border-slate-700 border-2 px-4'>
      <p>برای دریافت گواهی خود روی لینک زیر کلید کنید</p>
      <AdminButton icon={<AiOutlineDownload/>} type="" text="دانلودکنید"/>
        
    </div>
</div>
  )
}
Certification.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Certification