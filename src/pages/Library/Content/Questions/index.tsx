import {Questions} from "@/module/Library/ContentLibrary/Questions/Questions";
import Link from "next/link";

const QuestionsPage = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between container mx-auto pt-36 	">

            <div className="w-8/12">
                <p className="pb-12 font-extrabold text-3xl text-center ">سوالات متداول</p>
                <Questions/>
            </div>
            <div className="border-2 radios-lg w-3/12 h-fit	">
                <p className="pb-12 font-extrabold text-3xl text-center pt-4">مطالب مفید</p>
                <div className="border-t-2 flex flex-col p-4">
                    <Link href='https://dian.s3.ir-thr-at1.arvanstorage.ir/gica.ir.pdf'>امضا الکترونیک</Link>
                    <Link href='https://dian.s3.ir-thr-at1.arvanstorage.ir/راهنمای-شناسه-کالا-و-خدمات.pdf'>راهنمای-شناسه کالا و خدمات</Link>

                </div>
            </div>
        </div>
    )
}

export default QuestionsPage