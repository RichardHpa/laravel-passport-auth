const authentication = (state = localStorage.getItem('access_token') || null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.payload.data.access_token;
        case 'LOGIN_ERROR':
            return null;
        case 'LOGOUT':
            return null;
        case 'TEST_AUTH':
            console.log('going to test_auth');
            return 'testing';
        default:
            return state
    }
}

export default authentication;
