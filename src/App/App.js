import React from 'react';
import './App.scss';
import AdminPage from './Pages/AdminPage/AdminPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import LocationPage from './Pages/LocationPage/LocationPage';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route 
            path="/"
            exact
            component={HomePage}
          />
          <Route 
            path="/admin"
            component={AdminPage}
          />
          <Route 
            path="/contact"
            exact
            component={ContactPage}
          />
          <Route 
            path="/menu"
            exact
            component={MenuPage}
          />
          <Route 
            path="/location"
            exact
            component={LocationPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
