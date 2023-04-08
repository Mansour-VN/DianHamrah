import {About} from "../../public/Constants/dummy";

const Page404 = () => {


    return (

        <div id="page-404"
             className="w-full flex md:px-0 px-8 mx-auto flex-col gap-12 justify-center items-center relative bg-[#857387] py-64 z-0 text-center ">
            <p className="md:text-8xl text-4xl px- font-extrabold">
                {About.title}
            </p>
            <p className="text-8xl container font-extrabold flex  justify-center items-center gap-8">
                {About.Error}
                {About.Icon}
            </p>

        </div>
    )
}

export default Page404