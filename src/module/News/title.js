import {News} from "public/Constants/dummy";
import Image from "next/image";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const ReportTitle = () => {
    const router = useRouter()
    const [titleReport, setTitleReport] = useState()
    const [imageReport, setImageReport] = useState()
    const [descriptionReport, setdescriptionReport] = useState()
    const [dateReport, setDateReport] = useState()

    useEffect(() => {
        const reportTitle = (router.query.title)
        {
            News.map((report) => {
                if (report.title === reportTitle) {
                    setTitleReport(report.title)
                    setImageReport(report.image)
                    setdescriptionReport(report.description)
                    setDateReport(report.date)
                }
            })
        }
    }, [])


    return (
        <div className="w-full py-32 bg-sky-50">
            <div
                className="container  text-center bg-sky-50 mx-auto  py-12 flex flex-col justify-center items-center px-6 md:px-0">
                <h1 className="text-official leading-[1.5] font-bold text-6xl">{`${titleReport}`}</h1>
                <Image src={imageReport} alt={titleReport}/>
                <p className="text-2xl leading-10 text-justify ">
                    {descriptionReport}
                </p>
                <p className="pt-20">{"تاریخ خبر :"+"   "+`${dateReport}`}</p>
            </div>
        </div>)
}

export default ReportTitle