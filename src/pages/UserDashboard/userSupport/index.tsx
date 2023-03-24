import LayOutUser from "@/common/Layout/LayOutUser";
const UserSupport = () =>{
    return(
        <div className="text-white h-full  flex justify-center items-center">
            <p>برای ارائه پشتیبانی به زودی در کنا شما هستیم...</p>
      </div>
    )
}


UserSupport.getLayout = function getLayout(page:React.ReactElement){
    return <LayOutUser>{page}</LayOutUser>
}

export default UserSupport;