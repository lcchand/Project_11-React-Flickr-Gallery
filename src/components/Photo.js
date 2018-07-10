import React from 'react';

const Photo = props => {

  const flickrTitles = props.title;
  console.log(flickrTitles);

  let photoTitle;
  //Long Photo Titles need to clipped or they affect page layout
  if (flickrTitles.length > 25) {
    photoTitle = (props.title.substring(0,22) + '...');
    console.log(photoTitle +' was truncated')
    } else {
      photoTitle = flickrTitles;
    }

  return (
  <div>
    <li>
      <img src={props.url} alt={props.title} title={props.title} />
    </li>
      <p>{photoTitle}</p>
  </div>
);
}

export default Photo;
