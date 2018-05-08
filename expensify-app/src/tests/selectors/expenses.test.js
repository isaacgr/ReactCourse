import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const expenses = [{
  id: '1',
  description: 'Car',
  note: '',
  amount: '100',
  createdAt: moment(0)
}, {
  id: '2',
  description: 'Rent',
  note: '',
  'amount': '10000',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  'amount': '1000',
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should filter by text value', () => {
  const filters = {
    ...defaultFilters,
    text: 'e',
  }
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
  const filters = {
    ...defaultFilters,
    startDate: moment(0)
  }
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', () => {
  const filters = {
    ...defaultFilters,
    endDate: moment(0).add(2, 'days')
  }
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'date'
  }
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'amount'
  }
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})
