
import React from 'react';

const SubHeader = (props) =>{
    return (
     <div>
      <div>
        <h1>
          {props.pageName}
        </h1> 
        <p>
          {props.description}
        </p>
      </div> 
      <div className="card-image">
          <img src={props.image}/> 
      </div>
     </div>
    );
}
export default SubHeader;