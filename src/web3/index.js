import { Contract } from '@ethersproject/contracts'
import serviceABI  from "./contracts/service.json";
import exchangeABI  from "./contracts/exchange.json";
import erc20  from "./contracts/erc20.json";


  const contractServiceInstance = (signer) => {
    return new Contract(serviceABI.address, serviceABI.abi, signer);
  };

  const contractExchangeInstance = (signer, address) => {
    return new Contract(address, exchangeABI.abi, signer);
  };
  
  const erc20Instance = (signer, address) => {
    return new Contract(address, erc20.abi, signer);
  };

  const createExchange = async (market_address, token_address, is_ethereum, price_address, market, signer) =>{
    try {
      const instance = contractServiceInstance(signer);
      let result = await instance.createExchange(market_address, token_address, is_ethereum, price_address, market);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
       console.log(error);
      return {
        message: error,
        status: false,
      };
     }
  }
  
  const withdrawERC20 = async (contract_address, amount, to, isMarket, signer) => {
    
    try {
      const instance = contractExchangeInstance(signer, contract_address);
      let result = await instance.withdraw(amount, to, isMarket);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
     }

  }


  const getEthBalance = async (account, library) => {
    
    try {
      let result = await library.getBalance(account);
      return {
        message: result.toString(),
      status: true,
      }
     } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
     }

  }

  const getTokenBalance = async (smart_contract_addres, account, signer) =>{

    try {
      const instance = erc20Instance(signer, smart_contract_addres);
      let result = await instance.balanceOf(account);
      return {
        message: result.toString(),
      status: true,
      }
     } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
     }

    
  }
  const checkAllowance = async (ex_address, coin_address, owner, amount, signer) =>{
    try {
      const instance = erc20Instance(signer, coin_address);
      let result = await instance.allowance(owner, ex_address);
    console.log(result);
      if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
        return {
        status: true,
        }
      }else{
        return {
          status: false,
          }
      }
     
    } catch (error) {
      return {
        status: false,
        }
    }
  }
  
  const callSwapBase1 = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swapBase1({value: amount});
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

   const callSwap2 = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swap2({value: amount});
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

   const callSwapBase2 = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swapBase2(amount);
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

  
   const callSwapBase = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swapBase(amount);
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

   const callSwap = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swap(amount);
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

   const callSwap1 = async (contract_address, amount, signer) => {
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.swap1(amount);
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }
   

  const saveERC20 = async (contract_address, amount, isMarket, duration, signer) => {
   try {
    const instance = contractExchangeInstance(signer, contract_address);
    let result = await instance.save(amount, isMarket, duration);
    return {
      message: result.hash,
    status: true,
    }
   } catch (error) {
    console.log(error);
    return {
      message: error,
      status: false,
    };
   }
    

  }

  const saveETH = async (contract_address, amount, isMarket, duration, signer) => {
    console.log(contract_address, amount, isMarket, signer);
    try {
     const instance = contractExchangeInstance(signer, contract_address);
     let result = await instance.save1(isMarket, duration, {value: amount});
     return {
       message: result.hash,
     status: true,
     }
    } catch (error) {
     console.log(error);
     return {
       message: error,
       status: false,
     };
    }
     
 
   }

  const unluckToken = async (amount, coin_address, ex_address, signer) => {
    try {
      const instance = erc20Instance(signer, coin_address);
      let result = await instance.approve(ex_address, amount);
      return {
        message: result.hash,
      status: true,
      }
    } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
    }
  }

  const transactReceipt = async (hash, library) =>{
    try {
      let result = await library.getTransactionReceipt(hash);
      return {
        message: result,
      status: true,
      }
    } catch (error) {
      return {
        message: error,
        status: false,
      };
    }
    
  }

   export {
    createExchange,
    saveERC20,
    withdrawERC20,
    callSwapBase1,
    getEthBalance,
    getTokenBalance,
    checkAllowance,
    unluckToken,
    transactReceipt,
    callSwapBase2,
    callSwapBase,
    callSwap,
    callSwap1,
    callSwap2,
    saveETH,
   
   };