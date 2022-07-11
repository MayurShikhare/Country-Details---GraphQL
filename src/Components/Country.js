import React, { useState } from 'react';
import './country.css'

const Country = (props) => {
  const [isExpanded, setState] = useState(false)
 
  return (
    <div className="container">
      <div className="country">
        <div className="country-details">
        <p className="country-name">{props.details.name}</p>
          <p className="country-code">{props.details.code}</p>
          {isExpanded ?
            <div className="hidden-details">
              <p>Captial - {props.details.capital}</p>
              <p>Currency - {props.details.currency}</p>  
              <p>Country Code - {props.details.code}</p>  
            </div>
          : 
          ""}
        </div>
        <button
          className="btn-show"
          onClick={()=>{
             setState(!isExpanded)
            }}
          >
            {isExpanded?"-" : "+"}

            {/* Show More */}
        </button> 
      </div>
    </div>
  );
}

export default Country;
