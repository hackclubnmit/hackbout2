import React, { Fragment } from 'react';

import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Tracks from './views/Tracks/Tracks';
import './App.css';

function App() {
  return (
    <Fragment>
      <Landing />
      <About />
      <Tracks />
    </Fragment>
  );
}

export default App;
