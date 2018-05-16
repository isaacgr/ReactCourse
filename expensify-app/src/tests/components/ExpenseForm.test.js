import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
})

test('should render expense form with expense data', () => {
  const expense = expenses[1]
  const wrapper = shallow(
    <ExpenseForm
      expense={expense}
    />
  )
  expect(wrapper).toMatchSnapshot();
})
