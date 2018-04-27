import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>
      Checkout the things I have done:
    </p>
    <Link to='/portfolio/1'>Something</Link>
  <Link to='/portfolio/2'>Something Else</Link>
  </div>
);

export default PortfolioPage;
