import React, { useState } from 'react';
import { CustomInput } from 'reactstrap';
import { Tooltip } from 'reactstrap';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import '../../../css/Dash1.css';
import '../../../css/Dash2.css';
// import Footer from '../parts/Footer';

export const Views = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen1, setTooltipOpen1] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const toggle1 = () => setTooltipOpen1(!tooltipOpen1);
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-card-four px-2 py-4'>
                  <div className='widget-content'>
                    <div className='w-content pb-1 custom-border-bottom'>
                      <div className='w-info w-70 pr-2'>
                        <div className='d-block text-black'>
                          <div className='trd-head'>
                            <span className='s1'>Eth Locked</span>
                          </div>
                          <div className='trd-head float-right'>
                            <span className='s1'>2.00Eth</span>
                            <br />
                            <span className='s3'>411.00USD</span>
                          </div>
                        </div>
                      </div>
                      <div className='w-30'>
                        <button className='btn btn-outline-egoras btn-block mb-2'>
                          Top Up
                        </button>
                      </div>
                    </div>
                    <div className='w-content pt-2'>
                      <div className='w-info w-70 pr-2'>
                        <div className='d-block'>
                          <div className='trd-head'>
                            <span className='s2 text-black'>Avail.To Withdraw</span>
                          </div>
                          <div className='trd-head float-right'>
                            <span className='s1'>2.00Eth</span>
                            <br />
                            <span className='s3'>411.00USD</span>
                          </div>
                        </div>
                      </div>
                      <div className='w-30'>
                        <button className='btn btn-outline-egoras btn-block mb-2'>
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing'>
                <div className='widget widget-card-four px-2 py-4'>
                  <div className='widget-content'>
                    <div className='w-content pb-1 custom-border-bottom'>
                      <div className='w-info text-black'>
                        <span className='s2'>Collaterization Ratio</span>
                        <br />
                        <span className='s3'>Minimum Ratio</span>
                      </div>
                      <div className='text-black'>
                        <span className='s1'>223%</span>
                        <br />
                        <span className='s3'>150%</span>
                      </div>
                    </div>
                    <div className='w-content pt-2 pb-1 mt-3 mb-1'>
                      <div className='w-info text-black'>
                        <span className='s2'>Interest</span>
                      </div>
                      <div className='text-black'>
                        <span className='s1'>0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing'>
                <div className='widget widget-account-invoice-two'>
                  <div className='widget-content'>
                    <div className='account-box'>
                      <div className='info mb-2'>
                        <h5 className='text-black'>Total Debt</h5>
                        <p className='inv-balance text-black'>$10,344</p>
                      </div>
                      <div className='acc-action'>
                        <div className=''>
                          <div className='custom-switch custom-control' href="#" id="payFees">
                            <input
                              type='checkbox'
                              id='exampleCustomSwitch'
                              name='customSwitch'
                              className='custom-control-input'
                            />
                            <label
                              className='custom-control-label c-label text-black'
                              for='exampleCustomSwitch'
                            >
                              Pay Fees with
                              <br />
                              ifx24
                            </label>
                          </div>
                          <Tooltip placement="right" isOpen={tooltipOpen} target="payFees" toggle={toggle}>
                            Activate ifx24 token to reduce your trading fees by 20%
                          </Tooltip>
                          <div className='custom-switch custom-control mt-1' href="#" id="payEgr">
                              <input
                                type='checkbox'
                                id='exampleCustomSwitch2'
                                name='customSwitch'
                                className='custom-control-input'
                              />
                              <label
                                className='custom-control-label c-label text-black'
                                for='exampleCustomSwitch2'
                              >
                                Pay gas fees with
                                <br />
                                EGR
                              </label>
                            </div>
                            <Tooltip placement="right" isOpen={tooltipOpen1} target="payEgr" toggle={toggle1}>
                            Activate Egoras token to reduce your gas fees
                          </Tooltip>
                          </div>
                        
                        <div>
                          <button className='btn btn-pay'>
                            Pay from ePool
                          </button>
                          <br />
                          <small className='text-black'>Fees 0.5%</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row layout-top-spacing'>
              <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-card-four px-2 py-4'>
                  <div className='widget-content'>
                    <div className='w-content pb-1 custom-border-bottom'>
                      <div className='w-info w-70 pr-2'>
                        <div className='d-block text-black'>
                          <div className='trd-head'>
                            <span className='s1'>Debt</span>
                          </div>
                          <div className='trd-head float-right'>
                            <span className='s1'>2.00Eth</span>
                          </div>
                        </div>
                      </div>
                      <div className='w-30'>
                        <button className='btn btn-outline-egoras btn-block mb-2'>
                          Pay Back
                        </button>
                      </div>
                    </div>
                    <div className='w-content pt-2'>
                      <div className='w-info w-70 pr-2'>
                        <div className='d-block text-black'>
                          <div className='trd-head'>
                            <span className='s2'>Avail.To Generate</span>
                          </div>
                          <div className='trd-head float-right'>
                            <span className='s1'>2.00Eth</span>
                          </div>
                        </div>
                      </div>
                      <div className='w-30'>
                        <button className='btn btn-outline-egoras btn-block mb-2'>
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing'>
                <div className='widget widget-card-four px-2 py-4'>
                  <div className='widget-content'>
                    <div className='w-content pb-1 custom-border-bottom'>
                      <div className='w-info text-black'>
                        <span className='s2'>Collaterization Ratio</span>
                        <br />
                        <span className='s3'>Current price (ETH/USD)</span>
                      </div>
                      <div className='text-black'>
                        <span className='s1'>54USD</span>
                        <br />
                        <span className='s3'>230USD</span>
                      </div>
                    </div>
                    <div className='w-content pt-2 pb-1 mt-3 mb-1'>
                      <div className='w-info text-black'>
                        <span className='s2'>Liquidation Fees</span>
                      </div>
                      <div className='text-black'>
                        <span className='s1'>25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing'>
                <div className="widget widget-activity-four">

                  <div className="widget-heading">
                      <h5 className="">Transaction History</h5>
                  </div>

                  <div className="widget-content">

                      <div className="mt-container mx-auto ps ps--active-y">
                          <div className="timeline-line">
                              
                              <div className="item-timeline timeline-primary">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p><span>Updated</span> Server Logs</p>
                                      <span className="badge badge-danger">Pending</span>
                                      <p className="t-time">Just Now</p>
                                  </div>
                              </div>

                              <div className="item-timeline timeline-success">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Send Mail to HR and Admin</p>
                                      <span className="badge badge-success">Completed</span>
                                      <p className="t-time">2 min ago</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-danger">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Backup <span>Files EOD</span></p>
                                      <span className="badge badge-danger">Pending</span>
                                      <p className="t-time">14:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-dark">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Collect documents from Sara</p>
                                      <span className="badge badge-success">Completed</span>
                                      <p className="t-time">16:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-warning">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Conference call with Marketing Manager.</p>
                                      <span className="badge badge-primary">In progress</span>
                                      <p className="t-time">17:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-secondary">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Rebooted Server</p>
                                      <span className="badge badge-success">Completed</span>
                                      <p className="t-time">17:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-warning">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Send contract details to Freelancer</p>
                                      <span className="badge badge-danger">Pending</span>
                                      <p className="t-time">18:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-dark">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Kelly want to increase the time of the project.</p>
                                      <span className="badge badge-primary">In Progress</span>
                                      <p className="t-time">19:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-success">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Server down for maintanence</p>
                                      <span className="badge badge-success">Completed</span>
                                      <p className="t-time">19:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-secondary">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Malicious link detected</p>
                                      <span className="badge badge-warning">Block</span>
                                      <p className="t-time">20:00</p>
                                  </div>
                              </div>

                              <div className="item-timeline  timeline-warning">
                                  <div className="t-dot" data-original-title="" title="">
                                  </div>
                                  <div className="t-text">
                                      <p>Rebooted Server</p>
                                      <span className="badge badge-success">Completed</span>
                                      <p className="t-time">23:00</p>
                                  </div>
                              </div>

                          </div>                                    
                      <div className="ps__rail-x vv__1">
                        <div className="ps__thumb-x vv__2" tabindex="0">
                          
                        </div>
                        </div>
                        <div className="ps__rail-y vv__3">
                          <div className="ps__thumb-y vv__4" tabindex="0">

                          </div>
                        </div>
                        </div>

                      <div className="tm-action-btn">
                          <button className="btn">View All <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Views;
