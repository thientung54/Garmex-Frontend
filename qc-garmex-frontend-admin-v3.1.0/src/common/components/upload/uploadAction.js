import { createAction } from "redux-actions";
export const UPLOAD = {
    CHUNK: "CHUNK_UPLOAD",
    CHUNK_SUCCESS: "CHUNK_UPLOAD_SUCCESS",
    CHUNK_FAILURE: "CHUNK_UPLOAD_FAILURE",
    
    CREATE: "CREATE_UPLOAD",
    CREATE_SUCCESS: "CREATE_UPLOAD_SUCCESS",
    CREATE_FAILURE: "CREATE_UPLOAD_FAILURE",    
};
export const chunkUploadAction = createAction(UPLOAD.CHUNK);
export const chunkUploadSuccessAction = createAction(UPLOAD.CHUNK_SUCCESS);
export const chunkUploadFailureAction = createAction(UPLOAD.CHUNK_FAILURE);

export const createUploadAction = createAction(UPLOAD.CREATE);
export const createUploadSuccessAction = createAction(UPLOAD.CREATE_SUCCESS);
export const createUploadFailureAction = createAction(UPLOAD.CREATE_FAILURE);