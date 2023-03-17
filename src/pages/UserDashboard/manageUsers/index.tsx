import LayoutAdmin from '@/common/Layout/LayOutAdmin';
import React from 'react'

const ManageUsers = () => {
  return (
    <div>This is Manage User with admin</div>
  )
}
ManageUsers.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default ManageUsers