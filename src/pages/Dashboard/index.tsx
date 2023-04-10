import Sidebar from "@/common/Layout/LayOutUser2";

const dashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            { children }
        </div>
    );
};

dashboard.getLayout = function getLayout(page: React.ReactElement) {
    return <Sidebar>{page}</Sidebar>;
};

export default dashboard;