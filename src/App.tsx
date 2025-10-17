import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Navigate 
} from 'react-router-dom';
import { Login, Signup } from '~/pages';
import { PAGE_PATHS } from '~/constants';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes> 
          <Route path={PAGE_PATHS.LOGIN} element={<Login />} />
          <Route path={PAGE_PATHS.SIGNUP} element={<Signup />} />
          <Route 
            path={PAGE_PATHS.HOME}
            element={<Navigate to={PAGE_PATHS.LOGIN} replace />} 
          />
          
        </Routes>
      </Router>
    );
  }
}

export default App;