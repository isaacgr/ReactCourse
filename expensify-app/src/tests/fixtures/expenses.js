import moment from 'moment';

export default [{
  id: '1',
  description: 'Car',
  note: '',
  amount: 100,
  createdAt: moment(0)
}, {
  id: '2',
  description: 'Rent',
  note: '',
  'amount': 10000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  'amount': 1000,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
