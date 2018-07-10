import React from 'react';
// FetchContainer performs the Axios Get using Flickr API
// and uses query value assigned from Category component: <Automobile query='Automobile' /> in App.js
import FetchContainer from './FetchContainer';

const Automobile = props => (

  <div>
    <h2>{props.query} Images</h2>
    {/* Query value recieved via props from App */}
    <FetchContainer query={props.query} />
  </div>

);

export default Automobile;
