import React from 'react';

// BrowserRouter declares routes
// Render components via the route component
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


// App components
import Search from './Search';
import Nav from './Nav';
import Airplane from './Airplane';
import Train from './Train';
import Automobile from './Automobile';
import NotFound from './NotFound';


const App = props => (

  <BrowserRouter>
    <div>
      <Nav />
      <div className="photo-container">
      <Switch>
      {/* render prop lets you do inline component rendering */}
      {/* pass Query value via the props onSearch to component */}
        {/* Root path is Airplane - app displays Airplane Images upon loading in the browser */}
        <Route exact path="/" render={ () => (<Airplane query='Airplane' />)} />
        <Route path="/search" render={ () => (<Search />)} />
        <Route path="/Airplane" render={ () => (<Airplane query='Airplane' />)} />
        <Route path="/Train" render={ () => (<Train query='Train' />) } />
        <Route path="/Automobile" render={ () => (<Automobile query='Automobile' />) } />
        <Route component={NotFound} />
        {/* 404-like error route that displays when a URL path does not match a route */}
      </Switch>
      </div>
    </div>
  </BrowserRouter>
  );

export default App;
