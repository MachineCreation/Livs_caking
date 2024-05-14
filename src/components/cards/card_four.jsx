import React from 'react';

//modules
import Button from '../functional_components/button';

const CardFour = () => {

  const handleNav = (go) => {
    window.open(go, '_blank')
  }

  return (
    <div id='card-4' className='card'>
      <h2 className='card-header'>Contact Me</h2>
      <div className='card-content'>
        <div id='twitter' onClick={() => window.open('https://www.twitter.com', '_blank')}></div>
        <div id='instagram' onClick={() => window.open('https://www.instagram.com', '_blank')}></div>
        <div id="facebook" onClick={() => window.open('https://www.facebook.com', '_blank')}></div>
      </div>
      <Button
        title={'Get To Know Me'}
        action={'/contac'}
      />
    </div>
  );
};

export default CardFour;
