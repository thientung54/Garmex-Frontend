import React from 'react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'
import { freeSet, cilTrash, cilPencil } from '@coreui/icons'
import {
  CBadge, CDataTable, CLabel, CLink
} from '@coreui/react'
import dataLocal from './data'

const getBadge = status => {
  switch (status) {
    case 'Kích hoạt': return 'success'
    case 'Chưa kích hoạt': return 'danger'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = [
  { key: 'key', label: 'Khóa', _style: { width: '10%' } },
  { key: 'value', label: 'Giá trị', _style: { width: '20%' } },
  { key: 'configTypeId', label: 'Loại cấu hình', _style: { width: '20%' } },
  { key: 'description', label: 'Diễn giải', _style: { width: '30%' } },
  { key: 'status', label: 'Trạng thái', _style: { width: '10%' }, filter: false },
  { key: 'action', label: 'Chỉnh sửa', _style: { width: '10%' }, filter: false, sorter: false}
]

const Users = () => {
  const history = useHistory();

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <CIcon content={freeSet.cilPlus} height={20} />
 &nbsp; Cấu hình chung
 </div>
            <div className="text-right col-6">Bộ lọc
 <CLabel className="float-right mx-1 c-switch c-switch-pill c-switch-info">
                <input type="checkbox" className="c-switch-input" aria-checked="false" />
                <span className="c-switch-slider" data-checked="On" data-unchecked="Off"></span>
              </CLabel>
            </div>
          </div>
        </div>
        <div className="card-body">
          <CDataTable
            header={true}
            columnFilter
            items={dataLocal}
            fields={fields}
            striped
            tableFilter
            itemsPerPageSelect
            itemsPerPage={5}
            sorter
            pagination
            scopedSlots={{
              'status':
                (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                ), 'action':
                (item, index) => {
                  return (
                    <td className="text-center">
                      <CLink onClick={() => history.push(`/globalsconfig/${item.id}`)} >
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
