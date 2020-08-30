import React from 'react';
import './App.scss';
import AdminPage from './Pages/AdminPage/AdminPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
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
            path="/menu"
            exact
            component={MenuPage}
          />
          <Route 
            path="/about"
            exact
            component={AboutPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
