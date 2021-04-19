import { createAction } from "redux-actions";
export const USER = {
    GETALL: "USER_GETALL",
    GETALL_SUCCESS: "USER_GETALL_SUCCESS",
    GETALL_FAILURE: "USER_GETALL_FAILURE",
    GETBYID: "USER_GETBYID",
    GETBYID_SUCCESS: "USER_GETBYID_SUCCESS",
    GETBYID_FAILURE: "USER_GETBYID_FAILURE",
    CHANGE_STATUS: "USER_CHANGE_STATUS",
    CHANGE_STATUS_SUCCESS: "USER_CHANGE_STATUS_SUCCESS",
    CHANGE_STATUS_FAILURE: "USER_CHANGE_STATUS_FAILURE",
    DELETE: "USER_DELETE",
    DELETE_SUCCESS: "USER_DELETE_SUCCESS",
    DELETE_FAILURE: "USER_DELETE_FAILURE",
    ADD: "USER_ADD",
    ADD_SUCCESS: "USER_ADD_SUCCESS",
    ADD_FAILURE: "USER_ADD_FAILURE",
    EDIT: "USER_EDIT",
    EDIT_SUCCESS: "USER_EDIT_SUCCESS",
    EDIT_FAILURE: "USER_EDIT_FAILURE",
    CHECKVALIDUSERNAME: "USER_CHECKVALIDUSERNAME",
    CHECKVALIDUSERNAME_SUCCESS: "USER_CHECKVALIDUSERNAME_SUCCESS",
    CHECKVALIDUSERNAME_FAILURE: "USER_CHECKVALIDUSERNAME_FAILURE",
    CHECKVALIDEMAIL: "USER_CHECKVALIDEMAIL",
    CHECKVALIDEMAIL_SUCCESS: "USER_CHECKVALIDEMAIL_SUCCESS",
    CHECKVALIDEMAIL_FAILURE: "USER_CHECKVALIDEMAIL_FAILURE",
    UPDATEROLEFORUSER: "USER_UPDATEROLEFORUSER",
    UPDATEROLEFORUSER_SUCCESS: "USER_UPDATEROLEFORUSER_SUCCESS",
    UPDATEROLEFORUSER_FAILURE: "USER_UPDATEROLEFORUSER_FAILURE",
};
export const getAllUsersAction = createAction(USER.GETALL);
export const getAllUsersSuccessAction = createAction(USER.GETALL_SUCCESS);
export const getAllUsersFailureAction = createAction(USER.GETALL_FAILURE);
export const getByIdUserAction = createAction(USER.GETBYID);
export const getByIdUserSuccessAction = createAction(USER.GETBYID_SUCCESS);
export const getByIdUserFailureAction = createAction(USER.GETBYID_FAILURE);
export const changeStatusUserAction = createAction(USER.CHANGE_STATUS);
export const changeStatusUserSuccessAction = createAction(USER.CHANGE_STATUS_SUCCESS);
export const changeStatusUserFailureAction = createAction(USER.CHANGE_STATUS_FAILURE);
export const deleteUserAction = createAction(USER.DELETE);
export const deleteUserSuccessAction = createAction(USER.DELETE_SUCCESS);
export const deleteUserFailureAction = createAction(USER.DELETE_FAILURE);
export const addUserAction = createAction(USER.ADD);
export const addUserSuccessAction = createAction(USER.ADD_SUCCESS);
export const addUserFailureAction = createAction(USER.ADD_FAILURE);
export const editUserAction = createAction(USER.EDIT);
export const editUserSuccessAction = createAction(USER.EDIT_SUCCESS);
export const editUserFailureAction = createAction(USER.EDIT_FAILURE);
export const checkValidUserNameAction = createAction(USER.CHECKVALIDUSERNAME);
export const checkValidUserNameSuccessAction = createAction(USER.CHECKVALIDUSERNAME_SUCCESS);
export const checkValidUserNameFailureAction = createAction(USER.CHECKVALIDUSERNAME_FAILURE);
export const checkValidEmailAction = createAction(USER.CHECKVALIDEMAIL);
export const checkValidEmailSuccessAction = createAction(USER.CHECKVALIDEMAIL_SUCCESS);
export const checkValidEmailFailureAction = createAction(USER.CHECKVALIDEMAIL_FAILURE);
export const updateRoleForUserAction = createAction(USER.UPDATEROLEFORUSER);
export const updateRoleForUserSuccessAction = createAction(USER.UPDATEROLEFORUSER_SUCCESS);
export const updateRoleForUserFailureAction = createAction(USER.UPDATEROLEFORUSER_FAILURE);