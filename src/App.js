import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import AuthContext, { AuthProvider } from './context/AuthContext';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import Anothernav from './views/Anothernav';

function App() {
  return (
      <Router>
        <AuthProvider>
          <AuthContext.Consumer>
            {({ isAuthenticated }) => (
                isAuthenticated && <Anothernav />
            )}
          </AuthContext.Consumer>
          <Switch>
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            <Route component={Loginpage} path="/" />
            <Route component={Registerpage} path="/register" exact />
          </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
