import React, { Component } from 'react';
import moment from 'moment';

import earthquakes from '../data/earthquake.js';

class EarthquakeInfo extends Component {

  render() {
    return(
      <div className="earthquake-title">
        <p>This is a list of {earthquakes.features.length} Earthquakes occuring on the morning of July 14th across the United States</p>
      </div>
    );
  };
};

export default EarthquakeInfo;
