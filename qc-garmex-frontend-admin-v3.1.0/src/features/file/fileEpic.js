import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { FILE } from './fileAction';
import {
    getAllFilesSuccessAction,
    getAllFilesFailureAction,
    getByIdFileSuccessAction,
    getByIdFileFailureAction,
    changeStatusFileSuccessAction,
    changeStatusFileFailureAction,
    deleteFileSuccessAction,
    deleteFileFailureAction,
    addFileSuccessAction,
    addFileFailureAction,
    editFileSuccessAction,
    editFileFailureAction
} from './fileAction';
import config from 'common/config';

const API_GETALL = config.HOST + config.VERSION + '/File/GetAll';
const API_GETBYID = config.HOST + config.VERSION + '/File/GetById?id=';
const API_CHANGE_STATUS = config.HOST + config.VERSION + '/File/ChangeStatus/';
const API_DELETE = config.HOST + config.VERSION + '/File/Delete/';
const API_ADD = config.HOST + config.VERSION + '/File/Create';
const API_EDIT = config.HOST + config.VERSION + '/File/Update';

// GETALL
const getAllFileEpic = action$ => action$.pipe(
    ofType(FILE.GETALL),
    mergeMap(() => {
        return ajax.getJSON(API_GETALL, config.HEADERS()).pipe(
            map(response => getAllFilesSuccessAction(response)),
            catchError(error => of(getAllFilesFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// GETBYID
const getByIdFileEpic = action$ => action$.pipe(
    ofType(FILE.GETBYID),
    mergeMap((action) => {
        return ajax.getJSON(API_GETBYID + action.payload, config.HEADERS()).pipe(
            map(response => getByIdFileSuccessAction(response)),
            catchError(error => of(getByIdFileFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// CHANGE STATUS
const changeStatusFileEpic = action$ => action$.pipe(
    ofType(FILE.CHANGE_STATUS),
    mergeMap((action) => {
        return ajax.put(API_CHANGE_STATUS + action.payload, config.HEADERS()).pipe(
            map(response => changeStatusFileSuccessAction(response)),
            catchError(error => of(changeStatusFileFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// DELETE
const deleteFileEpic = action$ => action$.pipe(
    ofType(FILE.DELETE),
    mergeMap((action) => {
        return ajax.put(API_DELETE + action.payload, config.HEADERS()).pipe(
            map(response => deleteFileSuccessAction(response)),
            catchError(error => of(deleteFileFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// ADD
const addFileEpic = action$ => action$.pipe(
    ofType(FILE.ADD),
    mergeMap((action) => {
        return ajax.post(API_ADD, action.payload, config.HEADERS()).pipe(
            map(response => addFileSuccessAction(response)),
            catchError(error => of(addFileFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// EDIT
const editFileEpic = action$ => action$.pipe(
    ofType(FILE.EDIT),
    mergeMap((action) => {
        return ajax.put(API_EDIT, action.payload, config.HEADERS()).pipe(
            map(response => editFileSuccessAction(response)),
            catchError(error => of(editFileFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

export { getAllFileEpic, changeStatusFileEpic, deleteFileEpic, addFileEpic, editFileEpic, getByIdFileEpic };