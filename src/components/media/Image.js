import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img width="400" src={props.src} alt={props.description} style={{maxWidth: '100%'}} />
      <figcaption>{props.description}</figcaption>
    </div>
  );
}

export default Image
