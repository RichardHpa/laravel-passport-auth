import { useSelector } from 'react-redux';

export const isLoggedIn = () => {
    return useSelector(state => state.token) ? true: false;
}
