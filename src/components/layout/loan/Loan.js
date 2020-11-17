import React from 'react'
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
import egorasface from '../../../img/egoras-face.png';
import '../../../css/Dash2.css';
import '../../../css/Dash1.css';
// import Footer from '../parts/Footer';

export const Loan = () => {
  return (
    <div>
      {/* <Subheader /> */}

      <div className="main-container" id="container">
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className="widget widget-table-two">

                  <div className="widget-heading">
                      <h5 className="">Loans</h5>
                  </div>

                  <div className="widget-content">
                      <div className="table-responsive">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th><div className="th-content">Token</div></th>
                                      <th><div className="th-content">Deposited</div></th>
                                      <th><div className="th-content">Current Ratio</div></th>
                                      <th><div className="th-content th-heading">Debt</div></th>
                                      <th><div className="th-content">Status</div></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">2ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">88EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">2ETH</div></td>
                                      <td><div className="td-content">44%</div></td>
                                      <td><div className="td-content pricing"><span className="">84EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-success">Ok</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">6ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">126EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-danger">Risky</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">9ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">56EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-success">Ok</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">1ETH</div></td>
                                      <td><div className="td-content">91%</div></td>
                                      <td><div className="td-content pricing"><span className="">108EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">0.4ETH</div></td>
                                      <td><div className="td-content">74%</div></td>
                                      <td><div className="td-content pricing"><span className="">168EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <div className="td-content customer-name">
                                          <div class="media">
                                              <img class="align-self-center rounded img-fluid" width="45" src={egorasface} alt="" />
                                              <div class="media-body">
                                                  <span class="media-heading token-nm">Ethereum</span>
                                              </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td><div className="td-content product-brand">6ETH</div></td>
                                      <td><div className="td-content">44%</div></td>
                                      <td><div className="td-content pricing"><span className="">110EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-success">Ok</span></div></td>
                                  </tr>
                              </tbody>
                          </table>
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
  )
};

export default Loan;
