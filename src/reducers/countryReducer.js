import types from "../actions/type";

const intialState = {
    country: []
}

export default (state = intialState, action) => {
    switch (action.type) {
        case types.GET_COUNTRY:
            return {
                ...state,
                countryData: action.payload
            }
        default:
            return state
    }

}