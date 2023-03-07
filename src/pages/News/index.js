import Card2 from "../../components/card2/Card2";
import {News} from "../../../public/Constants/dummy";

const NewsPage = () => {



    return (
        <div id="sec8" className="w-full flex flex-col items-center relative bg-sky-50 py-12 z-0">
            <div className="container pt-2">
                <h1 className="text-4xl font-extrabold text-6xl	text-center leading-[1.5] sticky w-full text-black pb-12">تازه
                    ترین اخبارمالیاتی </h1>
                <div className="flex md:flex-row md:flex-wrap md:gap-12 justify-center font-bold flex-col gap-4  px-4">
                    {News.map((New) => (
                        <div key={New.id} className="w-1/4">
                            <Card2 report={New}  path={`News/${New.title}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsPage