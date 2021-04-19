import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CBadge, CCard, CCardBody, CCardHeader, CCardFooter, CCol, CDataTable, CRow, CFormGroup, CInputCheckbox, CLabel, CButton } from '@coreui/react';
import { getAllRolesAction, getByIdRoleAction, editRoleAction } from '../roleAction';
import { getBadge, getStatusName } from "common/constant";
import OverLoading from 'common/components/overLoading';

import '../style.scss';
import { toastr } from 'react-redux-toastr';

const fields = [
    { key: 'stt', label: 'STT', _style: { width: '2%' }, filter: false, sorter: false },
    { key: 'name', label: 'Tên quyền', _style: { width: '85%' } },
    { key: 'status', label: 'Trạng thái', _style: { width: '13%' }, filter: false },
];
const tableFilter = { label: 'Tìm theo', placeholder: 'Nhập vào từ khóa' };
const itemsPerPageSelect = { label: 'Số dòng' };

function countCheckboxControllerName(records) {
    records && records.forEach(item => {
        if (item && item.PermissionModels) {
            let isChecked = true;
            const arrPerm = item.PermissionModels;
            for (let idx = 0; idx < arrPerm.length; idx++) {
                const ele = arrPerm[idx];
                if (ele && !ele.IsAllow) {
                    isChecked = false;
                    break;
                }
            }
            item['IsCheckedCtrl'] = isChecked;
        }
    });
    return records;
}

function GrantPermission() {
    const dispatch = useDispatch();
    const [checkboxAll, setCheckboxAll] = useState({ records: [], isSet: false, isChecked: false });
    const [submitted, setSubmitted] = useState(false);

    const getAllRoles = useSelector(state => {
        console.log('useSelector getAllRoles run!!!');
        return state.getAllRolesReducer;
    });
    const getByIdRole = useSelector(state => {
        console.log('useSelector getByIdRole run!!!');
        return state.getByIdRolesReducer;
    });
    const editRole = useSelector(state => {
        console.log('useSelector editRole run!!!');
        return state.editRoleReducer.responseData
    });


    useEffect(() => {
        console.log('useEffect run!!!');
        dispatch(getAllRolesAction());
    }, [dispatch]);


    const handleGetByIdRole = (item) => {
        console.log('handleGetByIdRole', item)
        if (item && item.id) {
            dispatch(getByIdRoleAction(item.id));
            setSubmitted(false);
        }
    }
    const handleChangeCheckbox = (items, item, isChecked) => {
        if (!items || !item) return;
        let idxFound = -1;
        for (let idx = 0; idx < items.length; idx++) {
            if (items[idx].ControllerName === item.ControllerName) {
                idxFound = idx;
                break;
            }

        }
        if (idxFound >= 0) {
            items[idxFound].PermissionModels.forEach(ele => {
                ele.IsAllow = isChecked;
            });
        }
        console.log('handleChangeCheckbox', { items, item, isChecked, idxFound });
        setCheckboxAll({ records: items, isSet: true });
        setSubmitted(false);
    }
    const handleChangeCheckAll = (items, isChecked) => {
        items && items.forEach(item => {
            item && item.PermissionModels && item.PermissionModels.forEach(ele => {
                ele.IsAllow = isChecked;
            });
        });
        console.clear();
        console.log('handleChangeCheckAll', { items, isChecked });
        setCheckboxAll({ records: items, isSet: true });
        setSubmitted(false);
    }
    const handleChangeCheckboxChild = (items, item) => {
        if (item) {
            item.IsAllow = !item.IsAllow;
        }
        console.log('handleChangeCheckboxChild', item);
        setCheckboxAll({ records: items, isSet: true });
        setSubmitted(false);
    }
    const handleUpdate = (arrRecords, objData) => {
        console.clear();
        let objUpdate = {
            ...objData,
            jsonRoles: JSON.stringify(arrRecords),
        }
        console.log('objUpdate', { arrRecords, objData, objUpdate });
        dispatch(editRoleAction(objUpdate));
        setSubmitted(true);
    }
    const handleReset = () => {
        console.log('handleReset');
        setCheckboxAll({ ...checkboxAll, isSet: false, isChecked: false });
        setSubmitted(false);
        toastr.warning('Đặt lại quyền!', 'Thông tin quyền đã được đặt lại giá trị trước đó.');
    }


    console.log('----------Redux change ----------', { getAllRoles, getByIdRole });
    const { isLoading, responseData } = getAllRoles;
    let records = responseData && responseData.data ? responseData.data.records : [];
    let isLoadingAPI = false;
    let recordsAPI = [];
    let nameRole = '';
    if (getByIdRole) {
        isLoadingAPI = getByIdRole.isLoading;
        let strRoles = getByIdRole.responseData && getByIdRole.responseData.data ? getByIdRole.responseData.data.jsonRoles : '';
        if (strRoles !== '') nameRole = getByIdRole.responseData.data.name;
        try {
            if (strRoles && strRoles !== '') {
                recordsAPI = JSON.parse(strRoles);
            }
        } catch (error) {
            console.log('Cannot parse json roles!')
        }
        if (checkboxAll.isSet) {
            recordsAPI = checkboxAll.records;
        }
        recordsAPI = countCheckboxControllerName(recordsAPI);
        console.log('recordsAPI', recordsAPI)
    }
    if (submitted) {
        if (editRole && editRole.success) {
            toastr.success('Cập nhật quyền!', 'Cập nhật thông tin thành công.');
        } else if (editRole && editRole.success === false) {
            toastr.error('Cập nhật quyền!', editRole.message);
        } else if (editRole === false) {
            toastr.error('Cập nhật quyền!', 'Cập nhật thông tin thất bại.');
        }
    }

    if (isLoading) return <OverLoading active={isLoading} color="#52B4EF" background="rgba(22, 22, 22, 0.095)" />;
    else return (
        <CRow>
            <CCol xl={6}>
                <CCard>
                    <CCardHeader>
                        <h5>Phân quyền theo từng vai trò</h5>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            header={true} columnFilter={false} items={records} fields={fields}
                            hover border itemsPerPageSelect={itemsPerPageSelect} itemsPerPage={10} tableFilter={tableFilter}
                            sorter pagination onRowClick={(item) => handleGetByIdRole(item)} clickableRows
                            scopedSlots={{
                                'stt':
                                    (item, idx) => (<td className="text-center">{idx + 1}</td>),
                                'status':
                                    (item) => (
                                        <td>
                                            <CBadge className="btn-status" color={getBadge(item.status)} >
                                                {getStatusName(item.status)}
                                            </CBadge>
                                        </td>
                                    ),
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol xl={6}>
                {isLoadingAPI && <OverLoading active={isLoadingAPI} color="#52B4EF" background="rgba(22, 22, 22, 0.095)" />}
                {getByIdRole && getByIdRole.responseData && getByIdRole.responseData.success && (
                    <CCard>
                        <CCardHeader>
                            <h5>Phân quyền - {nameRole}</h5>
                        </CCardHeader>
                        <CCardBody className="scroll-body">
                            <CFormGroup>
                                <CRow>
                                    <CCol md="12">
                                        <CFormGroup variant="checkbox" className="checkbox">
                                            <CInputCheckbox id="checkAll" name="checkAll" checked={checkboxAll.isChecked} onChange={e => handleChangeCheckAll(recordsAPI, e.target.checked)} />
                                            <CLabel variant="checkbox" className="form-check-label cursor-pointer" htmlFor="checkAll"><b>Chọn tất cả</b></CLabel>
                                        </CFormGroup>
                                    </CCol>
                                </CRow>
                            </CFormGroup>
                            {recordsAPI.map((item, idx) => {
                                let idCheckbox = 'chkbox' + idx;
                                return <CFormGroup key={idCheckbox}>
                                    <CRow>
                                        <CCol md="12">
                                            <CFormGroup variant="checkbox" className="checkbox">
                                                <CInputCheckbox id={idCheckbox} name={idCheckbox} checked={item.IsCheckedCtrl} onChange={e => handleChangeCheckbox(recordsAPI, item, e.target.checked)} />
                                                <CLabel variant="checkbox" className="form-check-label cursor-pointer" htmlFor={idCheckbox}><b>{item.ControllerName}</b></CLabel>
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                    {item.PermissionModels && item.PermissionModels.map((itemChild, idxChild) => {
                                        let idCheckboxChild = 'chkboxChild' + idx + idxChild;
                                        return <CRow key={idCheckboxChild}>
                                            <CCol md="1"></CCol>
                                            <CCol md="11">
                                                <CFormGroup variant="checkbox" className="checkbox">
                                                    <CInputCheckbox id={idCheckboxChild} name={idCheckboxChild}
                                                        checked={itemChild.IsAllow} onChange={() => handleChangeCheckboxChild(recordsAPI, itemChild)} />
                                                    <CLabel variant="checkbox" className="form-check-label cursor-pointer" htmlFor={idCheckboxChild}>{itemChild.HttpMethod} - {itemChild.ActionName}</CLabel>
                                                </CFormGroup>
                                            </CCol>
                                        </CRow>
                                    })}
                                </CFormGroup>
                            })}
                        </CCardBody>
                        <CCardFooter className="btn-width">
                            <CButton type="submit" size="sm" color="info" onClick={() => handleUpdate(recordsAPI, getByIdRole.responseData.data)}>Cập nhật</CButton> {' '}
                            <CButton type="reset" size="sm" color="danger" onClick={() => handleReset()}>Đặt lại</CButton>
                        </CCardFooter>
                    </CCard>
                )}
            </CCol>
        </CRow>
    )
}
export default GrantPermission;