import React from 'react';

// modules
import Button from '../functional_components/button';

// css
import '../../css/card.css';

const CardOne = () => {
  return (
    <div id='card-1' className='card'>
      <h2 className='card-header'>Choose From our House Specialty Cakes </h2>
      <p className='card-content'>Like:  <br></br>
        - Pecan Spice Carrot Cake <br></br>
        or <br />
        - Mocha Berry Dream Cake
      </p>
      <Button
        title={'Specialty Cake Menu'}
        action={'/specialty-cakes'}
      />
    </div>
  );
};

export default CardOne;
