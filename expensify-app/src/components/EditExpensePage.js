import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing Expense wth ID {props.match.params.id}
    </div>
  )
};

export default EditExpensePage;
