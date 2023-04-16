
import ServicesCard from "@/common/components/ServicesCard";
import planingPNG from "public/assets/images/Icons/se-icon4-af.png";
import planingIcon from "public/assets/images/Icons/se-icon4.png";
import { Library } from "public/Constants/Library"

const ContentLibrary = () => {
    return (
        <div id="sec2" className="w-full flex items-center justify-center relative flex-col   ">

            <h2 className="text-4xl py-8">کتابخانه دیان همراه  </h2>

            <div className="w-full flex items-center justify-center">
                <div className="container px-4">
                    <div className="table flex flex-col  w-full  md:flex-row md:gap-4 flex-wrap flex-grow  m-auto ">

                        {
                            Library.map((item)=>{

                                return(
                                <div key={item.id} id={item.id} className=" w-full m-auto ">
                                    <ServicesCard backImg={planingPNG} icon={planingIcon} title={item.title}
                                                  content="." path={item.address} />
                                </div>)
                            })
                        }





                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContentLibrary