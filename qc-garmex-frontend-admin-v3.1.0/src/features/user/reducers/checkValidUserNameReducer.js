import { handleActions } from "redux-actions";
import { USER } from "../userAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [USER.CHECKVALIDUSERNAME]: () => ({
    isLoading: true,
  }),
  [USER.CHECKVALIDUSERNAME_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData: responseData.response ? responseData.response : responseData,
  }),
  [USER.CHECKVALIDUSERNAME_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);