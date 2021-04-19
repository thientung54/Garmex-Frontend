import { handleActions } from "redux-actions";
import { UPLOAD } from "../uploadAction";
const initialState = {
    isLoading: false,
    isError: false,
    responseData: {},
};
const actions = {
    [UPLOAD.CHUNK]: () => ({
        isLoading: true,
    }),
    [UPLOAD.CHUNK_SUCCESS]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        responseData: responseData.response ? responseData.response : responseData,
    }),
    [UPLOAD.CHUNK_FAILURE]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        isError: true,
        responseData,
    })
};
export default handleActions(actions, initialState);