import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { API_URL as api_url,} from '../../../actions/types';
import {
  
  Modal,
  ModalHeader,
  ModalBody,
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
  
} from 'reactstrap';
import classnames from 'classnames';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import egorasface from '../../../img/egoras-face.png';
import chart from '../../../img/capture1.PNG';
// import Footer from '../parts/Footer';
// import '../../../Custom-modal.css';
// import '../../../Dash1.css';

import loader, { Loader } from '../loader/Loader';
import { parseEther } from "@ethersproject/units";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner, faTimes, faUnlock } from '@fortawesome/free-solid-svg-icons';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from "@web3-react/core";
import Avatar from 'react-avatar';
import {unluckToken, transactReceipt, getEthBalance, getTokenBalance, checkAllowance, saveERC20, saveETH}  from "../../../web3/index"

export const Stakes = ({match}) => {
  // const { buttonLabel, className } = props;
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [assets, setAssets] = useState([]);

  const [savingData, setSavingData] = useState({
    amount: "",
    recieve: 0,
    pText: "Proccessing...",
    pmsg: "",
    hash: "",
    duration: "0",
    asset: "0",
    select_coin_address: "", 
    token: "",
    market: "",
    token_balance: 0,
    market_balance: 0,
    tokenAddress: "",
    marketAddress: "",
    isDeposite: false
  });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const [modal, setModal] = useState(false);
  const onChange = (e) => {
    setSavingData({ ...savingData, [e.target.name]: e.target.value });
    
    
  };
  const stakeToggle = (e) => {
    e.preventDefault();
    for (let index = 0; index < savings.length; index++) {
      const element = savings[index];

      if (element.contract_address == e.currentTarget.id) {
        console.log("forn", );
        var res = savings[index].name.split("/");
        let tokenSymbol = res[0];
        let marketSymbol = res[1];
        setAssets(res);
        
    
        setSavingData({...savingData, ['marketAddress']: savings[index].marketAddress, ['tokenAddress']: savings[index].tokenAddress, ['isDeposite']: true, ['market_balance']: savings[index].market, ['token_balance']: savings[index].token, ['token']: tokenSymbol,  ['market']: marketSymbol, ['select_coin_address']: savings[index].contract_address})
        setModal(!modal);
      }
      
    }
    
  }

  const closeModal = () => setModal(!modal);
  

  const [activeTab, setActiveTab] = useState('1');
  const [savings, setSavings] = useState([]);
  const toggle = tab => {
    if(tab == "1"){
      setSavingData({...savingData, ['isDeposite']: true});
    }else{
      setSavingData({...savingData, ['isDeposite']: false});

    }
    if(activeTab !== tab) setActiveTab(tab);
  }

  
  const context = useWeb3React();
  const {
    library,
    account
   } = context;

  useEffect(  ()  => {
    setLoading(true);
    const owner = account ? account : "none";
    try {
      localStorage.setItem('unlocking', false);
      const res = axios.get(api_url+'/api/market/balances/'+owner, null, config);
     
      res.then((data =>{
        console.log(data.data.data);
        if(data.data.data.length > 0){
          setLoading(false);
          setSavings(data.data.data);
         
        
        };
      }));
     
    
    } catch (err) {
  console.log(err);
  
      
    }


    console.log();
  }, [account]);
  
  
  const {amount, token_balance, market_balance, recieve, marketAddress, tokenAddress, isDeposite, asset, duration, pText, hash, pmsg, token, market, select_coin_address} = savingData;

  const  Continue = async (e) => {
    e.preventDefault();
    setStage(0);
    setIsProcessing(false);
  }
  const doUnluck = async (e) => {
    
    setStage(4);
    setIsProcessing(true);
    setSavingData({...savingData, ['pText']: "Transacting with blockchain, please wait..."})
    let currentAddress = asset == market ? marketAddress : tokenAddress;
    console.log(amount, "the amount", currentAddress);
    let ret = await unluckToken(parseEther(amount.toString(), "wei").toString(), currentAddress, select_coin_address, library.getSigner());
    if(ret.status == true){
      localStorage.setItem('unlocking', true);
      localStorage.setItem('unlockingHash', ret.message)
    setSavingData({...savingData, ['pText']: "Unlocking please wait aleast 1/2 minutes"})
  
    
    }else{
    setStage(3);
    setIsProcessing(false);
    setSavingData({...savingData, ['pmsg']: "Did not complete successfully!"})
    }
  
  }
  const deposit = async ()  => {
    setIsProcessing(true);
    let value = parseEther(amount.toString(), "wei").toString();
    let isMarket = asset == market ? true : false;
    let currentAddress = asset == market ? marketAddress : tokenAddress;
   
    if(asset == "ETH"){
      let balence = await getEthBalance(account, library);
      if(parseFloat(balence.message) >=  parseFloat(value)){
        let rs = await saveETH(select_coin_address, value, isMarket,duration, library.getSigner());
        if(rs.status == true){
            
          setSavingData({...savingData, ['hash']: rs.message})
          setIsProcessing(false);
          setStage(1)
        }else{
          setSavingData({...savingData,  ['pmsg']: "Transaction did not complete successfully!"})
      setStage(3)
      setIsProcessing(false);
        }
      }else {
        setSavingData({...savingData, ['pmsg']: "non-sufficient funds"})
      setStage(3)
      setIsProcessing(false);
      }
    }else{
      let bT = await getTokenBalance(currentAddress, account, library.getSigner());
      
      if(parseFloat(bT.message) >=  parseFloat(value)){
        let check = await checkAllowance(select_coin_address, currentAddress, account, value, library.getSigner());
        if(check.status == true){
          let rs = await saveERC20(select_coin_address, value, isMarket,duration, library.getSigner());
          if(rs.status == true){
              
            setSavingData({...savingData, ['hash']: rs.message})
            setIsProcessing(false);
            setStage(1)
          }else{
            setSavingData({...savingData,  ['pmsg']: "Transaction did not complete successfully!"})
        setStage(3)
        setIsProcessing(false);
          }
        }else{
          setIsProcessing(false);
          setStage(2)
        }
      }else{
        setSavingData({...savingData, ['pmsg']: "non-sufficient funds"})
        setStage(3)
        setIsProcessing(false);
      }
    }
  }
  const unluckTokenFinal = async (e) => {
    setStage(4);
    setIsProcessing(true);
    setSavingData({...savingData, ['pText']: "Transacting with blockchain, please wait..."})
    let currentAddress = asset == market ? marketAddress : tokenAddress;
    //(amount, coin_address, ex_address, signer)
    let ret = await unluckToken(parseEther((10 ** 18 * 100).toString(), "wei").toString(), currentAddress, select_coin_address, library.getSigner());
    if(ret.status == true){
      localStorage.setItem('unlocking', true);
      localStorage.setItem('unlockingHash', ret.message)
      setSavingData({...savingData, ['pText']: "Unlocking please wait aleast 1/2 minutes"})
  
    
    }else{
    setStage(3);
    setIsProcessing(false);
    setSavingData({...savingData, ['pmsg']: "Did not complete successfully!"})
    }
  
  }

  const isFormValid =
  parseFloat(amount) > 0 && asset != "0" && duration != "0";
 
const isValid = isFormValid == false || isProcessing == true;
setInterval(() => {
 
  if(localStorage.getItem('unlocking') == "true"){
   
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
   
   <div>
    {!loading ? (
      <Fragment>
      <div className="" id="">
      {/* main-container */}
      {/* id="container" */}
        {/* <Sidebar /> */}

        <div id='' className=' mt-4'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className="widget widget-table-two">

                  <div className="widget-content">
                      <div className="table-responsive">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th className='plain-th'><div className="th-content">Assets</div></th>
                                      <th className='plain-th'><div className="th-content">Total Savings</div></th>
                                      <th className='plain-th'><div className="th-content">Rewards APY</div></th>
                                      <th className='plain-th'><div className="th-content th-heading"></div></th>
                                      <th className='plain-th'><div className="th-content"></div></th>
                                  </tr>
                              </thead>
                              <tbody>

                              {
                        savings.map((saving, i) =>{
                         
                          var res = saving.name.split("/");
                          let tokenSymbol = res[0];
                          let marketSymbol = res[1];

                          
                          return (
                            <tr>
                            <td>
                              <div className="td-content customer-name">
                                <div className="media">
                                    {/* <img className="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" /> */}
                                    <Avatar size="40" round={true}  name={saving.name}  src="" />
                                    <div className="media-body">
                          <span className="media-heading token-nm">{saving.name}</span>
                                    </div>
                                </div>
                              </div>
                            </td>
                          <td><div className="td-content product-brand">{parseFloat(saving.market ? saving.market : 0)}<sup className="text-success font-weight-bolder">{marketSymbol}</sup> {" / "} {parseFloat(saving.token ? saving.token : 0)}<sup className="text-warning font-weight-bolder">{tokenSymbol}</sup></div></td>
                            <td><div className="td-content">0%</div></td>
                            <td><div className="td-content pricing px-1"><button id={saving.contract_address}  onClick={e => stakeToggle(e)} className="btn btn-outline-egoras btn-block mb-2">Deposit</button></div></td>
                            <td><div className="td-content px-1"><button className="btn btn-outline-egoras btn-block mb-2">Withdraw</button></div></td>
                        </tr>
                          )
                         }
                        )};
                         
                         
                                  
                                 
                                 
                                  
                                 
                                  
                                
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/* <Footer /> */}
         
        </div>  
      
      </div>
      <Modal isOpen={modal}  className='custom-modal-dialog'>
        <ModalHeader toggle={closeModal} className='border-bottom-0'></ModalHeader>
        <ModalBody>
          <div className='row'>
            <div className='col-md-12'>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' }, 'text-black market-coin')}
                    onClick={() => { toggle('1'); }}
                  >
                    Deposit
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' }, 'text-black market-coin')}
                    onClick={() => { toggle('2'); }}
                  >
                    Withdraw
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                   <h5 className="text-right">
                   <div className="td-content product-brand">{parseFloat(market_balance ? market_balance : 0)}<sup className="text-success font-weight-bolder">{market}</sup> {" / "} {parseFloat(token_balance ? token_balance : 0)}<sup className="text-warning font-weight-bolder">{token}</sup></div>

                   </h5>
    
                      
                    </Col>
                  </Row>
                </TabPane>
                {stage == 0 ? (
 <div className='pt-2'>
 <div className="row">
<div class="col">
<label htmlFor="asset">Asset</label>
<select id="asset" value={asset} name="asset" className="form-control" onChange={(e) => onChange(e)}>
<option value="0">Choose asset</option>
{assets.map((asset, index) => (<option value={asset}>{asset}</option>))}
</select>
</div>


{isDeposite ? (  
    <div class="col">
    <label htmlFor="duration">Duration</label>
      <select id="duration"  value={duration} name="duration" className="form-control" onChange={(e) => onChange(e)}>
        <option  value="0">Choose duration</option>
        <option  value="30">30 Days</option>
        <option  value="60">60 Days</option>
        <option  value="90">90 Days</option>
        <option  value="365">365 Days</option>
        
      </select>
    </div>

   ) : null}
</div>
   
   {isDeposite ? (  
     <div>
       <label className='text-black'>How much would you like to deposit?</label>
   <div className='input-group'>
     
     <input
       placeholder='0.0'
      
       type='number'
       className='form-control'
       name='amount'
       onChange={(e) => onChange(e)}
     />
   </div>
     </div>
   ) : null}

   {!isDeposite ? ( 
     <div className='d-block mt-2 d-flex j-space-around'>
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
   </div>

   ) : null}
   
   <div className='pt-3'>
     {isDeposite ? ( 
       <button onClick={deposit} disabled={isValid} className='btn btn-success2 btn-block text-black mt-2'>
                          

       {isProcessing ? (<span>
         <FontAwesomeIcon icon={faSpinner} spin /> Depositing...
       </span>) : 
       (<span>Deposit {asset}</span>)
       }
     </button>
     ) : null}
   
     {!isDeposite ? (   <button
       className='btn btn-danger btn-block'
       onClick={stakeToggle}
     >
       <span className='font-weight-bold text-black'>Withdraw</span>
     </button>) : null}
   

   </div>
 </div>
                ) : null}
               
               {stage == 1 ? (
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

 </div>
               ) : null}
               

               {stage == 2 ? ( 
 <div className="  intro-create-a-pair">
 <div className="inner">
    <div className="inner-2">
    <div className=" mt-4">
     <h5 className="text-center theColor">
     
       <FontAwesomeIcon icon={faUnlock} />
        <br />
       Approve {asset}
       </h5>
       <p className="text-center">You need to give the smart contract access to spend {amount} {asset} on behalf of you, as to enable your transaction go through.
       <br />
    
 <button
 className="btn btn-link text-success btn-block"
 onClick={doUnluck}
>
Approve
</button>{" "}
<br />
<br />
       <a href="#" className="btn btn-success2" onClick={unluckTokenFinal}>
         Approve Infinity
         </a>
       </p>
       
   </div>
     
            
    </div>

    
 </div>

 </div>
               ) : null}
           
           {stage == 3 ? ( 
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
          
            </div>

           ) : null }

{stage == 4 ? (
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
            
              </TabContent>
            </div>
            {/* <div className='col-md-6'>
              <h6>Total Stakes:<img className='img-fluid ml-2' width='20' src={egorasface} alt='...' /> <span>4400</span></h6>
              
              <div className='text-center'>
                <img className='img-fluid' src={chart} alt=""/>
              </div>
            </div> */}
          </div>
        </ModalBody>

        

      
      </Modal>
      </Fragment>
    ): (<Loader />) }
    </div>
  )
};

export default Stakes;
