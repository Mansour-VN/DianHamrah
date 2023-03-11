import Card2 from "@/components/card2/Card2";
import {News} from "../../../public/Constants/dummy";
import Button from "@/components/Button/Button";
import {useRouter} from "next/navigation";


const taxNews = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    return (
        <div id="taxNews" className="w-full flex flex-col items-center relative z-0  py-6">
            <div className="container flex flex-col overflow-hidden pt-2 border-t-official border-t-8 ">
                <h1 className="text-4xl font-extrabold	text-center sticky w-full text-black py-6">اخبارمالیاتی </h1>
                <div
                    className="flex flex-col md:flex-row container  justify-center font-bold px-4 md:px-0 gap-4 pb-4 items-center">


                    {News.map((New, i) =>

                        (i < 3 ?

                            <div key={New.id}>
                                <Card2 report={New} path={`News/${New.title}`}/>
                            </div> : "")
                    )}

                </div>
                <div className="w-full px-4 md:px-0">
                    <Button
                        text="مشاهده اخبار بیشتر" type="wide" icon="" mobile=""
                        onClick={() => router.push(`/News`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default taxNews