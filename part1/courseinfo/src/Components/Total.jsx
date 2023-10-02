import React from 'react';

function Total(props) {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Total number of exercises: {totalExercises}</p>;
}

export default Total;
