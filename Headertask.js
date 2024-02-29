import React from 'react';
import {Link} from 'react-router-dom';

const Headertask = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to = "/HomePage">Home</Link>
        </li>
        <li>
        <Link to = "/Abouttask">About Us</Link>
        </li>
        <li>
        <Link to = "/contact">Contact Us</Link>
        </li>
      </ul>
      </nav>
      </>
  );
}

export default Headertask;