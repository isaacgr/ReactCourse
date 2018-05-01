import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <div>
      <h3>{description}</h3>
      <p>Amount: {amount}</p>
      <p>Created At: {createdAt}</p>
      <button onClick = {() => {
        dispatch(removeExpense({id}));
      }}>Remove</button>
    </div>
  </div>
);

export default connect()(ExpenseListItem);
