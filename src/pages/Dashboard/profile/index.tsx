import Sidebar from "@/common/Layout/LayOutUser2";

const profile = ()=>{

    return(
        <div>
            profile
        </div>
    )
}

profile.getLayout = function getLayout(page: React.ReactElement) {
    return <Sidebar>{page}</Sidebar>;
};

export default profile;