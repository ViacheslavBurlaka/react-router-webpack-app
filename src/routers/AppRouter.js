import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Header from '../components/Header/Header';
import Users from '../pages/Users/Users';
import User from '../pages/User/User';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/persons" component={Users} exact />
        <Route path="/person/:id" component={User} />
        <Route component={NotFound} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
