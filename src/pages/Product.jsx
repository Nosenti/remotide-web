/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import './App.css';
import HowItWorks from '../ui/HowItWorks';
import HowItWorks2 from '../ui/HowItWorks2';

function Product() {
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='text-colorBrand500 text-2xl flex justify-center font-bold'>
          Comming Soon...
        </h1>
        <p className='text-lg flex justify-center font-md mb-8'>
          This is what to expect from the product when it is officially launched
        </p>
       
        <div>
            <HowItWorks/>
        </div>
        <div>
            <HowItWorks2/>
        </div>
      </header>
    </div>
  );
}

export default Product;
