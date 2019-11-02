const authentication = (state = localStorage.getItem('access_token') || null, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            const token = action.payload.data.access_token;
            localStorage.setItem('access_token',  action.payload.data.access_token);
            return action.payload.data.access_token;
        case 'LOGIN_ERROR':
            return null;
        case 'LOGOUT_SUCCESS':
            return {
                auth: false
            };
        case 'TEST_AUTH':
            console.log('going to test_auth');
            return 'testing';
        default:
            return state
    }
}

export default authentication;
