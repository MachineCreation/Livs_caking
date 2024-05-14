import React from 'react';

//modules
import Button from '../functional_components/button';

const CardThree = () => {
  return (
    <div id='card-3' className='card'>
      <h2 className='card-header'>I Love What I do!</h2>
      <p className='card-content'>Come see the cakes that I've made!
      </p>
      <Button
        title={'Gallery'}
        action={'/gallery'}
      />
    </div>
  );
};

export default CardThree;
