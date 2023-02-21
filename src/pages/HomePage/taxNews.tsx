import Card2 from "@/components/card2/Card2";
import {News} from "../../../public/Constants/dummy";

const Section8 = () => {
    return (
        <div id="sec8" className="w-full flex flex-col items-center relative z-0">
            <h1 className="text-4xl font-bold	text-center sticky w-full text-black">اخبارمالیاتی </h1>
            <div className="container pt-2">
                <div className="flex md:flex-row  md:gap-12 justify-center font-bold flex-col gap-4 items-center">
                    {News.map((New) => (
                        <Card2
                            key={New.id}
                            src={New.image}
                            alt={New.title}
                            textTitleCard={New.title}
                            mainTextCard={New.Description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section8