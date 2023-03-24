

import TitleLegislation from "./TitleLegislation";
import ContentLegislation from "./ContentLegislation";

const Legislation = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <TitleLegislation/>
            <ContentLegislation/>
        </div>
    )
}

export default Legislation