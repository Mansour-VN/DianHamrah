import {Questions} from "@/module/Library/ContentLibrary/Questions/Questions";
import Link from "next/link";

const QuestionsPage = () => {
    return (
        <div className="container mx-auto pt-48">

                <p className="pb-12 font-extrabold text-4xl text-center ">سوالات متداول</p>
                <Questions/>

        </div>
    )
}

export default QuestionsPage