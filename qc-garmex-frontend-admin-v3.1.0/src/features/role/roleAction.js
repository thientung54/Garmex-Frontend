import { createAction } from "redux-actions";
export const ROLE = {
    GETALL: "ROLE_GETALL",
    GETALL_SUCCESS: "ROLE_GETALL_SUCCESS",
    GETALL_FAILURE: "ROLE_GETALL_FAILURE",
    GETBYID: "ROLE_GETBYID",
    GETBYID_SUCCESS: "ROLE_GETBYID_SUCCESS",
    GETBYID_FAILURE: "ROLE_GETBYID_FAILURE",
    CHANGE_STATUS: "ROLE_CHANGE_STATUS",
    CHANGE_STATUS_SUCCESS: "ROLE_CHANGE_STATUS_SUCCESS",
    CHANGE_STATUS_FAILURE: "ROLE_CHANGE_STATUS_FAILURE",
    DELETE: "ROLE_DELETE",
    DELETE_SUCCESS: "ROLE_DELETE_SUCCESS",
    DELETE_FAILURE: "ROLE_DELETE_FAILURE",
    ADD: "ROLE_ADD",
    ADD_SUCCESS: "ROLE_ADD_SUCCESS",
    ADD_FAILURE: "ROLE_ADD_FAILURE",
    EDIT: "ROLE_EDIT",
    EDIT_SUCCESS: "ROLE_EDIT_SUCCESS",
    EDIT_FAILURE: "ROLE_EDIT_FAILURE",
};
export const getAllRolesAction = createAction(ROLE.GETALL);
export const getAllRolesSuccessAction = createAction(ROLE.GETALL_SUCCESS);
export const getAllRolesFailureAction = createAction(ROLE.GETALL_FAILURE);
export const getByIdRoleAction = createAction(ROLE.GETBYID);
export const getByIdRoleSuccessAction = createAction(ROLE.GETBYID_SUCCESS);
export const getByIdRoleFailureAction = createAction(ROLE.GETBYID_FAILURE);
export const changeStatusRoleAction = createAction(ROLE.CHANGE_STATUS);
export const changeStatusRoleSuccessAction = createAction(ROLE.CHANGE_STATUS_SUCCESS);
export const changeStatusRoleFailureAction = createAction(ROLE.CHANGE_STATUS_FAILURE);
export const deleteRoleAction = createAction(ROLE.DELETE);
export const deleteRoleSuccessAction = createAction(ROLE.DELETE_SUCCESS);
export const deleteRoleFailureAction = createAction(ROLE.DELETE_FAILURE);
export const addRoleAction = createAction(ROLE.ADD);
export const addRoleSuccessAction = createAction(ROLE.ADD_SUCCESS);
export const addRoleFailureAction = createAction(ROLE.ADD_FAILURE);
export const editRoleAction = createAction(ROLE.EDIT);
export const editRoleSuccessAction = createAction(ROLE.EDIT_SUCCESS);
export const editRoleFailureAction = createAction(ROLE.EDIT_FAILURE);