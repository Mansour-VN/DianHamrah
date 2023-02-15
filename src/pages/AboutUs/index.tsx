import Section1 from "@/pages/AboutUs/Section1";
import Section2 from "@/pages/HomePage/Section6";
import Section4 from "@/pages/HomePage/Section7";
import Section5 from "@/pages/HomePage/Section8";
import Section3 from "@/pages/AboutUs/Section3";
import BranchesCard from "../../components/BranchesCard/BranchesCard"

const AboutUs = () => {

    return (
        <div id="AboutUS" className="bg-sky-50 ">
            <Section1/> {/*History*/}
            <Section2/> {/*History*/}
            <Section3/> {/*History*/}
            <Section4/> {/*History*/}
            <Section5/>

            <BranchesCard title="اصلی" address="شهرک غرب"
                          map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.3563388866064!2d51.351392072989924!3d35.76492647493776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710ba2cbbbb%3A0xf6f06ac08e9d909!2sasak%20gahrn!5e0!3m2!1sfa!2s!4v1675675421405!5m2!1sfa!2s"
                          tel="021-2165496" mobile="09121234567" mail="info@dian.ir"/>
        </div>
    )
}
export default AboutUs