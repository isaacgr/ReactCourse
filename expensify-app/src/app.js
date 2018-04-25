import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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

const NotFoundPage = () => (
  <div>
    404!
  </div>
)

const routes = (
  <BrowserRouter>
      <Switch>
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
          component={NotFoundPage}
        />
      </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
