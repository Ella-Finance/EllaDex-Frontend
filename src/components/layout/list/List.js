import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
  } from "@web3-react/core";

  import {createExchange}  from "../../../web3/index"

const List = () => {
    const [hash, setHash] = useState("");
    const [stage, setStage] = useState(0);
    const [formData, setFormData] = useState({
        isEthereum: false,
        isBaseEthereum: false,
        base: "",
        token: "",
        token_address: "",
        base_address: "",
        priceFeedAddress: "",
        
        
    });
    const onChange = e => {

      
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const {isEthereum,  base, token, token_address, isBaseEthereum, base_address, priceFeedAddress} = formData;

    const back = () =>{
        setStage(stage - 1);
    }

    const forward = () =>{
        setStage(stage + 1);
    }
    const context = useWeb3React();
    const {
     library,
     account
    } = context;
    const notSame = base.toLowerCase() == token.toLowerCase();
    const stepOneValid = base.length > 0 && token.length > 0 && !notSame;

    const walletBase = base_address.length > 40;
    const walletToken = token_address.length > 40;
    const notSameAddr = token_address.toLowerCase() == base_address.toLowerCase();

    const walletBoth = token_address.length > 40 && base_address.length > 40 && !notSameAddr;
    let checkEither = false;

    if(base.toLowerCase() == "eth" || token.toLowerCase() == "eth"){
        checkEither = token_address.length > 40 || base_address.length > 40;
    }else{
        checkEither = token_address.length > 40 && base_address.length > 40;
    }
    const isFormValid = stepOneValid && checkEither && priceFeedAddress.length > 40;

    const createEx = async ()  => {
        setStage(4);
        let market = token+"/"+base;
        let is_ethereum = token.toLowerCase() == "eth" || base.toLowerCase() == "eth";
        let baseAddr = base_address;
        let tokenAddr = token_address;
        if(base_address.length < 40){
            baseAddr = "0x000000000000000000000000000000000000dead";
        }

        if(token_address.length < 40){
            tokenAddr = "0x000000000000000000000000000000000000dead";
        }
        let ret = await createExchange(baseAddr, tokenAddr, is_ethereum, priceFeedAddress, market, library.getSigner());
  
        console.log(ret);
       
        if(ret.status == true){
         
         
           
           setStage(5);
           setHash(ret.message);
          
         }else if(ret.status == false){
         
           setStage(6);
          
         }
    }
    return (
        <div>
            <React.Fragment>

           {stage == 0 ? (
            <div className="col-md-6  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h5>Create a pair</h5>
               <p>Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>
               <a className="btn btn-success">Read more about creating a pair</a>
               </div>

               
            </div>
            <button className="btn btn-success " onClick={forward}>Start</button>
            </div>
           ) : null}
            
            {stage == 1 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h5>Create a pair</h5>
                
                <div className="input-wrapper">
                    <div className="form-group">
                        <label htmlFor="base">Base <small>Symbol</small></label>
                        <input type="text" className="form-control" placeholder="eg. ETH" id="base" name="base" value={base} onChange={e => onChange(e)} />
                    </div>
                </div>
<br></br>
                <div className="input-wrapper">
                    <div className="form-group">
                        <label htmlFor="token">Token <small>Symbol</small></label>
                        <input type="text" className="form-control" placeholder="eg. EGR"  id="token" name="token" value={token} onChange={e => onChange(e)} />
                    </div>
                </div>

               <button className="btn btn-success" onClick={forward} disabled={!stepOneValid}>Next</button>
         
            <button className="btn btn-warning mr-2" onClick={back}>Back</button>
               </div>

               
            </div>
          
            </div>
           ) : null}

{stage == 2 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h5>Create a pair</h5>
                {base.toLowerCase() == "eth" ||  token.toLowerCase() == "eth" ? (
                
                <div>

                    {token.toLowerCase() !== "eth" ? (
                            <div className="input-wrapper">
                    <div className="form-group">
                        <label htmlFor="token_address">Enter {token.toUpperCase()} <small>Contract address</small></label>
                        <input type="text" className="form-control" placeholder="eg. 0xc317...75fD" id="token_address" value={token_address} name="token_address" onChange={e => onChange(e)} />
                    </div>
                    <button className="btn btn-success" onClick={forward} disabled={!walletToken}>Next</button>
         
         <button className="btn btn-warning mr-2" onClick={back}>Back</button>
                </div>
                        ) : (
                            <span>
                                {
                                base.toLowerCase() !== "eth" ? (
                                        <div className="input-wrapper">
                                        <div className="form-group">
                                            <label htmlFor="base">Enter {base.toUpperCase()} <small>Contract address</small></label>
                                            <input type="text" className="form-control" placeholder="eg. 0xc317...75fD" name="base_address" id="base_address" value={base_address} onChange={e => onChange(e)} />
                                        </div>
                                        <button className="btn btn-success" onClick={forward} disabled={!walletBase}>Next</button>
         
         <button className="btn btn-warning mr-2" onClick={back}>Back</button>
                                    </div>
                                    ) :null
                                }
                            </span>
                     
                        )
                    }
                </div>
                
                ) : (
               <div>
                <div className="input-wrapper">
                <div className="form-group">
                                            <label htmlFor="base">Enter {base.toUpperCase()} <small>Contract address</small></label>
                                            <input type="text" className="form-control" placeholder="eg. 0xc317...75fD" name="base_address" id="base_address" value={base_address} onChange={e => onChange(e)} />
                                        </div>
                </div>
<br></br>
                <div className="input-wrapper">
                <div className="form-group">
                        <label htmlFor="token_address">Enter {token.toUpperCase()} <small>Contract address</small></label>
                        <input type="text" className="form-control" placeholder="eg. 0xc317...75fD" id="token_address" value={token_address} name="token_address" onChange={e => onChange(e)} />
                    </div>
                </div>

               <button className="btn btn-success"  onClick={forward} disabled={!walletBoth}>Next</button>
         
            <button className="btn btn-warning mr-2" onClick={back}>Back</button>
           </div>
                    )}
               </div>

               
            </div>
          
            </div>
           ) : null}

{stage == 3 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h5>Create a pair</h5>
                
                <div className="input-wrapper">
                    <div className="form-group">
<label htmlFor="base">{token.toUpperCase()}{"/"}{base.toUpperCase()} <small>Chainlink price feed address</small></label>
                        <input type="text" className="form-control" placeholder="eg. 0xc317...75fD" id="priceFeedAddress" name="priceFeedAddress" value={priceFeedAddress} onChange={e => onChange(e)} />
                    </div>
                </div>
<br></br>
            

               <button className="btn btn-success" onClick={createEx} disabled={!isFormValid}>Deploy pair</button>
         
            <button className="btn btn-warning mr-2" onClick={back}>Back</button>
               </div>

               
            </div>
          
            </div>
           ) : null}

{stage == 4 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <h1 style={{marginTop: "20%"}} className="text-center theColor">
        <FontAwesomeIcon icon={faSpinner} spin /><br />
       <small>Proccessing...</small>
       </h1>
                
                       
               </div>

               
            </div>
          
            </div>
           ) : null}

{stage == 5 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className="col-md-12 mt-4">
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
                  <a href="/"  className="btn btn-success">Continue</a>
                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div>
           ) : null}


{stage == 6 ? (
            <div className="col-md-4  intro-create-a-pair">
            <div className="inner">
               <div className="inner-2">
               <div className="col-md-12 mt-4">
                <h1 className="text-center text-danger">
                
                  <FontAwesomeIcon icon={faTimes} />
                   <br />
                  Fail
                  </h1>
                  <p className="text-center text-danger">Transaction was not successful.
                  <br />
               
          
                  <a href="/"  className="btn btn-success">Continue</a>
                  </p>
                  
              </div>
                
                       
               </div>

               
            </div>
          
            </div>
           ) : null}


            </React.Fragment>
        </div>
    )
}

export default List;
