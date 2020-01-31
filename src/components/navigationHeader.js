import React from 'react';
import images from '../resources/images.json'

export default () => {
  return (
      <div className='nav-header'>
        <img alt='target_logo' src={images.target_logo} className='nav-header__logo'/>
        <button className='nav-header__cart target_btn'>Cart</button>
      </div>
  );
}
