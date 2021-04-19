import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addRoleAction, editRoleAction, getByIdRoleAction } from '../roleAction';
import { CCol, CRow, CFade } from '@coreui/react';
import RoleForm from '../components/roleForm';
import { toastr } from 'react-redux-toastr';


function AddEditRolePage() {
  const dispatch = useDispatch();
  const [showElements] = React.useState(true);
  const [submitted, setSubmitted] = useState(false);

  const { id } = useParams();
  const isAddMode = !id;
  let initialValues = { name: '', status: '' };


  const addRole = useSelector(state => {
    console.log('useSelector addRole run!!!');
    return state.addRoleReducer.responseData
  });
  const editRole = useSelector(state => {
    console.log('useSelector editRole run!!!');
    return state.editRoleReducer.responseData
  });
  const getByIdRole = useSelector(state => {
    console.log('useSelector getByIdRole run!!!');
    if (state.getByIdRolesReducer && state.getByIdRolesReducer.responseData && state.getByIdRolesReducer.responseData.success) {
      return state.getByIdRolesReducer.responseData.data;
    }
    return initialValues;
  });


  useEffect(() => {
    console.log('useEffect run!!!');
    if (!isAddMode && id) {
      dispatch(getByIdRoleAction(id));
    }
  }, [isAddMode, id, dispatch]);


  initialValues = isAddMode ? initialValues : getByIdRole;
  const handleSubmit = (values) => {
    console.log('handleSubmit run!!!');
    setSubmitted(true);
    if (isAddMode) {
      const addNew = { ...values, jsonRoles: "*", }
      dispatch(addRoleAction(addNew));
    } else {
      const updateItem = { ...values, id: id, }
      dispatch(editRoleAction(updateItem));
    }
  }


  console.log('----------Redux change ----------', { addRole, editRole, getByIdRole, submitted })
  if (isAddMode && submitted) {
    if (addRole && addRole.success) {
      toastr.success('Thêm quyền mới!', 'Thêm thông tin thành công.');
    } else if (addRole && addRole.success === false) {
      toastr.error('Thêm quyền mới!', addRole.message);
    } else if (addRole === false) {
      toastr.error('Thêm quyền mới!', 'Thêm thông tin thất bại.');
    }
  } else if (submitted) {
    if (editRole && editRole.success) {
      toastr.success('Cập nhật quyền!', 'Cập nhật thông tin thành công.');
    } else if (editRole && editRole.success === false) {
      toastr.error('Cập nhật quyền!', editRole.message);
    } else if (editRole === false) {
      toastr.error('Cập nhật quyền!', 'Cập nhật thông tin thất bại.');
    }
  }
  

  return (
    <CRow>
      <CCol xs="12">
        <CFade timeout={300} in={showElements} unmountOnExit={true}>
          <RoleForm
            isAddMode={isAddMode}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </CFade>
      </CCol>
    </CRow>
  );
}

export default AddEditRolePage;