import LayOutUser from "@/common/Layout/LayOutUser";

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div> 
      { children }
    </div>
    );
};
AdminPanel.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutUser>{page}</LayOutUser>;
};

export default AdminPanel;