import LayoutAdmin from '@/common/Layout/LayOutAdmin';
import React from 'react'

const ManageEmployee = () => {
  return (
    <div>This is ManageEmployee with admin</div>
  )
}
ManageEmployee.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default ManageEmployee