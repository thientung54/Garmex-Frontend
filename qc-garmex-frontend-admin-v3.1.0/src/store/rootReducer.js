import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr'
import sidebarShowReducer from 'containers/sidebarShowReducer';

//ROLES
import getAllRolesReducer from 'features/role/reducers/getAllReducer';
import getByIdRolesReducer from 'features/role/reducers/getByIdReducer';
import changeStatusRoleReducer from 'features/role/reducers/changeStatusReducer';
import deleteRoleReducer from 'features/role/reducers/deleteReducer';
import addRoleReducer from 'features/role/reducers/addReducer';
import editRoleReducer from 'features/role/reducers/editReducer';

//USERS
import getAllUsersReducer from 'features/user/reducers/getAllReducer';
import getByIdUserReducer from 'features/user/reducers/getByIdReducer';
import changeStatusUserReducer from 'features/user/reducers/changeStatusReducer';
import deleteUserReducer from 'features/user/reducers/deleteReducer';
import addUserReducer from 'features/user/reducers/addReducer';
import editUserReducer from 'features/user/reducers/editReducer';
import checkValidUserNameReducer from 'features/user/reducers/checkValidUserNameReducer';
import checkValidEmailReducer from 'features/user/reducers/checkValidEmailReducer';
import updateRoleForUserReducer from 'features/user/reducers/updateRoleForUserReducer';

//UPLOAD
import chunkReducer from "common/components/upload/reducers/chunkReducer";
import createReducer from "common/components/upload/reducers/createReducer";

//FILE
import getAllFilesReducer from 'features/file/reducers/getAllReducer';
import deleteFileReducer from 'features/file/reducers/deleteReducer';

export default combineReducers({
    router: routerReducer,
    toastr: toastrReducer,
    sidebarShowReducer,

    // ROLE
    getAllRolesReducer,
    getByIdRolesReducer,
    changeStatusRoleReducer,
    deleteRoleReducer,
    addRoleReducer,
    editRoleReducer,

    // USER
    getAllUsersReducer,
    getByIdUserReducer,
    changeStatusUserReducer,
    deleteUserReducer,
    addUserReducer,
    editUserReducer,
    checkValidUserNameReducer,
    checkValidEmailReducer,
    updateRoleForUserReducer,

    //UPLOAD
    chunkReducer,
    createReducer,

    //FILE
    getAllFilesReducer,
    deleteFileReducer,

});