import NewsCard from "@/common/components/NewsCard";
import {News} from "public/Constants/dummy";
import Link from "next/link";


const taxNews = () => {

    return (
        <div id="taxNews" className="w-full flex flex-col items-center relative z-0  py-6 border-t-official border-t-8 ">
            <div className="container flex flex-col overflow-hidden pt-2  ">
                <h1 className="text-4xl font-extrabold	text-center sticky w-full text-black py-6">اخبارمالیاتی </h1>
                <div
                    className="flex flex-col md:flex-row container  justify-center font-bold px-4 md:px-0 gap-4 pb-4 items-center">


                    {News.map((New, i) =>

                        (i < 3 ?

                            <div key={New.id}>
                                <NewsCard report={New} path={`News/${New.title}`}/>
                            </div> : "")
                    )}

                </div>
                <div className="w-full px-4 md:px-0 pt-8">
                    <p className="text-center">
                        برای مشاهده اخبار بیشتر <Link className="text-official" href="/News">کلیک نمایید .</Link>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default taxNews