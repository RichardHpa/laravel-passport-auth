import axios from 'axios';
import { isLoggedIn } from '../functions';
import { useSelector } from 'react-redux';

export function login (user) {
    return (dispatch) => {
        dispatch({type: 'PENDING'});
        return new Promise(function(resolve, reject) {
            axios.post('/api/login', user)
            .then((res) =>{
                if(res.data.access_token){
                    const token = res.data.access_token;
                    localStorage.setItem('access_token',  token);
                    dispatch({type: 'LOGIN_SUCCESS', payload: res});
                } else {
                    dispatch({type: 'LOGIN_ERROR'});
                }
                resolve(res);
            })
            .catch((error)=> {
                dispatch({type: 'LOGIN_ERROR', payload: error});
                reject(error);
            })
        });
    }
}

export function logout(){
    if(isLoggedIn){
        return (dispatch) => {
            dispatch({type: 'PENDING'});
            return new Promise(function(resolve, reject) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + useSelector(state => state.token);
                axios.post('/api/logout')
                .then((res) =>{
                    localStorage.removeItem('access_token');
                    dispatch({type: 'LOGOUT'});
                    resolve(res);
                })
                .catch((error)=> {
                    localStorage.removeItem('access_token');
                    dispatch({type: 'LOGOUT'});
                    reject(error);
                })
            });
        }
    }
}

export function register (user) {
    return (dispatch) => {
        dispatch({type: 'REGISTER_REQUEST'});
        return new Promise(function(resolve, reject) {
            axios.post('/api/register', user)
            .then((res) =>{
                if(res.data){
                    dispatch({type: 'REGISTER_SUCCESS', payload: res});
                } else {
                    dispatch({type: 'REGISTER_FAILURE'});
                }
                resolve(res);
            })
            .catch((error)=> {
                dispatch({type: 'REGISTER_FAILURE', payload: error});
                reject(error);
            })
        });
    }
}


// NEED TO PASS THE SUCCESS INTO THE THEN AND THEN ADD TO LOCALSTORAGE



//
// export function authentication() {
//   return {
//     type: 'TEST_AUTH',
//   };
// }
