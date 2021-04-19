import { createAction } from "redux-actions";
export const FILE = {
    GETALL: "FILE_GETALL",
    GETALL_SUCCESS: "FILE_GETALL_SUCCESS",
    GETALL_FAILURE: "FILE_GETALL_FAILURE",
    GETBYID: "FILE_GETBYID",
    GETBYID_SUCCESS: "FILE_GETBYID_SUCCESS",
    GETBYID_FAILURE: "FILE_GETBYID_FAILURE",
    CHANGE_STATUS: "FILE_CHANGE_STATUS",
    CHANGE_STATUS_SUCCESS: "FILE_CHANGE_STATUS_SUCCESS",
    CHANGE_STATUS_FAILURE: "FILE_CHANGE_STATUS_FAILURE",
    DELETE: "FILE_DELETE",
    DELETE_SUCCESS: "FILE_DELETE_SUCCESS",
    DELETE_FAILURE: "FILE_DELETE_FAILURE",
    ADD: "FILE_ADD",
    ADD_SUCCESS: "FILE_ADD_SUCCESS",
    ADD_FAILURE: "FILE_ADD_FAILURE",
    EDIT: "FILE_EDIT",
    EDIT_SUCCESS: "FILE_EDIT_SUCCESS",
    EDIT_FAILURE: "FILE_EDIT_FAILURE",
};
export const getAllFilesAction = createAction(FILE.GETALL);
export const getAllFilesSuccessAction = createAction(FILE.GETALL_SUCCESS);
export const getAllFilesFailureAction = createAction(FILE.GETALL_FAILURE);
export const getByIdFileAction = createAction(FILE.GETBYID);
export const getByIdFileSuccessAction = createAction(FILE.GETBYID_SUCCESS);
export const getByIdFileFailureAction = createAction(FILE.GETBYID_FAILURE);
export const changeStatusFileAction = createAction(FILE.CHANGE_STATUS);
export const changeStatusFileSuccessAction = createAction(FILE.CHANGE_STATUS_SUCCESS);
export const changeStatusFileFailureAction = createAction(FILE.CHANGE_STATUS_FAILURE);
export const deleteFileAction = createAction(FILE.DELETE);
export const deleteFileSuccessAction = createAction(FILE.DELETE_SUCCESS);
export const deleteFileFailureAction = createAction(FILE.DELETE_FAILURE);
export const addFileAction = createAction(FILE.ADD);
export const addFileSuccessAction = createAction(FILE.ADD_SUCCESS);
export const addFileFailureAction = createAction(FILE.ADD_FAILURE);
export const editFileAction = createAction(FILE.EDIT);
export const editFileSuccessAction = createAction(FILE.EDIT_SUCCESS);
export const editFileFailureAction = createAction(FILE.EDIT_FAILURE);