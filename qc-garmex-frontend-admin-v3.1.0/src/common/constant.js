export const commonConstant = {
    TRANSLATION_KEY: 'translation-language',
    ADD: 'ADD',
    EDIT: 'EDIT',
    EDIT_ROLE: 'EDIT_ROLE',
    DELETE: 'DELETE',
    CHANGE_STATUS: 'CHANGE_STATUS',
    CHANGE_ISDEFAULT: 'CHANGE_ISDEFAULT',
    GET_BY_ID: 'GET_BY_ID',
    GET_ALL: 'GET_ALL',
    LOADING_FORM: 'LOADING_FORM',
    CHECK_DUPLICATE: 'CHECK_DUPLICATE',
    CHECK_DUPLICATE_USERNAME: 'CHECK_DUPLICATE_USERNAME',
    CHECK_DUPLICATE_EMAIL: 'CHECK_DUPLICATE_EMAIL',
    // AUTHORIZE
    AUTH_ID: 'AUTH_ID',
    AUTH_TOKEN: 'AUTH_TOKEN',
    AUTH_EXPIRES_IN: 'AUTH_EXPIRES_IN',
    // ROLE
    FILTER_ROLE: 'FILTER_ROLE',
    ROLE_ERROR_MSG_EXISTED: 'RoleIsExisted',
    ROLE_KEY_EDIT: 'ROLE_KEY_EDIT',
    // USER
    FILTER_USER: 'FILTER_USER',
    USER_ERROR_MSG_EXISTED: 'UserIsExisted',
    USER_KEY_EDIT: 'USER_KEY_EDIT',
    USER_ACCOUNT_INACTIVE_MSG: 'Account is inactive!',
    REGEX_PHONE_NUMBER: /(09|0[2|3|4|5|6|7|8|9])+([0-9]{8})\b/,

    //FILTER
    FILTER: 'FILTER_',

    //PAGINATION
    PAGE_SIZE: 10,
    //Parameter
    ParamAdd: 'add',
};

export const statusModels = [{ value: '', label: 'Vui lòng chọn trạng thái' }, { value: 0, label: 'Chưa kích hoạt' }, { value: 1, label: 'Kích hoạt' }];
//export const isDefaultModels = [{ Id: false, KeyName: 'No' }, { Id: true, KeyName: 'Yes' }];
export const getBadge = status => {
    // eslint-disable-next-line default-case
    switch (status) {
        case 1: return 'success'
        case 0: return 'danger'
        // case 'Pending': return 'warning'
        // case 'Banned': return 'primary'
        default: return 'warning'
    }
}

export const getStatusName = status => {
    // eslint-disable-next-line default-case
    switch (status) {
        case 0: return 'Chưa kích hoạt'
        case 1: return 'Kích hoạt'
        case 2: return 'Đã xóa'
        default: return ''
    }
}


export default commonConstant;