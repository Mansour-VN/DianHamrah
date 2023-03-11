import {services} from "../../../public/Constants/dummy";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";

const Report = () => {
    const router = useRouter()
    const [titleService, setTitleService] = useState()
    const [imageService, setImageService] = useState()
    const [descriptionService, setDescriptionService] = useState()

    useEffect(() => {
        const serviceTitle = (router.query.service)
        {
            services.map((service) => {
                if (service.title === serviceTitle) {
                    setTitleService(service.title)
                    setImageService(service.image)
                    setDescriptionService(service.description)
                }
            })
        }
    }, [])


    return (
        <div className="w-full bg-sky-50">
            <div
                className="container  text-center bg-sky-50 mx-auto  py-12 flex flex-col justify-center items-center px-6 md:px-0">
                <h1 className="text-official leading-[1.5] font-bold text-6xl">{`${titleService}`}</h1>
                <Image src={imageService} alt={titleService}/>
                <p className="text-2xl leading-10 text-justify ">
                    {descriptionService}
                </p>
            </div>
        </div>)
}

export default Report