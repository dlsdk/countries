import actionTypes from "../actionTypes";
import axios from "axios";

const GET_CONTRIES_SUCCESS = (val) => {
    return {type:actionTypes.contriesActionTypes.GET_CONTRIES_SUCCESS, payload:val}
}

const GET_CONTRIES_ERROR = (val) => {
    return {type:actionTypes.contriesActionTypes.GET_CONTRIES_ERROR, payload:val}
}
const GET_CONTRIES_START = (val) => {
    return {type:actionTypes.contriesActionTypes.GET_CONTRIES_START,payload:val}
}

const GET_CONTRIES = () => dispatch => {
    dispatch(GET_CONTRIES_START());
    axios.get("https://restcountries.com/v3.1/all").then(response => 
    {
        console.log(response.data);
        dispatch(GET_CONTRIES_SUCCESS(response.data))

    }
    ).catch(error => {
        dispatch(GET_CONTRIES_ERROR(error))
     })
 }
 



const countriesActions = {GET_CONTRIES_ERROR,GET_CONTRIES_SUCCESS,GET_CONTRIES};
export default countriesActions;
