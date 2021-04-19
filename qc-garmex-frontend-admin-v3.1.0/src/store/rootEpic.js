import { combineEpics } from 'redux-observable';
//ROLE
import { getAllRoleEpic, getByIdRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic } from 'features/role/roleEpic';
//USER
import { getAllUserEpic, changeStatusUserEpic, deleteUserEpic, addUserEpic, editUserEpic, getByIdUserEpic, checkValidUserNameEpic, checkValidEmailEpic, updateRoleForUserEpic } from 'features/user/userEpic';

//UPLOAD
import { chunkUploadEpic, createUploadEpic } from "common/components/upload/uploadEpic";

//FILE
import { getAllFileEpic, deleteFileEpic } from 'features/file/fileEpic';


const rootEpic = combineEpics(
    //ROLE
    getAllRoleEpic, getByIdRoleEpic, changeStatusRoleEpic, deleteRoleEpic, addRoleEpic, editRoleEpic,

    //USER
    getAllUserEpic, changeStatusUserEpic, deleteUserEpic, addUserEpic, editUserEpic, getByIdUserEpic,
    checkValidUserNameEpic, checkValidEmailEpic, updateRoleForUserEpic,

    //UPLOAD
    chunkUploadEpic, 
    createUploadEpic,

    //FILE
    getAllFileEpic, deleteFileEpic

);
export default rootEpic;