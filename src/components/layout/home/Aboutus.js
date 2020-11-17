import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Aboutus.css';
import '../../../css/Owl.css';
// import Footer from '../parts/Footer';
import ngoras from '../../../img/ngoras.png';
import useorigin from '../../../img/originuse.gif';
import hh02 from '../../../img/harrison-Ogemdi.png';
import se34 from '../../../img/se34.png';
// import uy67 from '../../../img/uy67.png';
import uy67 from '../../../img/uy67.png';
import hk04 from '../../../img/hk04.png';
import dd from '../../../img/3d.png';
import ty76 from '../../../img/ty76.jpg';

export const Aboutus = () => {
  return (
    <div>
      
      <div className='banner-3'>
        <div id='particles-js'>
          <canvas
            className='canvas-div w-100 h-100'
            width='1263'
            height='740'
          ></canvas>
        </div>
        <div className='banner-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 align-self-center'>
                <div className='banner-text text-center font-white'>
                  <h1 className='font-white tw-7 mb-20'>
                    All Africans Deserves <b className='font-lemon'>Financial</b>{' '}
                    Accessibility
                  </h1>
                  <p>
                  We are impatient optimist working to expand financial access to help underserved African communities thrive.
                  </p>
                  <a
                    href='javascript:void(0)'
                    className='button btn-sky mt-20 ml-10'
                  >
                    Explore Dapp
                  </a>
                  <a
                    href='javascript:void(0)'
                    className='button bt-white mt-20 ml-10'
                  >
                    White Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='overview-block-ptb'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <img src={useorigin} className='img-fluid' alt='about_img' />
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='heading-title left'>
                <small className='iq-font-green'>100% Africa</small>
                <h2 className='tw-6'>Our Mission</h2>
              </div>
              <p className='large-p'>
              We help Africans buy/sell digital assets with the best price in the market while providing financial access to underserved African communities.
              </p>
              <p>More than 350 Million people around Africa are unbanked and can’t access the financial services they need.Egoras was founded in 2019 with the belief that Africans deserve to have access to the financial facility.</p>
              <p>We do this by the aggregating price of digitals assets across over 400 cryptocurrency exchanges to help African traders get the best price for digitals assets whereas the 50% of fees generated from trading activities on the platform go to the treasury and unlocking capital for the underserved, improving the quality and cost of financial services across Africa, and addressing the underlying barriers to financial access across Africa. Through Egoras 50/50 model, students across Africa can pay for tuition, African women can start businesses, African farmers can invest in equipment and African families can afford needed emergency care.</p>
              <p>By trading on Egoras, you can be part of the solution and make a real difference in someone’s life.
                50% of every fee you generated on Egoras goes to funding African underserved communities.</p>
              
            </div>
          </div>
        </div>
      </section>
      <section className='overview-block-ptb'>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='heading-title left'>
                <h2 className='tw-6'>
                  Our Vision
                </h2>
              </div>
              <p>
              Our Vision is to become African's one-stop decentralised finance hub,where aficans can buy and sell any asset with the best price in the market, get interest free crypto Loans and earn interest on staking while providing financial access to help over 350M underserved Africans to strive.
              </p>
              
              
            </div>
            <div className='col-lg-6 align-self-center'>
              <img src={dd} className='img-fluid' alt='about_img' />
            </div>
          </div>
        </div>
      </section>
      <section className='overview-block-pb'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='heading-title'>
                <h2 className='title tw-6'>Organizational Values</h2>
                
              </div>
            </div>
          </div>
          <div className='col-sm-12'>
            <div className='row'>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Achieve more <br/> with less</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Decentralization on web works</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon active'>
                  <img src={hk04} alt='icon' />
                  <h6>Embrace and drive innovation</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Treat users like you want to be treated</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Pursue personal development</h6>
                </div>
              </div>
            </div>
            <div className='row mt-30'>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Perseverance <br/> Pays</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Innovate and <br/> move fast</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon active'>
                  <img src={hk04} alt='icon' />
                  <h6>Focus on <br/> a niche</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Hard work <br/> pays</h6>
                </div>
              </div>
              <div className='col-lg col-md-4'>
                <div className='small-icon'>
                  <img src={hk04} alt='icon' />
                  <h6>Be crazy and <br/> determined</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cus-dark">
          <div className="schedule">
              <div className="container narrow">
                  <div className="schedule-in">
                      <h3 className="text-white">Egoras Milestone</h3>
                      <div className="schedule-years">
                          <button data-target="0" type="button" className="">2019</button>
                          <button data-target="4" type="button" className="active">2020</button>
                          <button data-target="8" type="button" className="">2021</button>
                      </div>
                      <div className="schedule-slider owl-carousel owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                              <div className="owl-stage trans">
                                  <div className="owl-item w-218">
                                      <div className="item">
                                              <div className="schedule-item">
                                                  <div className="schedule-year">2019</div>
                                                  <div className="schedule-event done">
                                                      <div className="schedule-event-check"></div>
                                                      <div className="schedule-event-date">Dec 3rd 2019</div>
                                                      <div className="schedule-event-released text-white">Launch of Egoras Bounty</div>
                                                  </div>
                                              </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Dec 4th 2019</div>
                                                  <div className="schedule-event-released text-white">Egoras(EGR) Listing On EtherFlyer</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Dec 26st 2019</div>
                                                  <div className="schedule-event-released text-white">Egoras(EGR) Listing On Coingecko</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Dec 30th 2019</div>
                                                  <div className="schedule-event-released text-white">Egoras(EGR) Listing On Coinmarketcap</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-year">2020</div>
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Jan 7th 2020</div>
                                                  <div className="schedule-event-released text-white">Egoras Dollar(EUSD) Listing On EtherFlyer</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Jan 8th 2020</div>
                                                  <div className="schedule-event-released text-white">Egoras Dollar(EUSD) Listing On Coingecko</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Jan 17th 2020</div>
                                                  <div className="schedule-event-released text-white">Egoras Dollar(EUSD) Listing On CoinMarketcap</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Jan 20th 2020</div>
                                                  <div className="schedule-event-released text-white">Launch of Egoras Recommerce Marketplace</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Feb 17th 2020</div>
                                                  <div className="schedule-event-released text-white">Securing  Egoras Trademark</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="owl-item w-218 active">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event done">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">April 2020</div>
                                                  <div className="schedule-event-released text-white">Launch of Egoras Multicoin vault</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218 active">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event active">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">June 2020</div>
                                                  <div className="schedule-event-released text-white">Listing on more exchange</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-event ">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">September 2020</div>
                                                  <div className="schedule-event-released text-white">Launch of Egoras governance portal</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="owl-item w-218">
                                      <div className="item">
                                          <div className="schedule-item">
                                              <div className="schedule-year">2021</div>
                                              <div className="schedule-event">
                                                  <div className="schedule-event-check"></div>
                                                  <div className="schedule-event-date">Feb  2021</div>
                                                  <div className="schedule-event-released text-white">Launch of Silver and Platinum pegged Stablecoin.</div>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>
                          <div className="owl-nav disabled">
                              <button type="button" role="presentation" className="owl-prev">
                                  <span aria-label="Previous"></span>
                              </button>
                              <button type="button" role="presentation" className="owl-next">
                                  <span aria-label="Next"></span>
                              </button>
                          </div>
                          <div className="owl-dots disabled"></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section id="team" className="overview-block-ptb">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="heading-title">
                          <small className="iq-font-green">Executive Team</small>
                          <h2 className="title tw-6">Team Members</h2>
                          <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                      </div>
                  </div>
              </div>
              <div className="row mt-30 justify-content-center">
                  <div className="col-lg-3 col-md-6 col-sm-6 mg-reset">
                      <div className="project-team text-center">
                          <div className="team-info mb-30">
                              <div className="team-images"> <img className="img-fluid" src={hh02} alt="" /> </div>
                              <div className="team-description">
                                  <div className="mt-10">+0123 456 789</div>
                                  <div><a href="javascript:void(0)" className="text-white">support@qwilo.com</a></div>
                              </div>
                              <div className="team-s-media">
                                  <ul className='p-0'>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-facebook"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-twitter"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-pinterest-p"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-dribbble"></i> </a> </li>
                                  </ul>
                              </div>
                          </div>
                          <h6 className="tw-6 mt-3"><a href="javascript:void(0)">Rinks Cooper</a></h6>
                          <p className="mb-0">CEO, Qwilo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mg-reset">
                      <div className="project-team text-center">
                          <div className="team-info mb-30">
                              <div className="team-images"> <img className="img-fluid" src={ty76} alt="" /> </div>
                              <div className="team-description">
                                  <div className="mt-10">+0123 456 789</div>
                                  <div><a href="javascript:void(0)" className="text-white">support@qwilo.com</a></div>
                              </div>
                              <div className="team-s-media">
                                  <ul className='p-0'>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-facebook"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-twitter"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-pinterest-p"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-dribbble"></i> </a> </li>
                                  </ul>
                              </div>
                          </div>
                          <h6 className="tw-6 mt-3"><a href="javascript:void(0)">JD Scot</a></h6>
                          <p className="mb-0">CEO, Qwilo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mg-reset">
                      <div className="project-team text-center">
                          <div className="team-info mb-30">
                              <div className="team-images"> <img className="img-fluid" src={ty76} alt="" /> </div>
                              <div className="team-description">
                                  <div className="mt-10">+0123 456 789</div>
                                  <div><a href="javascript:void(0)" className="text-white">support@qwilo.com</a></div>
                              </div>
                              <div className="team-s-media">
                                  <ul className='p-0'>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-facebook"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-twitter"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-pinterest-p"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-dribbble"></i> </a> </li>
                                  </ul>
                              </div>
                          </div>
                          <h6 className="tw-6 mt-3"><a href="javascript:void(0)">Haris Morgan</a></h6>
                          <p className="mb-0">CEO, Qwilo</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 mg-reset">
                      <div className="project-team text-center">
                          <div className="team-info mb-30">
                              <div className="team-images"> <img className="img-fluid" src={ty76} alt="" /> </div>
                              <div className="team-description">
                                  <div className="mt-10">+0123 456 789</div>
                                  <div><a href="javascript:void(0)" className="text-white">support@qwilo.com</a></div>
                              </div>
                              <div className="team-s-media">
                                  <ul className='p-0'>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-facebook"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-twitter"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-pinterest-p"></i> </a> </li>
                                      <li> <a href="javascript:void(0)"> <i className="fa fa-dribbble"></i> </a> </li>
                                  </ul>
                              </div>
                          </div>
                          <h6 className="tw-6 mt-3"><a href="javascript:void(0)">Nik Jorden</a></h6>
                          <p className="mb-0">CEO, Qwilo</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      <div className="partners py-60 cus-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
                <div className="col-md-2 col-4">
                    <img className="img-fluid" src={ngoras} alt="" />
                </div>
            </div>
        </div>
    </div>
      {/* <Subheader /> */}

      {/* <div className='main-container' id='container'>
        <div id='stat-content' className='main-content mt-4'>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Aboutus;
