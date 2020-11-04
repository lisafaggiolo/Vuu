
import React from 'react';
import "./SubHeader.scss"
const SubHeader = (props) =>{
    return (
     <div className="sub__header">
      <div className="description__div">
        <h1 className="page__name">
          {props.pageName}
        </h1> 
        <p className="description">
          {props.description}
        </p>
      </div> 
      <div>
          <img className="image" src={props.image}/> 
      </div>
     </div>
    );
}
export default SubHeader;