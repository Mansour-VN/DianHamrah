import {services} from "public/Constants/dummy";
import CervicesCard from "@/common/components/CervicesCard";

const Services = () => {
    return (
        <div className="w-full">
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center px-4 md:px-0">
                {services.map((service) => {
                    return (
                        <div key={service.id} className="w-full md:w-2/5">
                            <CervicesCard title={service.title} path={`Services/${service.title}`}
                                   content={service.description.slice(0, 100) + " . . ."} backImg={service.image}
                                   icon={service.image}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Services