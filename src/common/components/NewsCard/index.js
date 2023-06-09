import Image from 'next/image'
import React from "react";
import {useRouter} from "next/navigation";

const NewsCard = ({report, path}) => {
    const router = useRouter()
    return (
        <div className="card container bg-base-100 shadow-xlb flex justify-center items-center">
            <Image src={report.image} alt={report.title} width={200} height={200}/>
            <div className="card-body flex justify-center items-center">

                <h2 className="card-title text-official text-center ">{report.title}</h2>

                <p className="text-justify  max-h-36 overflow-hidden ">{`${report.description.slice(0, 135)} . . .`}</p>

                <p className="text-justify text-xs max-h-36 py-4 overflow-hidden ">{"تاریخ خبر :" + " " + `${report.date}`}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary"
                            onClick={
                                () => {
                                    router.push(`/${path}`)
                                }}>اطلاعات بیشتر
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;