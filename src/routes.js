import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Bed_info from './pages/Bed_info';

export default function Routes () {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/bed_info" component={Bed_info} />
    </Router>  
  )
}