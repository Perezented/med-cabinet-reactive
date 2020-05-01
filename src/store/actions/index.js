import { authenticAxios } from '../../utils/authenticAxios';

// Retrieving strains from the api
export const getStrainsDataFromActions = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_STRAINS_START',
        });
        authenticAxios()
            .get('https://medcabinet-strain-api.herokuapp.com/strains/all')
            .then((res) => {
                // console.log('res of axios.get: ', res.data);
                dispatch({
                    type: 'FETCH_STRAINS_SUCCESS',
                    payload: res.data,
                }); // UPDATE PAYLOAD////////
            })
            .catch((err) => {
                console.log('error', err);
                dispatch({
                    type: 'FETCH_STRAINS_FAILURE',
                    payload: err.data,
                });
            });
    };
};
