import Sidebar from "@/common/Layout/LayOutUser2";

const support = () => {

    return (
        <div>
            support
        </div>
    )
}

support.getLayout = function getLayout(page: React.ReactElement) {
    return <Sidebar>{page}</Sidebar>;
};

export default support;