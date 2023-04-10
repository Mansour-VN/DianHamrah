import Sidebar from "@/common/Layout/LayOutUser2";

const certificates = ()=>{

    return(
        <div>
            certificates
        </div>
    )
}

certificates.getLayout = function getLayout(page: React.ReactElement) {
    return <Sidebar>{page}</Sidebar>;
};

export default certificates;