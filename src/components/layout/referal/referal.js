import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import refer from '../../../img/refer.png';
import facebook from '../../../img/facebook.png';
import twitter from '../../../img/twitter.png';
import telegram from '../../../img/telegram.png';
import whatsapp from '../../../img/whatsapp.png';
import Footer from '../parts/Footer';

export const Referal = (props) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const referFriends = () => setModal1(!modal1);
  const rankList = () => setModal2(!modal2);
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='text-center my-2'>
            <h2>Invite friends. Earn crypto together.</h2>
            <h6>
              Earn up to 40% commission every time your friends make a trade
              with Binance
            </h6>
          </div>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two p-2'>
                  <div className='table-responsive'>
                    <table className='table table-bordered'>
                      <thead>
                        <tr>
                          <th>Your Earnings</th>
                          <th>friends Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className='font-weight-bold'>312EGR</span>
                            <br />
                            <span>$121</span>
                          </td>
                          <td>
                            <span className='font-weight-bold'>312EGR</span>
                            <br />
                            <span>$121</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two p-2'>
                  <div className='pb-2 dotted-bottom'>
                    <h6 className='mb-0 font-weight-bold'>Commission Rates</h6>
                  </div>
                  <div className='widget-content py-4'>
                    <h5 className='font-weight-bold mb-0'>1000EGR</h5>
                    <span>$554</span>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two p-2'>
                  <div className='pb-2 dotted-bottom'>
                    <h6 className='mb-0 font-weight-bold'>
                      Total number of friends
                    </h6>
                  </div>
                  <div className='widget-content pt-4'>
                    <h5 className='font-weight-bold mb-0'>1000EGR</h5>
                    <div className='d-block mt-2'>
                      <button className='btn btn-block btn-success mb-2 mr-2 btn-rounded' onClick={referFriends}>
                        <span className='text-black font-weight-bold'>Invite Friends</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-table-two p-2'>
                  <div className='pb-2 dotted-bottom'>
                    <h6 className='mb-0 font-weight-bold'>Your ranking</h6>
                  </div>
                  <div className='widget-content pt-4'>
                    <h5 className='font-weight-bold mb-0'>1000EGR</h5>

                    <div className='d-block mt-2'>
                      <button className='btn btn-block btn-set-price mb-2 mr-2 btn-rounded' onClick={rankList}>
                        <span className='font-weight-bold'>View List</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tableStriped" className="col-lg-12 col-12 layout-spacing">
                  <div className="statbox widget box box-shadow">
                      <div className="widget-header">
                          <div className="row">
                              <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                  <h4>Your Commission History</h4>
                              </div>                 
                          </div>
                      </div>
                      <div className="widget-content widget-content-area">
                          <div className="table-responsive">
                              <table className="table table-bordered table-striped mb-4">
                                  <thead>
                                      <tr>
                                          <th>Friends Wallet Address</th>
                                          <th>Date</th>
                                          <th>Commission Earned</th>
                                          <th className="text-center">Txn Hash</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div className="d-flex">
                                                  <div className="avatar mr-1 avatar-sm">
                                                      <span className="avatar-title rounded-circle">AG</span>
                                                  </div>             
                                                  <p className="align-self-center mb-0">Shaun</p>
                                              </div>
                                          </td>
                                          <td>10/08/2019</td>
                                          <td>320</td>
                                          <td className=" text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex">
                                                  <div className="avatar mr-1 avatar-sm">
                                                      <span className="avatar-title rounded-circle">AG</span>
                                                  </div>             
                                                  <p className="align-self-center mb-0">Smith</p>
                                              </div>
                                          </td>
                                          <td>11/08/2019</td>
                                          <td>420</td>
                                          <td className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex">
                                                  <div className="avatar mr-1 avatar-sm">
                                                      <span className="avatar-title rounded-circle">AG</span>
                                                  </div>    
                                                  <p className="align-self-center mb-0">Kelly</p>
                                              </div>
                                          </td>
                                          <td>12/08/2019</td>
                                          <td>130</td>
                                          <td className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <div className="d-flex">
                                                  <div className="avatar mr-1 avatar-sm">
                                                      <span className="avatar-title rounded-circle">AG</span>
                                                  </div>    
                                                  <p className="align-self-center mb-0">Vincent</p>
                                              </div>
                                          </td>
                                          <td>13/08/2019</td>
                                          <td>260</td>
                                          <td className="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <Modal isOpen={modal1} toggle={referFriends}>
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
                        <div>
                          <img src={refer} className='img-fluid w-100' alt=""/>
                        </div>
                      </div>
                  </div>
                  <div className='mt-3 text-center'>
                      {/* <button className='btn btn-set-price'>
                          <span className='font-weight-bold text-black'>Top Up</span>
                      </button> */}
                      <img src={twitter} className='img-fluid mr-3' alt=""/>
                      <img src={facebook} className='img-fluid mr-3' alt=""/>
                      <img src={telegram} className='img-fluid mr-3' alt=""/>
                      <img src={whatsapp} className='img-fluid' alt=""/>
                  </div>
              </div>
              
          </Modal>

          <Modal isOpen={modal2} toggle={rankList}>
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
                        <div className="widget-table-one">
                            <div className="widget-heading">
                                <h5 className="">Ranking List</h5>
                            </div>
                            <h6>The list displays last 24hrs of ranking data</h6>
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
                                              <h4>0x23**5764**554</h4>
                                                
                                            </div>

                                        </div>
                                        <div className="t-rate rate-dec">
                                            <p><span className='text-white'>837.014EGR</span></p>
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
                                                <h4>0x23**5764**554</h4>
                                                
                                            </div>
                                        </div>
                                        <div className="t-rate rate-inc">
                                            <p><span className='text-white'>365.214EGR</span></p>
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
                                                <h4>0x23**5764**554</h4>
                                                
                                            </div>

                                        </div>
                                        <div className="t-rate rate-inc">
                                            <p><span className='text-white'>765.32EGR</span></p>
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
                                                <h4>0x23**5764**554</h4>
                                                
                                            </div>

                                        </div>
                                        <div className="t-rate rate-dec">
                                            <p><span className='text-white'>765.971EGR</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  
              </div>
              
          </Modal>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Referal;
