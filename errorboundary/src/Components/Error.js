import React from 'react';
import './Error.css'


function Error(props) {

    if(props.name != "Sourav"){
        throw new Error("Check again an error occured")
    }
  return (
    <div >
      <h4>My Name is: <span>{props.name}</span></h4>
    </div>
  );
}

export default Error;
