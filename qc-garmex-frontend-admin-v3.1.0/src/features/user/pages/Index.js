import React from 'react';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router-dom';
import { cilTrash, cilPencil } from '@coreui/icons';
import {
  CBadge, CButton, CDataTable, CLink
} from '@coreui/react';
import usersData from './UsersData';
import { getBadge, getStatusName } from 'common/constant';
import UploadFile from 'common/components/upload/components/uploadFile';

const fields = [
  { key: 'firstname', label: 'Tên', _style: { width: '5%' } },
  { key: 'lastname', label: 'Họ', _style: { width: '5%' } },
  { key: 'username', label: 'Tên đăng nhập', _style: { width: '15%' } },
  { key: 'email', label: 'Email', _style: { width: '15%' } },
  { key: 'phone', label: 'Số điện thoại', _style: { width: '20%' } },
  { key: 'usertype', label: 'Loại người dùng', _style: { width: '25%' } },
  { key: 'status', label: 'Trạng thái', _style: { width: '5%' }, filter: false },
  {
    key: 'action', label: 'Chỉnh sửa', _style: { width: '10%' }, filter: false, sorter: false
  }];

const tableFilter = { label: 'Tìm theo', placeholder: 'Nhập vào từ khóa' };
const itemsPerPageSelect = { label: 'Số dòng'};

const Users = () => {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">Danh sách người dùng</div>
            <div className="text-right col-6">
              <CButton color="success" variant="outline">Thêm mới
              </CButton>
            </div>
          </div>
        </div>
        <div className="card-body">
          <UploadFile />
          <CDataTable
            header={true}
            items={usersData}
            fields={fields}
            striped
            tableFilter={tableFilter}
            itemsPerPageSelect={itemsPerPageSelect}
            itemsPerPage={5}
            sorter
            pagination
            scopedSlots={{
              'status':
                (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {getStatusName(item.status)}
                    </CBadge>
                  </td>
                ), 'action':
                (item) => {
                  return (
                    <td className="text-center">
                      <CLink onClick={() => history.push(`/user/${item.id}`)} >
                        <CIcon className="mx-1" content={cilPencil} />
                      </CLink>
                      <CIcon content={cilTrash} />
                    </td>
                  )
                }
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Users;
