import React, { Component } from 'react';

import Library from './library/library';
import Schedule from './scheduler/schedule';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Schedule />
        <Library />

      </div>
    );
  }
}

export default Home;