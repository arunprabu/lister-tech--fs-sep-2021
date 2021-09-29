import React from 'react';

const Program = (props) => { // receive the props from parent comp 

  /* 
    What are props?
    * Objects
    * props can have children
    * props are read-only
    * recommended name to receive props is props
  */

  console.log(props);

  const handleWatchThis = (event) => {
    console.log(event);
    event.target.innerText = 'Watching...';
  }

  return (
    <div className="card mb-3">
      <div className="card-header">
        Featured
        <span className="badge rounded-pill bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary" onClick={handleWatchThis}>Watch this...</button>
      </div>
      <div className="card-footer">
        {props.time}
      </div>
    </div>
  )
}

export default Program;
