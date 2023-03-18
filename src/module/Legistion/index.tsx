

import TitleLegislation from "./TitleLegislation";
import ContentLegislation from "./ContentLegislation";

const Legislation = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <TitleLegislation/>
            <ContentLegislation/>
        </div>
    )
}

export default Legislation