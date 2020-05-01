import axios from 'axios';

export const authenticAxios = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
        headers: { Authorization: token },
        baseURL: 'https://medcabinet-strain-api.herokuapp.com', // UPDATE ME WITH THE SERVER INFO////////////////
    });
};
