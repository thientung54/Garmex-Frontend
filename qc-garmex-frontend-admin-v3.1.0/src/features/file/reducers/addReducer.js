import { handleActions } from "redux-actions";
import { FILE } from "../fileAction";
const initialState = {
    isLoading: false,
    isError: false,
    responseData: {},
};
const actions = {
    [FILE.ADD]: () => ({
        isLoading: true,
    }),
    [FILE.ADD_SUCCESS]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        responseData: responseData.response ? responseData.response : responseData,
    }),
    [FILE.ADD_FAILURE]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        isError: true,
        responseData,
    })
};
export default handleActions(actions, initialState);