import React, { useState } from 'react';
import { Modal } from 'reactstrap';

// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';

import '../../../css/quill.css';
import '../../../css/contacts.css';
import x90 from '../../../img/90x90.jpg';
import lock from '../../../img/lock.png';
import Footer from '../parts/Footer';

export const Leaderboard = props => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const lockEgr = () => setModal1(!modal1);
  const topUpEgr = () => setModal2(!modal2);
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          {/* <div className='text-center my-2'>
            <h2>Welcome To Egoras Governance Portal</h2>
          </div> */}
          <div className='layout-px-spacing'>
            <div
              className='row layout-spacing layout-top-spacing'
              id='cancel-row'
            >
                <div className="col-lg-12">
                    <div className="widget-content searchable-container list">

                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search layout-spacing align-self-center">
                                <form className="form-inline my-2 my-lg-0">
                                    <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control product-search" id="input-search" placeholder="Search Leaderboard..." />
                                    </div>
                                </form>
                            </div>

                            <div className="col-xl-8 col-lg-7 col-md-7 col-sm-5 text-sm-right text-center layout-spacing align-self-center">
                                <div className="d-flex justify-content-sm-end justify-content-center">
                                    {/* <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> */}
                                    <button className='btn lock-egr' onClick={lockEgr} id="btn-add-contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></button>
                                    <button className='btn lock-egr' onClick={topUpEgr} id="btn-add-contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>

                                    <div className="switch align-self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 feather feather-list view-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid view-grid active-view"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    </div>
                                </div>

                                <Modal isOpen={modal1} toggle={lockEgr}>
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
                                                <div className='text-center'>
                                                    <span className='egr-lock d-inline-block'>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> */}
                                                        <img width='50' className='img-fluid' src={lock} alt=""/>
                                                    </span>
                                                </div>
                                                <h5 className='mb-1'>Lock EGR</h5>
                                                <div className='text-center mx-auto'>
                                                    <p>In order to participate in voting, you must lock your EGR tokens. The higher the amount, the more impact you'll have on the system</p>
                                                </div>
                                                <form>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <input
                                                            type='text'
                                                            id='m-subject'
                                                            placeholder='Name'
                                                            className='form-control mb-2'
                                                            />
                                                            <span className='validation-text'></span>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            {/* <label for="exampleFormControlFile1">Example file input</label> */}
                                                            <input type="file" class="form-control-file mb-2" id="exampleFormControlFile1" />
                                                        </div>
                                                    </div>
                                                    <div className='d-flex mb-4 mail-subject'>
                                                        
                                                        <div className='w-100'>
                                                            <input
                                                            type='text'
                                                            id='m-subject'
                                                            placeholder='Amount'
                                                            className='form-control'
                                                            />
                                                            <span className='validation-text'></span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="d-block d-flex j-space-around">
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">25%</button>
                                                        </div>
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">50%</button>
                                                        </div><div className="trd-head">
                                                            <button className="percentage-btn">75%</button>
                                                        </div>
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">100%</button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <button className='btn btn-set-price'>
                                                <span className='font-weight-bold text-black'>Lock</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </Modal>
                                <Modal isOpen={modal2} toggle={topUpEgr}>
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
                                                <div className='text-center'>
                                                    <span className='egr-lock d-inline-block'>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> */}
                                                        <img width='50' className='img-fluid' src={lock} alt=""/>
                                                    </span>
                                                </div>
                                                <h5 className='mb-1'>Top Up EGR</h5>
                                                <div className='text-center mx-auto'>
                                                    <p>In order to participate in voting, you mustlock your MKR tokens. The higher the amount, the more impact you'll have on the system</p>
                                                </div>
                                                <form>
                                                    <div className='d-flex mb-4 mail-subject'>
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> */}
                                                        <div className='w-100'>
                                                            <input
                                                            type='text'
                                                            id='m-subject'
                                                            placeholder='Amount'
                                                            className='form-control'
                                                            />
                                                            <span className='validation-text'></span>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="d-block d-flex j-space-around">
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">25%</button>
                                                        </div>
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">50%</button>
                                                        </div><div className="trd-head">
                                                            <button className="percentage-btn">75%</button>
                                                        </div>
                                                        <div className="trd-head">
                                                            <button className="percentage-btn">100%</button>
                                                        </div>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <button className='btn btn-set-price'>
                                                <span className='font-weight-bold text-black'>Top Up</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </Modal>
                            </div>
                        </div>

                        <div className="searchable-items grid">
                            <div className="items items-header-section">
                                <div className="item-content">
                                    <div className="">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input" id="contact-check-all" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <h4>Name</h4>
                                    </div>
                                    <div className="user-email">
                                        <h4>Email</h4>
                                    </div>
                                    <div className="user-location">
                                        <h4 className='ml-0'>Location</h4>
                                    </div>
                                    <div className="user-phone">
                                        <h4 className='ml-1'>Phone</h4>
                                    </div>
                                    <div className="action-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2  delete-multiple"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Alan Green">Alan Green</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="alan@mail.com">5435</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Boston, USA">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">5</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Linda Nelson">Linda Nelson</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="linda@mail.com">6745</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Sydney, Australia">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">7</p>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Lila Perry">Lila Perry</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="lila@mail.com">6564</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Miami, USA">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">5</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Andy King">Andy King</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="andy@mail.com">875</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Tokyo, Japan">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">66</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Jesse Cory">Jesse Cory</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="jesse@mail.com">856</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Edinburgh, UK">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">88</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Xavier">Xavier</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="xavier@mail.com">5456</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="New York, USA">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">86</p>
                                    </div>
                 
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Susan">Susan</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="susan@mail.com">547</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Miami, USA">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">87</p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="items">
                                <div className="item-content">
                                    <div className="user-profile">
                                        <div className="n-chk align-self-center text-center">
                                            <label className="new-control new-checkbox checkbox-primary">
                                            <input type="checkbox" className="new-control-input contact-chkbox" />
                                            <span className="new-control-indicator"></span>
                                            </label>
                                        </div>
                                        <img src={x90} alt="avatar" />
                                        <div className="user-meta-info">
                                            <p className="user-name" data-name="Traci Lopez">Traci Lopez</p>
                                        </div>
                                    </div>
                                    <div className="user-email">
                                        <p className="info-title">Votes (EGR): </p>
                                        <p className="usr-email-addr" data-email="traci@mail.com">654e</p>
                                    </div>
                                    <div className="user-location">
                                        <p className="info-title">Vote Weight: </p>
                                        <p className="usr-location" data-location="Edinburgh, UK">25%</p>
                                    </div>
                                    <div className="user-phone">
                                        <p className="info-title">Proposals Vote: </p>
                                        <p className="usr-ph-no" data-phone="+1 (070) 123-4567">46</p>
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

export default Leaderboard;
