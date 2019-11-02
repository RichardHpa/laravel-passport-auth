export const isLoggedIn = () => {
    return localStorage.getItem('access_token')? true: false;
}
