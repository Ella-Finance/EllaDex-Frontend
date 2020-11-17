import React from 'react';
import { Link } from 'react-router-dom';
// import Subheader from '../parts/Subheader';
import Sidebar from '../parts/Sidebar';
// import '../../../Dash2.css';
import '../../../css/Dash1.css';
import egorasface from '../../../img/egoras-face.png';
import pie from '../../../img/capture3.PNG';
// import Footer from '../parts/Footer';

export const Assets = () => {
  return (
    <div>
      {/* <Subheader /> */}

      <div className='main-container' id='container'>
        <Sidebar />

        <div id='custom-content' className='main-content mt-4'>
          <div className='layout-px-spacing'>
            <div className='row layout-top-spacing'>
              <div className='col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
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
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">2ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">88EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">2ETH</div></td>
                                      <td><div className="td-content">44%</div></td>
                                      <td><div className="td-content pricing"><span className="">84EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-success">Ok</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">6ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">126EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-danger">Risky</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">9ETH</div></td>
                                      <td><div className="td-content">94%</div></td>
                                      <td><div className="td-content pricing"><span className="">56EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-success">Ok</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">1ETH</div></td>
                                      <td><div className="td-content">91%</div></td>
                                      <td><div className="td-content pricing"><span className="">108EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
                                      </td>
                                      <td><div className="td-content product-brand">0.4ETH</div></td>
                                      <td><div className="td-content">74%</div></td>
                                      <td><div className="td-content pricing"><span className="">168EUSD</span></div></td>
                                      <td><div className="td-content"><span className="badge outline-badge-primary">Moderate</span></div></td>
                                  </tr>
                                  <tr>
                                      <td>
                                        <Link className='btn btn-stat p-0' to='/views'>
                                            <div className="td-content customer-name">
                                                <img className="img-fluid mr-1 d-inline" alt='' width="20" src={egorasface} />
                                                Ethereum
                                            </div>
                                        </Link>
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
              <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing'>
                <div className='widget widget-chart-two'>
                  <div className='widget-heading'>
                    <h5 className=''>All Assets</h5>
                  </div>
                  <div className='widget-content'>
                    {/* <div id='chart-2' className=''></div> */}
                    <div class="text-center">
                      <img className='img-fluid' src={pie} alt=""/>
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

export default Assets;
