import LayoutAdmin from "@/common/Layout/LayOutAdmin";

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div> 
      { children }
    </div>
    );
};
AdminPanel.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default AdminPanel;