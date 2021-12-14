import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoreProvider from './ContextApi/Store/provider';
import RoutesPrivate from './components/Routes/Private/private'

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Recover_password from './pages/Recover_password';

export default function Routes () {
  return (
    <Router>
      <StoreProvider>
        <RoutesPrivate path="/" exact component={Home} />

        <RoutesPrivate path="/register" exact component={Register} />
        <RoutesPrivate path="/register/:id" component={Register} />

        <Route path="/login" component={Login} />

        <Route path="/recover_password" component={Recover_password} />
      </StoreProvider>
    </Router>  
  )
}