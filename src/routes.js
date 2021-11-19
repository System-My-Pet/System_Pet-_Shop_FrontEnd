import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

export default function Routes () {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
    </Router>  
  )
}