import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { freeSet, cilTrash, cilPencil } from '@coreui/icons';
import { CBadge, CLink, CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import { getAllRolesAction, changeStatusRoleAction, deleteRoleAction } from '../roleAction';
import CIcon from '@coreui/icons-react';
import { getBadge, getStatusName } from "common/constant";
import OverLoading from 'common/components/overLoading/index';
import { toastr } from 'react-redux-toastr';
import ModalConfirmation from 'common/components/modalConfirmation';
import { changeStatusItem, removeItem } from 'common/utilities/handelArray';

const fields = [
    { key: 'stt', label: 'STT', _style: { width: '2%' }, filter: false, sorter: false },
    { key: 'id', label: 'Mã quyền', _style: { width: '33%' } },
    { key: 'name', label: 'Tên quyền', _style: { width: '40%' } },
    { key: 'status', label: 'Trạng thái', _style: { width: '13%' }, filter: false },
    { key: 'action', label: 'Chỉnh sửa', _style: { width: '12%' }, filter: false, sorter: false }
];
const tableFilter = { label: 'Tìm theo', placeholder: 'Nhập vào từ khóa' };
const itemsPerPageSelect = { label: 'Số dòng' };


function ListOfRoles() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState({ isShow: false, content: '' })
    const [changedStatus, setChangedStatus] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [idRole, setIdRole] = useState('');


    const getAllRoles = useSelector(state => {
        console.log('useSelector getAllRoles run!!!');
        return state.getAllRolesReducer;
    });
    const deleteRole = useSelector(state => {
        console.log('useSelector deleteRole run!!!');
        if (state.deleteRoleReducer) {
            return state.deleteRoleReducer.responseData;
        }
    });
    const changeStatusRole = useSelector(state => {
        console.log('useSelector changeStatusRole run!!!');
        if (state.changeStatusRoleReducer && state.changeStatusRoleReducer.responseData) {
            return state.changeStatusRoleReducer.responseData.response;
        }
    });


    useEffect(() => {
        console.log('useEffect run!!!');
        dispatch(getAllRolesAction());
    }, [dispatch]);



    const handleItemInModal = (id, content) => {
        setShowModal({ isShow: true, content: content });
        setIdRole(id);
        setDeleted(false);
        setChangedStatus(false);
        console.log('handleItemInModal run!!!');
    }
    const handleShowModal = (val) => {
        console.log('handleShowModal', val, idRole)
        if (val) {
            if (showModal.content === 'xóa') {
                setDeleted(true);
                dispatch(deleteRoleAction(idRole));
            } else {
                setChangedStatus(true);
                dispatch(changeStatusRoleAction(idRole));
            }
        }
        setShowModal(false);
    }


    console.log('----------Redux change ----------', { getAllRoles, deleteRole, deleted, changeStatusRole, changedStatus });
    const { isLoading, responseData } = getAllRoles;
    let records = responseData && responseData.data ? responseData.data.records : [];
    if (deleted) {
        if (deleteRole && deleteRole.success) {
            toastr.success('Xóa quyền!', 'Xóa thông tin thành công.');
            removeItem(records, idRole);
        } else if (deleteRole && deleteRole.success === false) {
            toastr.error('Xóa quyền!', deleteRole.message);
        } else if (deleteRole === false) {
            toastr.error('Xóa quyền!', 'Xóa thông tin thất bại.');
        }
    } else if (changedStatus) {
        if (changeStatusRole && changeStatusRole.success) {
            toastr.success('Đổi trạng thái quyền!', 'Đổi trạng thái thông tin thành công.');
            changeStatusItem(records, idRole);
        } else if (changeStatusRole && changeStatusRole.success === false) {
            toastr.error('Đổi trạng thái quyền!', changeStatusRole.message);
        } else if (changeStatusRole === false) {
            toastr.error('Đổi trạng thái quyền!', 'Đổi trạng thái thông tin thất bại.');
        }

    }


    if (isLoading) return <OverLoading active={isLoading} color="#52B4EF" background="rgba(22, 22, 22, 0.095)" />;
    else return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        <CLink onClick={() => history.push(`/role/new`)} title="Thêm mới quyền" >
                            <CIcon content={freeSet.cilPlus} height={20} />
                        </CLink> <b>Danh sách quyền</b>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            header={true} columnFilter={false} items={records} fields={fields}
                            striped itemsPerPageSelect={itemsPerPageSelect} itemsPerPage={10} tableFilter={tableFilter}
                            sorter pagination scopedSlots={{
                                'stt':
                                    (item, idx) => (<td className="text-center">{idx + 1}</td>),
                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge className="btn-status" color={getBadge(item.status)} onClick={() => handleItemInModal(item.id, 'đổi trạng thái')} >
                                                {getStatusName(item.status)}
                                            </CBadge>
                                        </td>
                                    ),
                                'action':
                                    (item) => {
                                        return (
                                            <td className="text-center">
                                                <CLink onClick={() => history.push(`/role/${item.id}`)} >
                                                    <CIcon className="mx-1" content={cilPencil} />
                                                </CLink>
                                                <CLink onClick={() => handleItemInModal(item.id, 'xóa')} >
                                                    <CIcon className="mx-1" content={cilTrash} />
                                                </CLink>
                                            </td>
                                        )
                                    }
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
            <ModalConfirmation showModal={showModal} handleShowModal={(val) => handleShowModal(val)} />
        </CRow>
    )
}
export default ListOfRoles;