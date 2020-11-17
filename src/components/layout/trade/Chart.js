import React from 'react'
import { TVChartContainer } from '../../TVChartContainer/index';


import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    // Card,
    // Button,
    // CardTitle,
    // CardText,
    Row,
    Col
    // InputGroup,
    // InputGroupAddon,
    // InputGroupText,
    // Input
  } from 'reactstrap';
import TradingView from './TradingView';
const Chart = ({market}) => {
 
  let sym = market.token+"/"+market.base+"/"+market.address;
    return (
     
           <Col sm='6' className="resetPaddings">
            <div className=''>
              <div className=''>
                <div className=''>
                 <TVChartContainer symbol={sym} contract={market.address}/>  
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <div className='statbox widget d-none d-sm-block box box-shadow'>
                <div className='widget-header'>
                  <div className='row'>
                    <div className='col-xl-12 col-md-12 col-sm-12 col-12'>
                      <h4>About</h4>
                    </div>
                  </div>
                </div>
                <div className='widget-content'>
                  <p className=''>
                    Ethereum is an open-source, public, blockchain-based
                    distributed computing platform and operating system
                    featuring smart contract (scripting) functionality. It
                    supports a modified version of Nakamto consensus via
                    transaction-based state transitions.
                  </p>
                  <p className=''>
                    Ethereum is an open-source, public, blockchain-based
                    distributed computing platform and operating system
                    featuring smart contract (scripting) functionality. It
                    supports a modified version of Nakamto consensus via
                    transaction-based state transitions.
                  </p>
                  <p className='mb-4'>
                    Ethereum is an open-source, public, blockchain-based
                    distributed computing platform and operating system
                    featuring smart contract (scripting) functionality. It
                    supports a modified version of Nakamto consensus via
                    transaction-based state transitions.
                  </p>
                </div>
              </div>
            </div>
          </Col> 
       
    )
}

export default Chart;