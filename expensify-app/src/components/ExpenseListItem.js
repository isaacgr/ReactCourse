import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Created At: {createdAt}</p>
    </div>
  </div>
);

export default ExpenseListItem;
