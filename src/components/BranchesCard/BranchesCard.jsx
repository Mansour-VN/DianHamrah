const BranchesCard = ({title, address, map, tel, mobile, mail, manager, services}) => {

    return (
        <div tabIndex={0}
             className="collapse-open collapse-arrow border border-base-300 bg-base-100 rounded-box w-full p-3">
            <div className="collapse-title text-xl font-medium">

                <h2 className="text-3xl font-bold  text-center pb-6 ">{title}</h2>
                <div className="font-bold py-6 border-y-2 border-amber-300">
                    آدرس: {address}
                </div>
            </div>
            <div className="md:grid md:grid-cols-2 flex flex-col  gap-4 ">
                <div className="">
                    <p className="font-bold">تلفن: </p>
                    <p>{tel}</p>
                    <p className="font-bold">موبایل: </p>
                    <p> {mobile}</p>
                    <p className="font-bold">ایمیل: </p>
                    <p> {mail}</p>
                    <p className="font-bold">مدیریت: </p>
                    <p> {manager}</p>
                    <p className="font-bold pt-3">خدمات:</p>
                    {services.map((service, index) => (<p className="text-red-600" key={index}>✔ {service}</p>))}
                </div>
                <div>
                    <iframe
                        src={map}
                        style={{width:"100%", height:"350px"}}  className="border-2 border-sky-500 w-1/2"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}


export default BranchesCard

