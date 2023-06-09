import Demo from "./Demo";
import ServicesDian from "./ServicesDian";
import Requirement from "./Requirement";
import LawTerminals from "./LawTerminals";
import CallAndCounseling from "./CallAndCounseling";
import TaxNews from "./TaxNews";
import OrganizationIcon from "./CustomersIcons";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
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

export default Home

