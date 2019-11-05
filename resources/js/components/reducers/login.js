const login = (state = localStorage.getItem('access_token') || null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.payload.data.access_token;
        case 'LOGIN_ERROR':
            return null;
        case 'LOGOUT':
            return null;
        case 'TEST_AUTH':
            return 'testing';
        default:
            return state
    }
}

export default login;
