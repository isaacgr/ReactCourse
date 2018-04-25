import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

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

const NotFoundPage = () => (
  <div>
    404! - <Link to='/'>Home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
  <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
  <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
  <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
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
          path='/help'
          component={HelpPage}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
