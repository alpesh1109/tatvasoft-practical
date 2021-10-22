import types from "./type";
import axios from "axios";

export const getCountry = (val) => dispatch => {
    axios.get(process.env.REACT_APP_COUNTRY_URL/`${val}`)
        .then(response => {
            dispatch({
                type: types.GET_COUNTRY,
                payload: response.data
            });
        });
}