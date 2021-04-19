import { handleActions } from "redux-actions";
import { UPLOAD } from "../uploadAction";
const initialState = {
  isLoading: false,
  isError: false,
  responseData: {},
};
const actions = {
  [UPLOAD.CREATE]: () => ({
    isLoading: true,
  }),
  [UPLOAD.CREATE_SUCCESS]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    responseData,
  }),
  [UPLOAD.CREATE_FAILURE]: (state, { payload: responseData }) => ({
    ...state,
    isLoading: false,
    isError: true,
    responseData,
  })
};
export default handleActions(actions, initialState);