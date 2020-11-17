import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import egorasface from '../../../img/egoras-face.png';
import ngoraslogo from '../../../img/ngoras-logo.png';
import ethereum from '../../../img/ethereum.png';
import barchart from '../../../img/barchart2.PNG';
// import Footer from '../parts/Footer';

export const Statistics = (props) => {
  const [modal, setModal] = useState(false);

  const uniqueStat = () => setModal(!modal);
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        {/* <Sidebar /> */}

        <div id='stat-content' className='main-content mt-4'>
          <div className='text-center my-2'>
            <h2>Egoras Stat</h2>
          </div>
          
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 filtered-list-search layout-spacing align-self-center mx-auto">
                    <form className="form-inline my-2 my-lg-0">
                        <div className="w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" className="form-control product-search" id="input-search" placeholder="Search for pairs and tokens..." />
                        </div>
                    </form>
                </div>
            </div>
            <div className='row layout-top-spacing'>
              <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-chart-three p-2'>
                  <div className='widget-heading'>
                    <div className=''>
                      <h5 className=''>Unique Visitors</h5>
                    </div>
                  </div>

                  <div className='widget-content'>
                    {/* <div id='uniqueVisits'></div> */}
                    <img src={barchart} className='img-fluid' alt='' />
                  </div>
                </div>
              </div>

              <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='row'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-6 layout-spacing'>
                    <div className='widget widget-table-two p-4'>
                      <div className='table-responsive'>
                        <table className='table table-bordered mb-3'>
                          <thead>
                            <tr>
                              <th>Egoras Price</th>
                              <th>Egoras Marketcap</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className='font-weight-bold'>$0.0095</span>
                                <br />
                              </td>
                              <td>
                                <span className='font-weight-bold'>
                                  $1,195,000,000
                                </span>
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                  </div>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-6 layout-spacing'>
                    <div className='widget widget-table-two p-4'>
                      <div className='table-responsive'>
                        <table className='table table-bordered mb-3'>
                          <thead>
                            <tr>
                              <th>Ifx24 Price</th>
                              <th>Ifx24 Marketcap</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <span className='font-weight-bold'>$0.0095</span>
                                <br />
                              </td>
                              <td>
                                <span className='font-weight-bold'>
                                  $1,195,000,000
                                </span>
                                <br />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two'>
                  <div className='widget-heading'>
                    <div className=''>
                      <h5 className=''>Staking</h5>
                    </div>
                  </div>
                  <div className='d-block mt-2 d-flex j-space-between'>
                    <div className='trd-head'>
                      <h6 className='mb-1'>79.5%</h6>
                      <span className='small'>Staking Ratio</span>
                    </div>
                    <div className='trd-head'>
                      <h6 className='mb-1'>7.5%</h6>
                      <span className='small'>Rewards</span>
                    </div>
                    <div className='trd-head'>
                      <h6 className='mb-1'>79.5%</h6>
                      <span className='small'>Inflation</span>
                    </div>
                    <div className='trd-head'>
                      <h6 className='mb-1'>79.5%</h6>
                      <span className='small'>Activer Stakers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-6 layout-spacing'>
                <div className='widget widget-table-two p-2'>
                  <div className='table-responsive mb-1'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th>Transaction(24hrs)</th>
                          <th>Volume(24hrs)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className='font-weight-bold'>345</span>
                            <br />
                          </td>
                          <td>
                            <span className='font-weight-bold'>
                              $24,195,233
                            </span>
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-6 layout-spacing'>
                <div className='widget widget-table-two p-4'>
                  <div className='widget-heading'>
                    <div className=''>
                      <h6 className=''>Total Assets Locked</h6>
                    </div>
                  </div>
                  <div className='widget-content'>
                    <p className='font-weight-bold my-3'>$24,195,233</p>
                  </div>
                </div>
              </div>

              <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                  <div className="widget widget-table-two p-2">

                      <div className="widget-heading p-2">
                          <h5 className="mb-0">Loans</h5>
                      </div>

                      <div className="widget-content">
                          <div className="table-responsive">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th className='bg-none '><div className="th-content">Collateral</div></th>
                                          <th className='bg-none '><div className="th-content">Last Act</div></th>
                                          <th className='bg-none '><div className="th-content">Loan Id</div></th>
                                          <th className='bg-none '><div className="th-content th-heading">Debt</div></th>
                                          <th className='bg-none'><div className="th-content">Status</div></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#768</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Ok</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#758</div></td>
                                          <td><div className="td-content pricing"><span className="">$84.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Safe</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#668</div></td>
                                          <td><div className="td-content pricing"><span className="">$126.04</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-danger">Danger</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#468</div></td>
                                          <td><div className="td-content pricing"><span className="">$56.07</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Safe</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#894</div></td>
                                          <td><div className="td-content pricing"><span className="">$108.09</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Ok</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#269</div></td>
                                          <td><div className="td-content pricing"><span className="">$168.09</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Ok</span></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                            <button className='btn btn-stat shadow-none p-0' onClick={uniqueStat}>
                                              <div className="td-content customer-name">
                                                  <img className="img-fluid mr-0 d-inline" alt='' width="20" src={ethereum} />
                                                  Eth
                                              </div>
                                            </button>
                                          </td>
                                          <td><div className="td-content product-brand">PayPal</div></td>
                                          <td><div className="td-content">#768</div></td>
                                          <td><div className="td-content pricing"><span className="">$110.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Safe</span></div></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                  <div className="widget widget-table-two p-2">

                      <div className="widget-heading p-2">
                          <h5 className="mb-0">Trades</h5>
                      </div>

                      <div className="widget-content">
                          <div className="table-responsive">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th className='bg-none '><div className="th-content">Pair</div></th>
                                          <th className='bg-none '><div className="th-content">Last Price</div></th>
                                          <th className='bg-none '><div className="th-content">24hr Change</div></th>
                                          <th className='bg-none '><div className="th-content th-heading">Volume</div></th>
                                          <th className='bg-none'><div className="th-content">Action</div></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$643</div></td>
                                          <td><div className="td-content">+4</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$765</div></td>
                                          <td><div className="td-content">+8</div></td>
                                          <td><div className="td-content pricing"><span className="">$84.00</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$874</div></td>
                                          <td><div className="td-content">+3</div></td>
                                          <td><div className="td-content pricing"><span className="">$126.04</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                           <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$232</div></td>
                                          <td><div className="td-content">+8</div></td>
                                          <td><div className="td-content pricing"><span className="">$56.07</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$975</div></td>
                                          <td><div className="td-content">+7</div></td>
                                          <td><div className="td-content pricing"><span className="">$108.09</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$754</div></td>
                                          <td><div className="td-content">+2</div></td>
                                          <td><div className="td-content pricing"><span className="">$168.09</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="td-content customer-name">
                                                  <Link className='btn btn-stat shadow-none p-0' to='/buy'>
                                                      <div className="main-con">
                                                          <div className="sub-con">
                                                              <img className="roof-con roof-img" alt='' width="20" src={egorasface} />
                                                          </div>
                                                          <div className="flor-con pos-abs">
                                                              <img className="img-cr" src={ngoraslogo} alt='' width="20" />
                                                          </div>
                                                      </div>
                                                      <span className=''>Eth/EUSD</span>
                                                  </Link>
                                              </div>
                                          </td>
                                          <td><div className="td-content product-brand">$753</div></td>
                                          <td><div className="td-content">+3</div></td>
                                          <td><div className="td-content pricing"><span className="">$110.00</span></div></td>
                                          <td><div className="td-content"><button className="btn btn-light rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-aperture"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></button></div></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
            
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                  <div className="widget widget-table-two">

                      <div className="widget-heading">
                          <h5 className="">All Transaction</h5>
                      </div>

                      <div className="widget-content">
                          <div className="table-responsive">
                              <table className="table">
                                  <thead>
                                      <tr>
                                          <th><div className="th-content">Type</div></th>
                                          <th><div className="th-content">Token Value</div></th>
                                          <th><div className="th-content">Token Amount</div></th>
                                          <th><div className="th-content">Token Amount</div></th>
                                          <th><div className="th-content th-heading">Account</div></th>
                                          <th><div className="th-content">Time</div></th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Andy King</div></td>
                                          <td><div className="td-content product-brand">Nike Sport</div></td>
                                          <td><div className="td-content">#76894</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Shipped</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Irene Collins</div></td>
                                          <td><div className="td-content product-brand">Speakers</div></td>
                                          <td><div className="td-content">#75844</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$84.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Paid</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Laurie Fox</div></td>
                                          <td><div className="td-content product-brand">Camera</div></td>
                                          <td><div className="td-content">#66894</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$126.04</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-danger">Pending</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Luke Ivory</div></td>
                                          <td><div className="td-content product-brand">Headphone</div></td>
                                          <td><div className="td-content">#46894</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$56.07</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Paid</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Ryan Collins</div></td>
                                          <td><div className="td-content product-brand">Sport</div></td>
                                          <td><div className="td-content">#89891</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$108.09</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Shipped</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Nia Hillyer</div></td>
                                          <td><div className="td-content product-brand">Sunglasses</div></td>
                                          <td><div className="td-content">#26974</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$168.09</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-primary">Shipped</span></div></td>
                                      </tr>
                                      <tr>
                                          <td><div className="td-content customer-name"><img src={ngoraslogo} alt="avatar" />Sonia Shaw</div></td>
                                          <td><div className="td-content product-brand">Watch</div></td>
                                          <td><div className="td-content">#76844</div></td>
                                          <td><div className="td-content pricing"><span className="">$88.00</span></div></td>
                                          <td><div className="td-content pricing"><span className="">$110.00</span></div></td>
                                          <td><div className="td-content"><span className="badge outline-badge-success">Paid</span></div></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          
            <Modal isOpen={modal} toggle={uniqueStat} className='stat-modal-dialog'>
                {/* <ModalHeader toggle={tdToggle}>Modal title</ModalHeader> */}
                <div className='modal-body'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-x close'
                        data-dismiss='modal'
                    >
                        <line x1='18' y1='6' x2='6' y2='18'></line>
                        <line x1='6' y1='6' x2='18' y2='18'></line>
                    </svg>
                    <div className='compose-box'>
                        <div
                        className='compose-content'
                        id='addTaskModalTitle'
                        >
                          <div className='d-block py-2'>
                            <div className="trd-head text-left">
                                <h5 className="mb-0">created by 0x53...456</h5>
                                <span className="small">1hr Ago</span>
                            </div>
                            <div className='trd-head float-right'>
                              <h5 className=''>
                                #674573
                              </h5>
                            </div>
                          </div>
                          <div className='row layout-top-spacing'>
                            <div className='col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12'>
                                      <div className="widget widget-activity-four">
                                          <div className="widget-heading">
                                            <h5 className="mb-0">Collateral</h5>
                                          </div>
                                          <div className="widget-content">
                                            <img src={egorasface} className='img-fluid mr-1' width='25' alt=""/>
                                            <span className='font-weight-bold'>33.004</span>
                                          </div>
                                      </div>
                                    </div>
                                    <div className='col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12'>
                                      <div className="widget widget-activity-four">
                                          <div className="widget-heading">
                                            <h5 className="mb-0">Liquidation Price</h5>
                                          </div>
                                          <div className="widget-content">
                                            <span className='font-weight-bold'>33.004</span>
                                          </div>
                                      </div>
                                    </div>
                                    <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12'>
                                      <div className="widget widget-activity-four">
                                          <div className="widget-heading">
                                            <h5 className="mb-0">Debt</h5>
                                          </div>
                                          <div className="widget-content">
                                            <img src={egorasface} className='img-fluid mr-1' width='25' alt=""/>
                                            <span className='font-weight-bold'>33.004</span>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                            
                                <div className='mt-2'>
                                  <div className="widget widget-four">
                                      <div className="widget-heading">
                                        <div className="d-block py-2">
                                          <div className="trd-head text-left">
                                            <h5 className="mb-0">Collateral Ratio (%)</h5>
                                          </div>
                                          <div className="trd-head float-right">
                                            <h5 className="">#674573</h5>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="widget-content">
                                        <div className='vistorsBrowser'>
                                          <div className='browser-list'>
                                            <span className='font-weight-bold mr-2'>78.23%</span>
                                            <div className='w-browser-details'>
                                              
                                              <div className='w-browser-stats'>
                                                <div className='progress'>
                                                  <div
                                                    className='progress-bar bg-gradient-primary w-75'
                                                    role='progressbar'
                                                    aria-valuenow='90'
                                                    aria-valuemin='0'
                                                    aria-valuemax='100'
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className="widget widget-activity-four">

                                    <div className="widget-heading">
                                        <h5 className="">Recent Activities</h5>
                                    </div>

                                    <div className="widget-content">

                                        <div className="mt-container rec-act mx-auto ps ps--active-y">
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

                                            </div>                                    
                                            <div className="ps__rail-x aw">
                                                <div className="ps__thumb-x ad" tabindex="0"></div>
                                            </div>
                                            <div className="ps__rail-y as">
                                                <div className="ps__thumb-y az" tabindex="0"></div>
                                            </div>
                                        </div>

                                        <div className="tm-action-btn">
                                            <button className="btn">View All <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    
                </div>
                
            </Modal>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
