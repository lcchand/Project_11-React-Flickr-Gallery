// Container component that takes in a keyword and api key as props
// and fetches the photos and other required information from the API
import React, { Component } from 'react';

// a promised-based library that makes server requests in React
// It will ne used to fetch the data from Flickr
import axios from 'axios';

// import api_key assigned from Flickr Website located in Config.js
// to be used with the Axios 'get' statement
import apiKey from './Config' ;

// App components
import PhotoContainer from './PhotoContainer';

export default class FetchContainer extends Component {
// Initialize State for data that is going to change
constructor() {
  super();
  this.state = {
    // State is the 'photos' data we want to display
    photos: [],
    loading: true,
    query: ''
  };
}

// componentDidMount is used to "fetch data from a server" with AJAX calls (axios will perform)
componentDidMount() {
  // axios (get method) - uses Javascript Promises to handle results. Promises let you chain methods (callbacks) in a sequential order
  // URL is a Template Literal so we can embed the values of: apikey & query
  // apikey is defined in ./Config
  // query = value is passed as a prop from component (Airplane, Train or Automobile)
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${this.props.query}&size=q&per_page=16&format=json&nojsoncallback=1`)
  // Response object executed once results are obtained from Flickr
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
      loading: false,
      query: ''
    });
  })
  // catch method - handles any errors fetching data
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
}


render() {
  console.log(this.state.photos);
  return (
    <div id="results">
      <div className="photo-container">
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PhotoContainer data={this.state.photos} />
        }
      </div>
    </div>
    );
  }
}
