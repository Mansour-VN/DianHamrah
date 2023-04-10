import Sidebar from "@/common/Layout/LayOutUser2";

const orders = ()=>{

    return(
        <div>
            orders
        </div>
    )
}

orders.getLayout = function getLayout(page: React.ReactElement) {
    return <Sidebar>{page}</Sidebar>;
};

export default orders;