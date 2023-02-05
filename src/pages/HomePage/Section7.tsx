import Card7 from "@/components/card7/card7"
const Section7 = () => {
  return (
 <>
 <div id="sec7 " className="w-full">
   <div className="container mx-auto">
       <div className="p-20 text-center">
            <h2 className="text-7xl font-bold">
                نظرات مشتریان ما
            </h2>
       </div>
       <div>
           <div className="comments flex gap-8 flex-wrap" >
               <Card7
                   disc="نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند."
                   src="/assets/images/Icons/testi_avatar.png"
                   name="سعیده سعیدی"
                   jobTitle=" مشاور"
               />
               <Card7
                   disc="نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند."
                   src="/assets/images/Icons/testi_avatar.png"
                   name="سعیده سعیدی"
                   jobTitle=" مشاور"
               />
               <Card7
                   disc="نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند."
                   src="/assets/images/Icons/testi_avatar.png"
                   name="سعیده سعیدی"
                   jobTitle=" مشاور"
               />
           </div>
       </div>



   </div>

 </div>
 </>
  )
}

export default Section7