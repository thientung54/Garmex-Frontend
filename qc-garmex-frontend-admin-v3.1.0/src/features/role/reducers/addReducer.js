import { handleActions } from "redux-actions";
import { ROLE } from "../roleAction";
const initialState = {
    isLoading: false,
    isError: false,
    responseData: {},
};
const actions = {
    [ROLE.ADD]: () => ({
        isLoading: true,
    }),
    [ROLE.ADD_SUCCESS]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        responseData: responseData.response ? responseData.response : responseData,
    }),
    [ROLE.ADD_FAILURE]: (state, { payload: responseData }) => ({
        ...state,
        isLoading: false,
        isError: true,
        responseData,
    })
};
export default handleActions(actions, initialState);