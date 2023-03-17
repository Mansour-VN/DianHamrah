import LayoutAdmin from "@/common/Layout/LayOutAdmin";
const ProductsAdminPage = () =>{
    return(
        <div>
            This is ProductManage 
        </div>
    )
}


ProductsAdminPage.getLayout = function getLayout(page:React.ReactElement){
    return <LayoutAdmin>{page}</LayoutAdmin>
}

export default ProductsAdminPage;