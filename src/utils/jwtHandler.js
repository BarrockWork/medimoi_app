// Save jwt in memory
const jwtHandler = () => {
    const getToken = () => {
        return localStorage.getItem('app_token');
    };

    const getUserInfo = () => {
        return JSON.parse(localStorage.getItem('app_user'));
    };

    const getPermission = () => {
        return localStorage.getItem('app_permission');
    };

    const setToken = (token) => {
        localStorage.setItem('app_token', token);
        return true;
    };

    const setUserInfo = (userInfo) => {
        localStorage.setItem('app_user', JSON.stringify(userInfo));
        return true;
    };

    const setPermission = (role) => {
        localStorage.setItem('app_permission', role);
        return true;
    };

    const ereaseToken = () => {
        localStorage.removeItem('app_token');
        return true;
    }

    const ereaseInfoUser = () => {
        localStorage.removeItem('app_user');
        return true;
    }

    const ereasePermission = () => {
        localStorage.removeItem('app_permission');
        return true;
    }

    const ereaseAll =  () => {
        ereaseInfoUser();
        ereasePermission();
        ereaseToken();
    }

    const getUser = () => {
        return {
            'user': getUserInfo(),
            'token': getToken()
        }
    }

    return {
        ereaseToken,
        getToken,
        setToken,
        ereaseInfoUser,
        getUserInfo,
        setUserInfo,
        ereaseAll,
        ereasePermission,
        setPermission,
        getPermission,
        getUser
    }
};

export default jwtHandler();