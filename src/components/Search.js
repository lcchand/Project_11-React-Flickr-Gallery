// Search input Text & Maginfying Glass button
import React, { Component } from 'react';

// a promised-based library that makes server requests in React
// It will be used to fetch the data from Flickr
import axios from 'axios';

// import api_key assigned from Flickr Website located in Config.js
// to be used with the Axios 'get' statement
import apiKey from './Config' ;

// App components
import PhotoContainer from './PhotoContainer';


export default class Search extends Component {
  // State specific for this component that is updated
  // by onSearchChange function that users type Text
  // into input field of the Form
  // Initialize State for data that is going to change
  constructor() {
    super();
    this.state = {
      // State is the 'photos' data we want to display
      photos: [],
      loading: false,//true (was true)
      query: '',
      searchText: ''
    };
  }
  
  // searchText gets updated by the text users type into the Search form
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }



  // Function that is called when the Form is submitted
  handleSubmit = e => {
    e.preventDefault();

    // Input field's value assigned to: checkquery
    let checkquery = (this.query.value);
    console.log('You typed "'+ checkquery + '" in the Search field');
    this.performSearch(checkquery);
    e.currentTarget.reset();
    }
    // React component lifecycle method to fetch data immediately
    // performSearch is called with 'Kitten' as the query text
    // This runs before user types anything in the Search Form
    componentDidMount() {
      this.performSearch();
    }

    performSearch = (text = 'Kitten') => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=16&format=json&nojsoncallback=1`)
      // Response object executed once results are obtained from Flickr
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,//was false
          checkquery: text
        });
    })
    // catch method - handles any errors fetching data
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      });
    }


  render() {
    return (
      <div>
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search"
          onChange={this.onSearchChange}
          id="search"
          name="search"
          ref={(input) => this.query = input} // Puts a reference to the input on the Search form class
          placeholder="Search" />
        <button type="submit" className="search-button" id="searchButton">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
      <div>
      <h2>{this.state.checkquery} Images</h2>
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
