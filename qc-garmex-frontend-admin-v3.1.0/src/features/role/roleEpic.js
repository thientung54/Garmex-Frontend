import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ROLE } from './roleAction';
import {
    getAllRolesSuccessAction,
    getAllRolesFailureAction,
    getByIdRoleSuccessAction,
    getByIdRoleFailureAction,
    changeStatusRoleSuccessAction,
    changeStatusRoleFailureAction,
    deleteRoleSuccessAction,
    deleteRoleFailureAction,
    addRoleSuccessAction,
    addRoleFailureAction,
    editRoleSuccessAction,
    editRoleFailureAction
} from './roleAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/Role/GetAll';
const API_GETBYID = config.HOST + config.VERSION + '/Role/GetById?id=';
const API_CHANGE_STATUS = config.HOST + config.VERSION + '/Role/ChangeStatus/';
const API_DELETE = config.HOST + config.VERSION + '/Role/Delete/';
const API_ADD = config.HOST + config.VERSION + '/Role/Create';
const API_EDIT = config.HOST + config.VERSION + '/Role/Update';

// GETALL
const getAllRoleEpic = action$ => action$.pipe(
    ofType(ROLE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
            map(response => getAllRolesSuccessAction(response)),
            catchError(error => of(getAllRolesFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETBYID
const getByIdRoleEpic = action$ => action$.pipe(
    ofType(ROLE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, config.HEADERS()).pipe(
            map(response => getByIdRoleSuccessAction(response)),
            catchError(error => of(getByIdRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// CHANGE STATUS
const changeStatusRoleEpic = action$ => action$.pipe(
    ofType(ROLE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, config.HEADERS()).pipe(
            map(response => changeStatusRoleSuccessAction(response)),
            catchError(error => of(changeStatusRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// DELETE
const deleteRoleEpic = action$ => action$.pipe(
    ofType(ROLE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, config.HEADERS()).pipe(
            map(response => deleteRoleSuccessAction(response)),
            catchError(error => of(deleteRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// ADD
const addRoleEpic = action$ => action$.pipe(
    ofType(ROLE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, config.HEADERS()).pipe(
            map(response => addRoleSuccessAction(response)),
            catchError(error => of(addRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// EDIT
const editRoleEpic = action$ => action$.pipe(
    ofType(ROLE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, config.HEADERS()).pipe(
            map(response => editRoleSuccessAction(response)),
            catchError(error => of(editRoleFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic, getByIdRoleEpic };