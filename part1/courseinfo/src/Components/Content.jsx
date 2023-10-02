import React from 'react';
import Part from './Part';

function Content(props) {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
}

export default Content;
