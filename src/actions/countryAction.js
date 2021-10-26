import types from "./type";
import axios from "axios";

// Get Tenant Log
export const getCon = (res) => ({
    type: types.GET_COUNTRY,
    payload: res
});

export const getCountry = (val, callback) => dispatch => {

    let finalUrl = "https://gorest.co.in/public/v1/users/123/posts";
    axios.get(finalUrl)
        .then(response => {
            console.log(response.data)
            dispatch(getCon(response.data));
            if (!!callback) {
                callback(response.data)
            }
        }).catch(error => console.log('error', error));

    // axios.get(process.env.REACT_APP_COUNTRY_URL / `${val}`)
    //     .then(response => {
    //         dispatch({
    //             type: types.GET_COUNTRY,
    //             payload: response.data
    //         });
    //     });
}