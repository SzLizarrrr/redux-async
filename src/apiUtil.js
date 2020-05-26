export const apiCall = () => {
    return fetch('https://api.github.com/users/szlizarrrr')
        .then(resp => resp.json())
        .catch(err => err);
}