import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import { routes } from './routes'


class App extends Component {
  render() {
    return (
      <div className="App">

      {/* MAP THROUGH ALL THE ROUTES */}
      {routes.map((route) => (
          <Route 
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />    
        ))}
        
      </div>
    );
  }
}

export default App;
