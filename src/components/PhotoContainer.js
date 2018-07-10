import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


//PhotoContainer will recieve it's data from App.js via props
const PhotoContainer = props => {

  const results = props.data;
  let images;
  // Conditional rendering - if results are returned, construct URL for Photo
  if (results.length > 0) {
    console.log( "Results returned " + results.length + " images.");
    images = results.map(photo =>
      // The URL takes the following format:
      // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_m.jpg
      // https://farm5.staticflickr.com/4585/38564585811_0723e38555_m.jpg
      // "_m" appended to {secret} returns a photo = m	small, 240px on longest side
      <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} title={photo.title} />
    );
  } else {// Conditional Rendering - if No Results are returned render NotFound component
    console.log( "This is part of the ELSE condition. Results has a length of " + results.length);
    images = <NotFound />
  }

  return(
    <ul>
      {images}
    </ul>
  );
}


export default PhotoContainer;
