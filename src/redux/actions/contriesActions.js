import {GET_CONTRIES_SUCCESS,GET_CONTRIES_ERROR,GET_CONTRIES_START} from "../actionTypes/contriesActionTypes"
import axios from "axios";

const getContriesSuccess = (val) => {
    return {
        type:GET_CONTRIES_SUCCESS, 
        payload:val
    }
}

const getContriesError= (val) => {
    return {
        type:GET_CONTRIES_ERROR, 
        payload:val
    }
}
const getCountriesStart = (val) => {
    return {
        type:GET_CONTRIES_START,
        payload:val
    }
}

const getCountries = () => dispatch => {
    dispatch(getCountriesStart());
    axios.get("https://restcountries.com/v3.1/all").then((response) => 
    {
        console.log(response.data);
        dispatch(getContriesSuccess(response.data))

    }
    ).catch(error => {
        dispatch(getContriesError(error))
     })
 }
 

const countriesActions = {getCountries};
export default countriesActions;
