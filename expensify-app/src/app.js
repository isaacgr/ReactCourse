import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route} from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is the dashboard
  </div>
)

const AddExpensePage = () => (
  <div>
    This is the expense page
  </div>
)

const EditExpensePage = () => (
  <div>
    This is the edit page
  </div>
)

const HelpPage = () => (
  <div>
    This is the help page
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Route
        path='/'
        component={ExpenseDashboardPage}
        exact={true}
      />
      <Route
        path='/create'
        component={AddExpensePage}
      />
      <Route
        path='/edit'
        component={EditExpensePage}
      />
      <Route
        path='/help'
        component={HelpPage}
      />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
