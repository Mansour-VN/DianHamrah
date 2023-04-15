

import TitleLibrary from "./TitleLibrary";
import ContentLibrary from "./ContentLibrary";

const Library = () => {
    return (
        <div className="md:flex  flex-col items-center w-full">
            <TitleLibrary/>
            <ContentLibrary/>
        </div>
    )
}

export default Library