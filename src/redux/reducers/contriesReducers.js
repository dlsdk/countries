import actionTypes from "../actionTypes";

const {GET_CONTRIES_SUCCESS, GET_CONTRIES_ERROR, GET_CONTRIES_START} = actionTypes.contriesActionTypes;

const initialState = {
    countries: [],
    error : '',
    isload: false,
}

const contriesReducers = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_CONTRIES_START:
            return {
                ...state,
                isload: true,
            }
        case GET_CONTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                isload: false,
            };
        case GET_CONTRIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isload: false,
            }
        default:
            return state;
    }
}

export default contriesReducers;