import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Tracks from './views/Tracks/Tracks';
import Mentors from './views/Mentors/Mentors';
import Team from './views/Team/Team';
import Prizes from './views/Prizes/Prizes';
import Sponsors from './views/Sponsors/Sponsors';
import Faqs from './views/Faqs/Faqs';
import Footer from './components/Footer/Footer';
import './App.css';
import Founder from './views/founders/founders';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const mainJsx = (
    <Fragment>
      <Landing />
      <About />
      <Tracks />
      <Prizes />
      <Mentors />
      <Sponsors />
      {/* <Team />
      <Founder/> */}
      <Faqs />
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
