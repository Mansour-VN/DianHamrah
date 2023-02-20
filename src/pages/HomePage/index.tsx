import Demo from "@/pages/HomePage/demo";
import ServicesDian from "@/pages/HomePage/servicesDian";
import Requirement from "@/pages/HomePage/requirement";
import LawTerminals from "@/pages/HomePage/lawTerminals";
import CallAndCounseling from "@/pages/HomePage/callAndCounseling";
import TaxNews from "@/pages/HomePage/taxNews";
import OrganizationIcon from "@/pages/HomePage/organizationIcon";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
        <Demo/>
        <ServicesDian/>
        <TaxNews/>
        <Requirement/>
        {/* <LawTerminals/> */}
        <CallAndCounseling/>
        <OrganizationIcon/>
     </div>
  )
}

export default HomePage