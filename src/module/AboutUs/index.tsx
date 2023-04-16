import History from "./History";
import Contact from "./Contact";
import BrancheSCompanyDian from "./BranchesCompanyDian";
import CustomerClub from "./CustomerClub";

const AboutUs = () => {
    return (
        <div id="AboutUS" className="bg-sky-50 flex flex-col justify-center items-center">
            <History/>
            <Contact/>
            <BrancheSCompanyDian/>
            <CustomerClub/>
            {/* <OurTeam/> */}
        </div>
    )
}
export default AboutUs