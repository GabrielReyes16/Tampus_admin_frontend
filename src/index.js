import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthContext, { AuthProvider } from './context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import LoginLayout from "layouts/Login.js";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
      <AuthProvider>
          <AuthContext.Consumer>
              {({ isAuthenticated }) => (
                  isAuthenticated &&<Login />
              )}
          </AuthContext.Consumer>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/login" render={(props) => <LoginLayout {...props} />} />
      <Redirect from="/dashboard" to="/admin/dashboard" />

    </Switch>

      </AuthProvider>
  </BrowserRouter>
);
