import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
import Navbar from './views/navbar/navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const mainJsx = () => {
    return (
    <Fragment>
      <Navbar/>
      <Landing />
      <About />
      <Tracks />
      <Prizes />
      <Mentors />
      <Sponsors />
      <Faqs />
      <Footer />
    </Fragment>
    );
  }

  const teamJsx = () => {
    return (
    <Fragment>
      <Navbar/>
      <Team />
      <Founder/>
      <Footer />
    </Fragment>
    );
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/team" component={teamJsx}/>
        <Route exact path="/" component={mainJsx}/>
      </Switch>
    </Router>
  );
}

export default App;
