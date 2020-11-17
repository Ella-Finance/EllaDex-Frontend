import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import {
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap';
// import egoraslogo from '../../../img/egoraslogo.png';
// import ethereum from '../../../img/ethereum.png';
import ngoras from '../../../img/egoraslogodark.png';
import { Search } from '../../Search';

const Landing = () => {
  return (
    <section className='landing mts-6'>
      <div className='container'>
        <div className='pt-3 pt-xl-5 text-center'>
          {/* <div className='mt-xl-5'>
            <img src={ngoras} width='360' className='img-fluid' alt='' />
          </div> */}
          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <div className='mt-3'>{/* <Search /> */}</div>
              <div className='mt-3'>
                <h1 className='font-weight-bolder'>The most powerful Automated <br></br><small>Liquidity platform for crypto assets</small></h1>
                <p className='text-dark'>
                Interact directly with the  ella smart contract and 
Trade at the current market rate at zero slippage from any supported  ethereum wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
