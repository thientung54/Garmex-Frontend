import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { UPLOAD } from './uploadAction';
import { chunkUploadSuccessAction, chunkUploadFailureAction, createUploadSuccessAction, createUploadFailureAction } from './uploadAction';
import config from 'common/config';


const API_CHUNK = config.HOST + config.VERSION + '/File/FileChunks';
const API_CREATE = config.HOST + config.VERSION + '/File/Create';


// CHUNK UPLOAD
const chunkUploadEpic = action$ => action$.pipe(
    ofType(UPLOAD.CHUNK),
    mergeMap((action) => {
        console.log('chunkUploadEpic action', action)
        const formData = new FormData();
        formData.append('fileName', action.payload.fileName);
        formData.append('file', action.payload.chunk);
        //HEADERS: Content-Type: application/octet-stream
        return ajax.post(API_CHUNK, formData, config.HEADERS(true)).pipe(
            map(response => chunkUploadSuccessAction(response)),
            catchError(error => of(chunkUploadFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);

// CREATE UPLOAD
const createUploadEpic = action$ => action$.pipe(
    ofType(UPLOAD.CREATE),
    mergeMap((action) => {
        console.log('createUploadEpic action', action)
        return ajax.post(API_CREATE, action.payload, config.HEADERS()).pipe(
            map(response => createUploadSuccessAction(response)),
            catchError(error => of(createUploadFailureAction({
                message: error.xhr.response, status: error.xhr.status
            })))
        )
    })
);


export { chunkUploadEpic, createUploadEpic };