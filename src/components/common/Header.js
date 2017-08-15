// react, proptype
import React, {PropTypes} from 'react';
// link, index link
// react router   
import { Link, IndexLink } from 'react-router';

// constant header
// return nav
// index link /
// active class name
// link /cats
const Header = () => {  
  return (
    <nav>
      <IndexLink to="/" 
        activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
    </nav>
  );
};

//
export default Header;  
