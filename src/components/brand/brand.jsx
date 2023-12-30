import React from 'react';
import './brand.css';
import { google,slack,altassian,dropbox,shopify } from './imports';

const brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
     <div>
      <img src={google} alt="/"></img>
      </div>
      <div>
      <img src={slack} alt="/"></img>
      </div>

      <div>
      <img src={altassian} alt="/"></img>
      </div>

      <div>
      <img src={dropbox} alt="/"></img>
      </div>

      <div>
      <img src={shopify} alt="/"></img>
      </div>
    </div>
  );
}

export default brand;
