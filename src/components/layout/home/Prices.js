import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMarkets } from '../../../actions/exchange';

import money from '../../../img/money.png';
import sale from '../../../img/sale.png';
import swap from '../../../img/swap.png';
import shield from '../../../img/shield.png';
import ex from '../../../img/ex.png';
import gg57 from '../../../img/57gg.jpg';
import Footer from '../parts/Footer';
import Avatar from 'react-avatar';

const Prices = ({markets, fetchMarkets}) => {
  const [pair, setPair] = useState([]);
  const [isFetchingPair, setIsFetchingPair] = useState(true);
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

  return (
    <div>
    <section>
      <div className='position-relative'>
        <div className='part-landing'></div>
        <div className='container'>
          <div className='text-white'>
            <div className='row'>
              <div className='col-lg-12 mx-auto'>
                <div className="widget widget-table-two p-1">

                  <div className="widget-content">
                      <div className="table-responsive">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th><div className="th-content">#</div></th>
                                      <th className="w-55"><div className="th-content th-name">Name</div></th>
                                      <th><div className="th-content">Price</div></th>
                                      <th><div className="th-content">Change</div></th>
                                     
                                      <th><div className="th-content">Trade</div></th>
                                  </tr>
                              </thead>
                              <tbody>
                              {
                        pair.map((pair, i) =>{
                          let token = pair.market.split("/")[0].toLowerCase();
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
                            <td><div className="td-content product-brand">{i + 1}</div></td>
                            <td className="w-45">
                           
                              <Link to={"/trade/"+pair.market}><div className="coin-12ds">
                              <Avatar round={true} src={`https://rawdev.com.ng/cdn/uploads/${token}.png`} name={pair.market} size="36"  className="coin-12ds_img"/>
                                <div className="coins-desc">
                                  <h4 className="coin-n1">{pair.market}</h4>
                                  {/* <h4 className="coin-n2">ELLA</h4> */}
                                </div>
                              </div></Link>
                            </td>
                            <td><div className="td-content text-black">{parseFloat(pair.price) > 0 ? parseFloat(pair.price).toFixed(8): 0}</div></td>
                            <td><div className="td-content text-black"><span className="" dangerouslySetInnerHTML={{__html: percentage}}></span></div></td>
                            
                            <td><div className="td-content">
                            <Link className='btn btn-egoras' to={"/trade/"+pair.market}>Swap</Link>
                              
                              </div></td>
                        </tr>
                          )
                         }
                        )};
    {/* <tr>
                            <td><Link to={"/trade/"+pair.market}>{pair.market}</Link></td>
                          <td className=''>{parseFloat(pair.price) > 0 ? parseFloat(pair.price).toFixed(8): 0}</td>
                            <td className='text-center'>
                              <span className='text-danger'>0%</span>
                            </td>
                          </tr> */}
                                 
                                  
                            
                          
                              </tbody>
                          </table>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='col-md-9'>
              <div className='my-5'>
                <h1 className="">Let your crypto work for you</h1>
                <p className="text-black">Save your cryptocurrencies on Ella protocol and receive ELLA credit saving rewards, which are created through the inflationary monetary policy and also receive Ella exchange rewards, which are fees generated from the exchange.</p>
                <Link className='btn btn-egoras' to='/savings'>Start earning</Link>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div>
            {
                        pair.map((pair, i) =>{
                          let token = pair.market.split("/")[0].toLowerCase();
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
                            <a href="">
                <div className='earn-div'>
                  <div className='earn-coin-link'>
                  <Avatar round={true} name={pair.market} size="36" src={`https://rawdev.com.ng/cdn/uploads/${token}.png`}  className="earn-coin-img"/>
                            
                   
                    <h2 className="">{pair.market}</h2>
                    {/* <h3>BTC</h3> */}
                  </div>
                  <div className='earn-amount'>
                    <span className="" dangerouslySetInnerHTML={{__html: percentage}}></span>
                  </div>
                </div>
              </a>
                          )
                        })}
                      
              
              
            
              
              
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='my-4'>
          <h1 className="portfolio-header">Buy or Sell cryptocurrency with zero spillage</h1>
          <p className='text-center'>Ella protocol has a variety of features that make it the best place to start trading</p>
          <div className='my-5'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='portfolio-item'>
                  <div className='portfolio-img'>
                    <img src={shield} width='45' alt="avatar" />
                  </div>
                  <div>
                    <h3 className="">100% Trustless</h3>
                    <p className="">No account creation, No KYC . Trade directly from your ethereum wallet.</p>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-img'>
                    <img src={sale} width='45' alt="avatar" />
                  </div>
                  <div>
                    <h3 className="">Infinte Liquidity</h3>
                    <p className="">No orderbook. Interact directly with the smart contract.</p>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-img'>
                    <img src={money} width='45' alt="avatar" />
                  </div>
                  <div>
                    <h3 className="">Zero Spillage</h3>
                    <p className="">Trade at the current market rate at zero slippage. Anyone with a supported ethereum wallet can trade.</p>
                  </div>
                </div>
                <div className='portfolio-item'>
                  <div className='portfolio-img'>
                    <img src={swap} width='45' alt="avatar" />
                  </div>
                  <div>
                    <h3 className="">Instant Swap</h3>
                    <p className="">Ella Trade permits you to get in and out of positions quickly at the market price.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div>
                  <img src={ex} className='img-fluid' alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='empower'>

      </div> */}
      {/* <section className="empower">
    
        <article className="empower-content empower-content--right">
            <img src={rr54} className="circle--background__mobile bg-pearl" alt="Background placeholder" />
            <div className="circle--background bg-pearl"></div>
            <img src={rt54} className="empower-content__person empower-content__person--animation" alt="Empower the poorest" data-90p-top="margin-top:10%;" data-60p-top="margin-top:0;" />

            <div className="empower-content__title--animation h-314" data-100p-top="margin-top:20%;" data-40p-top="margin-top:0;">
                <div className="empower-content__title-holder js-empower-content__title-holder is-shown">
                    <h2 className='text-uppercase mb-1'>
                      We use 50% of our fees to<br />
                      expand financial accessibility to help underserved communities thrive at same time.
                    </h2>
                    
                </div>
            </div>
            <img src={fg43} className="empower-content__image empower-content__image--animation" alt="Empower the poorest" data-100p-top="margin-top:10%;" data-50p-top="margin-top:0;" />
            <div className="empower-content__desc empower-content__desc--animation" data-90p-top="margin-top:10%;" data-50p-top="margin-top:0;">
                <h3>
                    We believe
                </h3>
                <div className="separator separator--empower">
                    <span className="separator__line--left pearl-border"></span>
                    <span className="separator__arrow separator__arrow--up pearl-border"></span>
                    <span className="separator__line--right pearl-border"></span>
                </div>
                <strong>
                    that by giving people the tools to lead healthy, productive lives, we can help them lift themselves out of poverty.
                </strong>
                <p>
                    Every year, millions of people find ways to transition out of poverty—by adopting new farming technologies, investing in new business opportunities, or finding new jobs. We know women and girls have a unique power to reshape societies. When you invest
                    in a woman’s health and empowerment, it has a ripple effect, helping families, communities, and countries achieve long-lasting benefits.
                </p>
            </div>
        </article>
      </section> */}
      <div className='container'>
        <div className='my-4 g-start text-center'>
          <h1 className="main1">Get started in a few minutes</h1>
          <div className='g-start-items mx-auto'>
            <div className='text-center'>
              {/* <img src={ngoraslogo} width='70' alt="avatar" /> */}
              <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM32 20c-11.05 0-20 7.16-20 16v18h40V36c0-8.84-8.95-16-20-16z" fill="#adadad"></path><path d="M64 36H0v24h64V36z" fill="#d6d6d6"></path><path d="M52 36H12v24h40V36z" fill="#000000"></path><path d="M33 42h-2v12h2V42z" fill="#fff"></path><path d="M38 49v-2H26v2h12z" fill="#fff"></path></svg>
              <h3 className="g-start-h">Connect Your Wallet</h3>
            </div>
            <div className='g-start-divider'></div>
            <div className='text-center'>
              {/* <img src={ngoraslogo} width='70' alt="avatar" /> */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z" fill="#d6d6d6"></path><path d="M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z" fill="#adadad"></path><path d="M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z" fill="#000000"></path><path d="M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z" fill="#fff"></path></svg>
              <h3 className="g-start-h">Add liquidity</h3>
            </div>
            <div className='g-start-divider'></div>
            <div className='text-center'>
              {/* <img src={ngoraslogo} width='70' alt="avatar" /> */}
              <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 0H24v64h32V0z" fill="#d6d6d6"></path><path d="M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z" fill="#adadad"></path><path d="M24 8v52s24-10.75 24-24V8H24z" fill="#000000"></path><path d="M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z" fill="#fff"></path></svg>
              <h3 className="g-start-h">Start Trading</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="kCPVOJ">
        <div className="cjVOwj">
          <div className="SNCQV">
            <h1 className="gdyEUj jyUwfm">Let your crypto work for you</h1>
            <p className="gdyEUj ddxhgI">Stake your cryptocurrencies on egoras protocol and receive ELLA staking rewards, which are created through the inflationary monetary policy and also receive egoras exchange rewards, which are fees generated from the exchange.</p>
            <Link className="btn btn-egoras" to="/stakes">
              <span className="hnVSGZ">Start earning</span>
            </Link>
          </div>
        </div>
        <div className="cjVOwj">
          <div className="joUWuG">
            <picture>
              <img src={yt34} alt="Earn crypto while learning about crypto" loading="auto" />
            </picture>
          </div>
        </div>
      </div> */}
    </section>
    <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  markets: state.markets
});
export default connect(mapStateToProps, { fetchMarkets })(Prices);

