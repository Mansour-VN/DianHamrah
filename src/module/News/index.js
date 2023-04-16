import NewsCard from "@/common/components/NewsCard";
import {News} from "public/Constants/dummy";

const NewsPage = () => {

    return (
        <div id="sec8" className="w-full flex flex-col items-center relative bg-sky-50 py-32 z-0">
            <div className="container pt-2">
                <h1 className="text-4xl font-extrabold 	text-center leading-[1.5] sticky w-full text-black pb-12">تازه
                    ترین اخبارمالیاتی </h1>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4 justify-center font-bold  gap-4  px-4">
                    {News.map((New) => (
                        <div key={New.id} className="md:w-1/4">
                            <NewsCard report={New}  path={`News/${New.title}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsPage