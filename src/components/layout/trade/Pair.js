import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarkets, fetchTrades } from '../../../actions/exchange';
import Moment from 'react-moment';
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
import classnames from 'classnames';
import { Link } from 'react-router-dom';
const Pair = ({markets, fetchMarkets, fetchTrades, trades, market}) => {
  const [hasProData, setHasProData] = useState(false);
    const [pair, setPair] = useState([]);
    const [isFetchingPair, setIsFetchingPair] = useState(true);
    const [isFetchingTrades, setIsFetchingTrades] = useState(true);
    const [tradesData, setTrades] = useState([]);
        
    const [activeTab, setActiveTab] = useState('1');
    const [activeTab2, setActiveTab2] = useState('1');
  
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
  
    const toggle0 = () => setTooltipOpen(!tooltipOpen);
    const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
      };
    
      const toggle2 = tab2 => {
        if (activeTab2 !== tab2) setActiveTab2(tab2);
      };
    
      useEffect(() => {


        if (markets.length == 0 && typeof markets.data == "undefined") {


            fetchMarkets();
        }

        if (typeof markets.data !== "undefined" && markets.data.length > 0) {
          console.log(markets);
          setIsFetchingPair(false);
           setPair(markets.data);


      }

    }, [markets]);

    useEffect(() => {


      if (trades.length == 0 && typeof trades.data == "undefined") {


          fetchTrades(market.address);
      }

      if (typeof trades.data !== "undefined" && trades.data.length > 0) {
       
         setIsFetchingTrades(false);
         setTrades(trades.data);


    }

  }, [trades]);


    return (
        
            <Col sm='3'>
            <div className='statbox widget p-2 mb-2 box box-shadow'>
              <div className='widget-content'>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' }, 'text-black market-coin')}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      PAIRS
                    </NavLink>
                  </NavItem>
                  
                  
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <div className='table-responsive'>
                      <table className='table market-T mb-4'>
                        <thead>
                          <tr>
                            <th>Pair</th>
                            <th>Price</th>
                            <th>Change</th>
                          </tr>
                        </thead>
                        <tbody>
                         
                        
                          {
                        pair.map((pair, i) =>{
                          let increase = parseFloat(pair.closed) - parseFloat(pair.price);
                        
                          
                          let diff = "";
                          let percentage = "";
                          if (parseFloat(pair.price) > 0) {
                           
                            diff = increase / parseFloat(pair.price) * 100;
                            
                            if(diff > 0){
                              percentage = "<span class='text-success'>"+diff+" %</span>";

                            }else if(diff < 0){
                              percentage = "<span class='text-danger'>"+diff.toFixed(2)+" %</span>";

                            }else{
                              percentage = "<span class='text-muted'>0 %</span>";

                            }
                           
                        }
                          return (
                            <tr>
                            <td><Link to={"/trade/"+pair.market}>{pair.market}</Link></td>
                          <td className=''>{parseFloat(pair.price) > 0 ? parseFloat(pair.price).toFixed(8): 0}</td>
                            <td className='text-center'>
                              <span dangerouslySetInnerHTML={{__html: percentage}}></span>
                            </td>
                          </tr>
                          )
                         }
                        )};
                         
                         
                         
                         
                        
                        </tbody>
                      </table>
                    </div>
                  </TabPane>
                  
                 
                </TabContent>
              </div>
            </div>
            <div className='statbox widget p-2 box box-shadow'>
              <div className='mb-2 mx-2'>
                <h4>Trade History</h4>
              </div>
              <div className='widget-content'>
                <div className='table-responsive'>
                  <table className='table market-T mb-4'>
                    <thead>
                      <tr>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td className=''>
                          <span className='text-danger'>0.000454</span>
                        </td>
                        <td className=''>956</td>
                        <td>21.34.11</td>
                      </tr> */}
                      
                     
                      {
                        tradesData.map((trade, i) =>{
                          let status = trade.isBase ? "text-success" : "text-danger";
                          return (
                            <tr>
                        <td className=''>
                          <span className={status}>{parseFloat(trade.price).toFixed(8)}</span>
                        </td>
                        <td className=''>{parseFloat(trade.value).toFixed(8)}</td>
                        <td>
                        <Moment fromNow ago>
                {trade.createdAt}
            </Moment>
                        </td>

                      </tr>
                          )
                         }
                        )};
                      
                    
                     

                      
                      
                    
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        
    )
}

const mapStateToProps = state => ({
  markets: state.markets,
  trades: state.trades
});
export default connect(mapStateToProps, { fetchMarkets, fetchTrades })(Pair);

