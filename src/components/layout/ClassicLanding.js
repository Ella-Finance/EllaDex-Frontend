import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL as api_url,} from '../../actions/types';
import { Link } from 'react-router-dom';
import { Tooltip } from 'reactstrap';
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
// import { Table } from 'reactstrap';

import classnames from 'classnames';
import Footer from './parts/Footer';
import TopStatistics from './trade/TopStatistics';
import Chart from './trade/Chart';
import Pair from './trade/Pair';
import Trade from './trade/Trade';
import loader, { Loader } from './loader/Loader';
import ClassicTrade from './trade/ClassicTrade';


const ClassicLanding = ({match}) => {
  const [market, setMarket] = useState({
    token: "",
    base: "",
    address: "",
    token_address: "",
    market_address: "",
    last_price : 0
  });

  const [loading, setLoading] = useState(true);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };


  useEffect(  ()  => {
    setLoading(true);
    const ticker = "DAI/ETH";
    try {
      localStorage.setItem('unlocking', false);
      const res = axios.get(api_url+'/api/market/ticker/'+ticker, null, config);
      res.then((data =>{
        if(data.data.data.length > 0){
          console.log(data.data.data[0], "the Loger");
          const priceFetch = axios.get(api_url+'/api/trade/price/'+data.data.data[0].contract_address, null, config);
          priceFetch.then((rs =>{
            
            setMarket({...market, ['market_address']: data.data.data[0].marketAddress, ['token_address']: data.data.data[0].tokenAddress, ["last_price"]: parseFloat(rs.data.data), ['address']: data.data.data[0].contract_address, ['token']: "DAI", ['base']: "ETH"});
            setLoading(false);
          }))
        
        };
      }));
     
    
    } catch (err) {
  
  
      
    }


    console.log();
  }, [match])

  const {token, base, address, last_price} = market;
  return (
    <div>
      {!loading ? (

<div className='container-fluid mt-6'>
{/* <TopStatistics /> */}
 <div className="classic-trade-wrapper">
   
   <ClassicTrade  market={market} />
 </div>
 {/* <Footer /> */}
</div>

      ) : (
       <Loader />
      )}
   
     
    </div>
  );
};

export default ClassicLanding;
