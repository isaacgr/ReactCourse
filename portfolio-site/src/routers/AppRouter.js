import React from 'react';
import Header from '../components/Header';
import PortfolioDashboard from '../components/PortfolioDashboard'
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
    <Switch>
      <Route
        exact
        path='/'
        component={PortfolioDashboard}/>
      <Route
        path='/portfolio'
        exact
        component={PortfolioPage} />
      <Route
        path='/portfolio/:id'
        component={PortfolioItemPage} />
      <Route
        path='/contact'
        component={ContactPage} />
      <Route component={NotFoundPage} />
  </Switch>
</div>
</BrowserRouter>
);

export default AppRouter;
