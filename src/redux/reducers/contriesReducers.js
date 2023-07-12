import actionTypes from "../actionTypes";

const {GET_CONTRIES_SUCCESS, GET_CONTRIES_ERROR, GET_CONTRIES_START} = actionTypes.contriesActionTypes;

const initialState = {
    countries: [],
    error : '',
    isLoad: false,
}

const contriesReducers = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_CONTRIES_START:
            return {
                ...state,
                isLoad: true,
            }
        case GET_CONTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                isLoad: false,
            };
        case GET_CONTRIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoad: false,
            }
        default:
            return state;
    }
}

export default contriesReducers;