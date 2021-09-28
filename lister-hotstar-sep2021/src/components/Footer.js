import React from 'react';

// Functional Components with Anonymous Fn 
import Menu from "./Menu";

const Footer = function(){

  const year = 2021;

  let getCopyrightYear = () => {
    return year;
  }

  return(
    <div className="text-center">
      <hr />
      <Menu />
      <p>Copyright {getCopyrightYear()} - Arun</p>
    </div>
  )
}

export default Footer;