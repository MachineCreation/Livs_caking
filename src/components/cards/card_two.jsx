import React from 'react';

//modules
import Button from '../functional_components/button';

const CardTwo = () => {
  return (
    <div id='card-2' className='card'>
      <h2 className='card-header'>Or Build Your Own</h2>
      <p className='card-content'>And choose options like:  <br />
      <br />
        - Cake Base <br />
        - Frosting <br />
        and <br />
        - Filling

      </p>
      <Button
        title={'BYO Cake Menu'}
        action={'/Build-your-own'}
      />
    </div>
  );
};

export default CardTwo;
