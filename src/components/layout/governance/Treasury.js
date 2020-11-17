import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import paste1 from '../../../img/paste1.png';
import paste2 from '../../../img/paste2.png';
import paste3 from '../../../img/paste3.png';
import Footer from '../parts/Footer';

export const Treasury = () => {
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>

              <div className="col-xl-4 col-lg-12 col-md-6 col-sm-12 col-12 layout-spacing">
                  <div className="widget widget-table-one">
                      <div className="widget-heading j-space-between">
                          <div className="trd-head">
                            <span className="font-weight-bold">Token</span>
                          </div>
                          <div className="trd-head">
                            <span className="font-weight-bold">Amount</span>
                          </div>
                      </div>

                      <div className="widget-content">
                          <div className="transactions-list">
                              <div className="t-item">
                                  <div className="t-company-name">
                                      <div className="t-icon">
                                          <div className="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                          </div>
                                      </div>
                                      <div className="t-name">
                                          <h4>Egoras</h4>
                                          <p className="meta-date">EGR</p>
                                      </div>

                                  </div>
                                  <div className="t-rate rate-dec">
                                      <p><span>-$16.44</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></p>
                                  </div>
                              </div>
                          </div>

                          <div className="transactions-list">
                              <div className="t-item">
                                  <div className="t-company-name">
                                      <div className="t-icon">
                                          <div className="avatar avatar-xl">
                                              <span className="avatar-title rounded-circle">SP</span>
                                          </div>
                                      </div>
                                      <div className="t-name">
                                          <h4>Egoras</h4>
                                          <p className="meta-date">EGR</p>
                                      </div>
                                  </div>
                                  <div className="t-rate rate-inc">
                                      <p><span>+$66.44</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></p>
                                  </div>
                              </div>
                          </div>

                          <div className="transactions-list">
                              <div className="t-item">
                                  <div className="t-company-name">
                                      <div className="t-icon">
                                          <div className="avatar avatar-xl">
                                              <span className="avatar-title rounded-circle">AD</span>
                                          </div>
                                      </div>
                                      <div className="t-name">
                                          <h4>Egoras</h4>
                                          <p className="meta-date">EGR</p>
                                      </div>

                                  </div>
                                  <div className="t-rate rate-inc">
                                      <p><span>+$66.44</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></p>
                                  </div>
                              </div>
                          </div>

                          <div className="transactions-list">
                              <div className="t-item">
                                  <div className="t-company-name">
                                      <div className="t-icon">
                                          <div className="icon">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                          </div>
                                      </div>
                                      <div className="t-name">
                                          <h4>Egoras</h4>
                                          <p className="meta-date">EGR</p>
                                      </div>

                                  </div>
                                  <div className="t-rate rate-dec">
                                      <p><span>-$32.00</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                  
                  <div className="widget widget-activity-four">

                      <div className="widget-heading">
                          <h5 className="">Transaction History</h5>
                      </div>

                      <div className="widget-content">

                          <div className="mt-container mx-auto">
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
                                          <p>Send Mail to <a href="javascript:void(0);">HR</a> and <a href="javascript:void(0);">Admin</a></p>
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
                                          <p>Collect documents from <a href="javascript:void(0);">Sara</a></p>
                                          <span className="badge badge-success">Completed</span>
                                          <p className="t-time">16:00</p>
                                      </div>
                                  </div>

                                  <div className="item-timeline  timeline-warning">
                                      <div className="t-dot" data-original-title="" title="">
                                      </div>
                                      <div className="t-text">
                                          <p>Conference call with <a href="javascript:void(0);">Marketing Manager</a>.</p>
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
                          </div>

                          <div className="tm-action-btn">
                              <button className="btn">View All <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                  
                    <div className="widget-three">
                        <div className="widget-heading">
                            <h5 className="">Summary</h5>
                        </div>
                        <div className="widget-content">

                            <div className="order-summary">

                                <div className="summary-list">
                                    <div className="w-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                    </div>
                                    <div className="w-summary-details">
                                        
                                        <div className="w-summary-info">
                                            <h6>Income</h6>
                                            <p className="summary-count">$92,600</p>
                                        </div>

                                        <div className="w-summary-stats">
                                            <div className="progress">
                                                <div className="progress-bar bg-gradient-secondary w-25" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="summary-list">
                                    <div className="w-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
                                    </div>
                                    <div className="w-summary-details">
                                        
                                        <div className="w-summary-info">
                                            <h6>Profit</h6>
                                            <p className="summary-count">$37,515</p>
                                        </div>

                                        <div className="w-summary-stats">
                                            <div className="progress">
                                                <div className="progress-bar bg-gradient-success w-50" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="summary-list">
                                    <div className="w-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    </div>
                                    <div className="w-summary-details">
                                        
                                        <div className="w-summary-info">
                                            <h6>Expenses</h6>
                                            <p className="summary-count">$55,085</p>
                                        </div>

                                        <div className="w-summary-stats">
                                            <div className="progress">
                                                <div className="progress-bar bg-gradient-warning w-75" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                
                            </div>

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

export default Treasury;
