import React from 'react';

const PortfolioItemPage = (props) => (
  <div>
    <h1>
      Thing I've Done
    </h1>
    <p>
      This page is for the item with id {props.match.params.id}
    </p>
  </div>
);

export default PortfolioItemPage;
