import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Recover_password from './pages/Recover_password';

export default function Routes () {
  return (
    <Router>
      <Route path="/" exact component={Home} />

      <Route path="/register" exact component={Register} />
      <Route path="/register/:id" component={Register} />

      <Route path="/login" component={Login} />

      <Route path="/recover_password" component={Recover_password} />
    </Router>  
  )
}