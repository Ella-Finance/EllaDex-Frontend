import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import paste1 from '../../../img/paste1.png';
import paste2 from '../../../img/paste2.png';
import paste3 from '../../../img/paste3.png';
import Footer from '../parts/Footer';

export const Portal = () => {
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='text-center my-2'>
            <h2>Welcome To Egoras Governance Portal</h2>
          </div>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two'>
                  <div className='pb-2 dotted-bottom'>
                    <h5 className='mb-0 font-weight-bold'>
                      <img
                        className='img-fluid'
                        width='40'
                        src={paste1}
                        alt=''
                      />{' '}
                      Proposals
                    </h5>
                  </div>
                  <div className='widget-content'>
                    <p>
                      Lock your token as collateral to generate Dai, a
                      decentralized stablecoin soft-peg to 1USD.
                    </p>
                    <Link to='/proposal' className='btn btn-outline-egoras'>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two'>
                  <div className='pb-2 dotted-bottom'>
                    <h5 className='mb-0 font-weight-bold'>
                      <img
                        className='img-fluid'
                        width='40'
                        src={paste2}
                        alt=''
                      />{' '}
                      Treasury
                    </h5>
                  </div>
                  <div className='widget-content'>
                    <p>
                      Lock your token as collateral to generate Dai, a
                      decentralized stablecoin soft-peg to 1USD.
                    </p>
                    <Link to='/treasury' className='btn btn-outline-egoras'>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two'>
                  <div className='pb-2 dotted-bottom'>
                    <h5 className='mb-0 font-weight-bold'>
                      <img
                        className='img-fluid'
                        width='40'
                        src={paste3}
                        alt=''
                      />{' '}
                      Leaderboard
                    </h5>
                  </div>
                  <div className='widget-content'>
                    <p>
                      Lock your token as collateral to generate Dai, a
                      decentralized stablecoin soft-peg to 1USD.
                    </p>
                    <Link to='/leaderboard' className='btn btn-outline-egoras'>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Portal;
