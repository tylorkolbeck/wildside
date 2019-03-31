import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import { routes } from './routes'

import NavMenu from './containers/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'


class App extends Component {

  state = {
    backDropShown: true
  }

  backdropToggleHandler() {
    this.setState({backDropShown: !this.state.backDropShown})
  }


  render() {
    return (
      <div className="App">

        <NavMenu backDropShown={this.state.backDropShown} backdropToggleHandler={this.backdropToggleHandler.bind(this)}/>

        {/* MAP THROUGH ALL THE ROUTES */}
        {routes.map((route) => (
            <Route 
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />    
          ))}
          
        <Footer />
      </div>
    );
  }
}

export default App;
