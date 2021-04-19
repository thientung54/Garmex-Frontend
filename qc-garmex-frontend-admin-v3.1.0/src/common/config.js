import { commonConstant } from './constant';
import { getSessionStorage } from './utilities/storage';

function getToken() {
    if (typeof (Storage) !== 'undefined') {
        let authToken = getSessionStorage(commonConstant.AUTH_TOKEN);
        if (authToken) {
            return 'Bearer ' + authToken;
        }
    } else {
        console.log('Sorry! No Web Storage support...');
    }
}

const config = {
    HOST: process.env.REACT_APP_URL_BASE_API,
    VERSION: process.env.REACT_APP_VERSION_API,
    HEADERS: (isNotJSON) => {
        const header = {
            crossDomain: true,
            Authorization: getToken()
        }
        if (!isNotJSON) {
            header['Content-Type'] = 'application/json';
        }
        return header;
    }
};
export default config;