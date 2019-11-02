import axios from 'axios';
import { useSelector } from 'react-redux';

export function authentication (user) {
    return (dispatch) => {
        dispatch({type: 'PENDING_LOGIN'});
        return new Promise(function(resolve, reject) {
            axios.post('/api/login', user)
            .then((res) =>{
                if(res.data.access_token){
                    dispatch({type: 'TEST_AUTH', payload: res});
                } else {
                    dispatch({type: 'LOGIN_ERROR'});
                }
                resolve(res)
            })
            .catch((error)=> {
                dispatch({type: 'LOGIN_ERROR', payload: error});
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
