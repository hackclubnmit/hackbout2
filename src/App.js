import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Tracks from './views/Tracks/Tracks';
import Mentors from './views/Mentors/Mentors';
import Sponsors from './views/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const mainJsx = (
    <Fragment>
      <Landing />
      <About />
      <Tracks />
      <Mentors />
      <Sponsors />
      <Footer />
    </Fragment>
  );

  const sponsorsJsx = (
    <Fragment>
      <Footer />
    </Fragment>
  );

  return (
    <Router>
      <Switch>
        <Route path="/sponsors">{sponsorsJsx}</Route>
        <Route path="">{mainJsx}</Route>
      </Switch>
    </Router>
  );
}

export default App;
