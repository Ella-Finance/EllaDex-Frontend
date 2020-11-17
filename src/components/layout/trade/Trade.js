import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'reactstrap';
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
// import { Table } from 'reactstrap';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";

import {unluckToken, transactReceipt, callSwapBase2, callSwap, callSwap1, callSwap2, callSwapBase, callSwapBase1, getEthBalance, getTokenBalance, checkAllowance}  from "../../../web3/index"
import { parseEther } from "@ethersproject/units";
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner, faTimes, faUnlock } from '@fortawesome/free-solid-svg-icons';

const Trade = ({market}) => {
  // console.log(market);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab2, setActiveTab2] = useState('1');
  const [switcher, setSwitcher] = useState(market.base);
  const [selectedBase, setSelectedBase] = useState(true);
  const [stage, setStage] = useState(0);
  const [tradeData, setTradeData] = useState({
    amount: "",
    recieve: 0,
    pText: "Proccessing...",
    pmsg: "",
    hash: "",
    select_coin_address: ""
  });
  const onChange = e => {
    if (selectedBase) {
      let r = parseFloat(e.target.value) / parseFloat(market.last_price);
      setTradeData({ ...tradeData, [e.target.name]: e.target.value, ['recieve']: r })
    }else{
      let r = parseFloat(market.last_price) * parseFloat(e.target.value);
      setTradeData({ ...tradeData, [e.target.name]: e.target.value, ['recieve']: r })
    }
    
  }
  const context = useWeb3React();
  const {
    library,
    account
   } = context;
  const toggle2 = tab2 => {
    if (activeTab2 !== tab2) setActiveTab2(tab2);
    if(tab2 == "1"){
      setSelectedBase(true);
      setSwitcher(market.base)
      setTradeData({ ...tradeData, ["amount"]: "", ['recieve']: 0})
    }else{
      setSelectedBase(false);
      setSwitcher(market.token)
      setTradeData({ ...tradeData, ["amount"]: "", ['recieve']: 0})
    }
  };

  const {amount, recieve, pText, hash, pmsg, select_coin_address} = tradeData;

  const isFormValid =
  parseFloat(amount) > 0;
 
const isValid = isFormValid == false || isProcessing == true;

const processSwap = async ()  => {
  setIsProcessing(true);
  let value = parseEther(amount.toString(), "wei").toString();
  if(selectedBase && market.base.toUpperCase() == "ETH"){
    // swapBase1 eth checked
   
    let balence = await getEthBalance(account, library);
   
    if(parseFloat(balence.message) >=  parseFloat(value)){
      
      let bT = await getTokenBalance(market.token_address, market.address, library.getSigner());
      if(parseFloat(bT.message) >=  parseFloat(recieve)){
        let rs = await callSwapBase1(market.address, value, library.getSigner())
        if(rs.status == true){
          
          setTradeData({...tradeData, ['hash']: rs.message})
          setIsProcessing(false);
          setStage(2)
        }else{
          setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
      setStage(4)
      setIsProcessing(false);
        }
      }else{
        setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
      setStage(4)
      setIsProcessing(false);
      }
      
    }else{
      setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
      setStage(4)
      setIsProcessing(false);
    }
   
   
  }else if(selectedBase && market.base.toUpperCase() !== "ETH" && market.token.toUpperCase() !== "ETH"){
    // swapBase ERC20 checked

    let bT = await getTokenBalance(market.market_address, account, library.getSigner());
    if(parseFloat(bT.message) >=  parseFloat(value)){
      let bT2 = await getTokenBalance(market.token_address, market.address, library.getSigner());
      if(parseFloat(bT2.message) >=  parseFloat(recieve)){
        //(ex_address, coin_address, owner, amount, signer)
        let check = await checkAllowance(market.address, market.market_address, account, value, library.getSigner());
        if(check.status == true){
          let rs = await callSwapBase(market.address, value, library.getSigner())
          if(rs.status == true){
            
            setTradeData({...tradeData, ['hash']: rs.message})
            setIsProcessing(false);
            setStage(2)
          }else{
            setTradeData({...tradeData,  ['pmsg']: "Transaction did not complete successfully!"})
        setStage(4)
        setIsProcessing(false);
          }
        }else{
          setTradeData({...tradeData,  ['select_coin_address']: market.market_address})
          setIsProcessing(false);
          setStage(3)
        }
       
      }else{
        setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
      setStage(4)
      setIsProcessing(false);
      }
      
   
    }else{
      setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
      setStage(4)
      setIsProcessing(false);
    }
   

  }else if(!selectedBase && market.token.toUpperCase() == "ETH"){
    // swap2 eth is the token checked
    //swap2
    let balence = await getEthBalance(account, library);
   
    if(parseFloat(balence.message) >=  parseFloat(value)){
      
      let bT = await getTokenBalance(market.market_address, market.address, library.getSigner());
      if(parseFloat(bT.message) >=  parseFloat(recieve)){

        let rs = await callSwap2(market.address, value, library.getSigner())
        if(rs.status == true){
          
          setTradeData({...tradeData, ['hash']: rs.message})
          setIsProcessing(false);
          setStage(2)
        }else{
          setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
      setStage(4)
      setIsProcessing(false);
        }
      }else{
        setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
      setStage(4)
      setIsProcessing(false);
      }
      
    }else{
      setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
      setStage(4)
      setIsProcessing(false);
    }
    

  }else if(!selectedBase && market.base.toUpperCase() == "ETH"){
    //swap1 Token to get Eth checked

    let bT = await getTokenBalance(market.token_address, account, library.getSigner());
    if(parseFloat(bT.message) >=  parseFloat(value)){
      let bT2 = await getEthBalance(market.address, library);
      if(parseFloat(bT2.message) >=  parseFloat(recieve)){
        //(ex_address, coin_address, owner, amount, signer)
        let check = await checkAllowance(market.address, market.token_address, account, value, library.getSigner());
        if(check.status == true){
          let rs = await callSwap1(market.address, value, library.getSigner())
          if(rs.status == true){
            
            setTradeData({...tradeData, ['hash']: rs.message})
            setIsProcessing(false);
            setStage(2)
          }else{
            setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
        setStage(4)
        setIsProcessing(false);
          }
        }else{
          setTradeData({...tradeData,  ['select_coin_address']: market.token_address})
          setStage(3)
        }
       
      }else{
        setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
      setStage(4)
      setIsProcessing(false);
      }
      
   
    }else{
      setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
      setStage(4)
      setIsProcessing(false);
    }

   

  }else if (!selectedBase && market.base.toUpperCase() !== "ETH" &&  market.token.toUpperCase() !== "ETH") {
    //swap your token to base checked

    let bT = await getTokenBalance(market.token_address, account, library.getSigner());
    if(parseFloat(bT.message) >=  parseFloat(value)){
      let bT2 = await getTokenBalance(market.market_address, market.address, library.getSigner());
      if(parseFloat(bT2.message) >=  parseFloat(recieve)){
        //(ex_address, coin_address, owner, amount, signer)
        let check = await checkAllowance(market.address, market.token_address, account, value, library.getSigner());
        if(check.status == true){
          let rs = await callSwap(market.address, value, library.getSigner())
          if(rs.status == true){
            
            setTradeData({...tradeData, ['hash']: rs.message})
            setIsProcessing(false);
            setStage(2)
          }else{
            setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
        setStage(4)
        setIsProcessing(false);
          }
        }else{
          setStage(3)
          setTradeData({...tradeData,  ['select_coin_address']: market.token_address})

        }
       
      }else{
        setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
      setStage(4)
      setIsProcessing(false);
      }
      
   
    }else{
      setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
      setStage(4)
      setIsProcessing(false);
    }



  }else if(selectedBase && market.token.toUpperCase() == "ETH"){
     //swap your base to get eth to base checked

     let bT = await getTokenBalance(market.market_address, account, library.getSigner());
     if(parseFloat(bT.message) >=  parseFloat(value)){
       let bT2 = await getEthBalance(market.address, library);
       if(parseFloat(bT2.message) >=  parseFloat(recieve)){
         //(ex_address, coin_address, owner, amount, signer)
         let check = await checkAllowance(market.address, market.market_address, account, value, library.getSigner());
         if(check.status == true){
           let rs = await callSwapBase2(market.address, value, library.getSigner())
           if(rs.status == true){
             
             setTradeData({...tradeData, ['hash']: rs.message})
             setIsProcessing(false);
             setStage(2)
           }else{
             setTradeData({...tradeData, ['pmsg']: "Transaction did not complete successfully!"})
         setStage(4)
         setIsProcessing(false);
           }
         }else{
           setStage(3)
          setTradeData({...tradeData,  ['select_coin_address']: market.market_address})

         }
        
       }else{
         setTradeData({...tradeData, ['pmsg']: "No liquidity for "+market.token})
       setStage(4)
       setIsProcessing(false);
       }
       
    
     }else{
       setTradeData({...tradeData, ['pmsg']: "non-sufficient funds"})
       setStage(4)
       setIsProcessing(false);
     }

     
  }

}
const  Continue = async (e) => {
  e.preventDefault();
  setStage(0);
  setIsProcessing(false);
}

const doUnluck = async (e) => {
  setStage(1);
  setIsProcessing(true);
  setTradeData({...tradeData, ['pText']: "Transacting with blockchain, please wait..."})
  
  let ret = await unluckToken(parseEther(amount.toString(), "wei").toString(), select_coin_address, market.address, library.getSigner());
  if(ret.status == true){
    localStorage.setItem('unlocking', true);
    localStorage.setItem('unlockingHash', ret.message)
  setTradeData({...tradeData, ['pText']: "Unlocking please wait aleast 1/2 minutes"})

  
  }else{
  setStage(4);
  setIsProcessing(false);
  setTradeData({...tradeData, ['pmsg']: "Did not complete successfully!"})
  }

}


const unluckTokenFinal = async (e) => {
  setStage(1);
  setIsProcessing(true);
  setTradeData({...tradeData, ['pText']: "Transacting with blockchain, please wait..."})
  //(amount, coin_address, ex_address, signer)
  let ret = await unluckToken(parseEther((10 ** 18 * 100).toString(), "wei").toString(), select_coin_address, market.address, library.getSigner());
  if(ret.status == true){
    localStorage.setItem('unlocking', true);
    localStorage.setItem('unlockingHash', ret.message)
  setTradeData({...tradeData, ['pText']: "Unlocking please wait aleast 1/2 minutes"})

  
  }else{
  setStage(4);
  setIsProcessing(false);
  setTradeData({...tradeData, ['pmsg']: "Did not complete successfully!"})
  }

}
setInterval(() => {
 
  if(localStorage.getItem('unlocking') == "true"){
    console.log("running Interval");
    transactReceipt(localStorage.getItem('unlockingHash'), library)
      .then(function(env) {
       
       if(env.status == true && env.message !== null){
         if(parseInt(env.message.confirmations) > 0){
          
          setIsProcessing(false);
          localStorage.setItem('unlocking', false);
          setStage(0);
           
         }
         
       }
    });
       
    }
}, 7000);

    return (
       
             <Col sm='3'>
            <div className=' d-sm-block'>
              <div className=' d-sm-block'>
                <div className='statbox widget box p-2 box-shadow'>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab2 === '1' }, 'text-black market-coin')}
                        onClick={() => {
                          toggle2('1');
                        }}
                      >
                        Swap <span className="font-weight-bold">{market.base}</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab2 === '2' }, 'text-black market-coin')}
                        onClick={() => {
                          toggle2('2');
                        }}
                      >
                        Swap <span className="font-weight-bold">{market.token}</span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab2}>
                    <TabPane tabId='1' className="active">
                      {/* <div className='d-block py-2'>
                      <div className="connect-wallet-div">
                         <button className="connect-wallet">Connect Wallet</button>
                        </div>
                        
                       
                      </div> */}
                      {stage == 0 ? (
                      <div className='widget-content mt-4 trade-widget-content'>
                        <div className="row">
                        <div className="col-md-3">
                        <p><small>Price</small> </p>
                        </div>

                        <div className="col-md-9">
                        <p className="text-right"> <span className="price-of-trade">{parseFloat(market.last_price).toFixed(8)}</span><small className="text-warning font-weight-bolder">{market.base}</small></p>
                        </div>
                        </div>
                    
                    <hr />
                    <label><small>Amount</small></label>
                        <div className='pb-3 input-group'>
                        
                          <input
                            placeholder='0.0'
                            step='1'
                            type='number'
                            className='form-control'
                            value={amount}
                            name="amount"
                            onChange={e => onChange(e)}
                          />
                          <div className='input-group-append'>
                            <span className='input-group-text'>{switcher}</span>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col-md-3">
                        <p><small>Receive</small> </p>
                        </div>

                        <div className="col-md-9">
                    <p className="text-right"> <span className="price-of-trade">{recieve ? recieve : 0}</span><small className="text-success font-weight-bolder">{selectedBase ? market.token : market.base}</small></p>
                        </div>
                        </div>
                        {/* <small className='pb-2 text-muted'>Max: 0.0Eth</small> */}
                        {/* <div className='d-block d-flex j-space-around'>
                          <div className='trd-head'>
                            <button className='percentage-btn'>25%</button>
                          </div>
                          <div className='trd-head'>
                            <button className='percentage-btn'>50%</button>
                          </div>
                          <div className='trd-head'>
                            <button className='percentage-btn'>75%</button>
                          </div>
                          <div className='trd-head'>
                            <button className='percentage-btn'>100%</button>
                          </div>
                        </div> */}
                        <button onClick={processSwap} disabled={isValid} className='btn btn-success2 btn-block text-black mt-2'>
                          

                          {isProcessing ? (<span>
                            <FontAwesomeIcon icon={faSpinner} spin /> Swaping...
                          </span>) : 
                          (<span>Swap {switcher}</span>)
                          }
                        </button>

                       
                      </div> ) : null }
                      {stage == 1 ? (
                      <div className="  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h1 style={{marginTop: "20%"}} className="text-center theColor">
        <FontAwesomeIcon icon={faSpinner} spin /><br />
       <small>{pText}</small>
       </h1>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }

            {stage == 2 ? (
            <div className="  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className=" mt-4">
                <h1 className="text-center theColor">
                
                  <FontAwesomeIcon icon={faCheckCircle} />
                   <br />
                  Success
                  </h1>
                  <p className="text-center">Transaction was successful.
                  <br />
               
            <a
            className="btn btn-link text-success"
          href={"https://etherscan.io/tx/" + hash}
          target="_blank"
        >
          View on etherscan
        </a>{" "}
        <br />
        <br />
                  <a href="#" onClick={Continue}  className="btn btn-success2">Continue</a>
                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }


            {stage == 3 ? (
            <div className="  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className=" mt-4">
                <h5 className="text-center theColor">
                
                  <FontAwesomeIcon icon={faUnlock} />
                   <br />
                  Approve EGR
                  </h5>
                  <p className="text-center">You need to give the smart contract access to spend {amount} EGR on behalf of you, as to enable your transaction go through.
                  <br />
               
            <button
            className="btn btn-link text-success btn-block"
            onClick={doUnluck}
        >
          Approve
        </button>{" "}
        <br />
        <br />
                  <button className="btn btn-success2" onClick={unluckTokenFinal}>
                    Approve Infinity
                    </button>
                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }

            {stage == 4 ? (
            <div className=" intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className=" mt-4">
                <h1 className="text-center text-danger">
                
                  <FontAwesomeIcon icon={faTimes} />
                   <br />
                  Fail
                  </h1>
                  <p className="text-center text-danger">{pmsg}
                  <br />
               
          
                 
                  <a href="#" onClick={Continue}  className="btn btn-success2">Continue</a>

                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div> ) : null }
                    </TabPane>
                    
                  </TabContent>
                </div>
              </div>
            </div>
           
          </Col>
        
    )
}


export default Trade;
