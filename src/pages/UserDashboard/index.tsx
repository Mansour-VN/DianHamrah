import LayOutUser from "@/common/Layout/LayOutUser";
import { ToastContainer } from 'react-toastify';

const AdminPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div> 
      { children }
      <ToastContainer/>
    </div>
    );
};
AdminPanel.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutUser>{page}</LayOutUser>;
};

export default AdminPanel;