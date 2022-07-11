import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import Country from './Country';
import './country.css'

const COUNTRIES_DETAILS = gql`
query GetCountriesDetails{
  countries{
    name
    code
    capital
    currency
    emoji
  }
}
`

const Countries = () => {
  const {loading, error, data} =useQuery(COUNTRIES_DETAILS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <br/>
      <center><h1>Countries Details</h1></center>
      <br/>
      <hr/>
      <br/>
        <div className="grid-view">
        {/* {console.log(data.countries)} */}
        {data.countries.map(country => {
          return(
          <Country key={Math.random()} details={country} />
          )
        })}
        </div>
    </div>
  );
}

export default Countries;
