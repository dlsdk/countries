import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Actions from '../redux/actions';
import { useDispatch } from 'react-redux';

const {GET_CONTRIES} = Actions.countriesActions

export default function Countries() {

const [query,setQuery] = useState('');
const dispatch = useDispatch();
const {countries,isload} = useSelector(state => state.contriesReducers);



useEffect(() => {
    dispatch(GET_CONTRIES());
    // eslint-disable-next-line 
  }, []);

const handleSearch = (e) => {

  setQuery(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase());

}


  return (
      
    <>
      {isload ? <p>Yükleniyor...</p> : 
        <> 
          <h1>COUNTRIES</h1>
          <label style={{color:'red'}} for="searchinput">Please enter the country name : </label>
          <input type='text' id='searchinput' onChange={handleSearch}/>
          {countries.filter(country => country.name.common.includes(query)).map((country,index) => (
            <div key={index}>
              <h2>{country.name.common}</h2>
              <img  alt="countryFlag"  src={country.flags.png} ></img>
              <h3>Capital City : {country.capital}</h3>
              <h3 style={{margin:"auto"}}>Languages </h3> 
              <ul style={{display:"inline-block", padding:"0"}}>{Object.values(country.languages || {}).map(lang => <li>{lang}</li>)}</ul>
              <hr/>
            </div>
          ))} 
        </>
      }
    </>
  )
}
