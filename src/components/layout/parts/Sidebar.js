import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div>
      {/* <div className="overlay"></div> */}
      {/* <div className="search-overlay"></div> */}

      

      {/* <div className="sidebar-wrapper sidebar-theme">
                  
          <nav id="sidebar">
              <div className="shadow-bottom"></div>
                <ul className="list-unstyled menu-categories ps ps--active-y" id="accordionExample">
                   

                    <li className="menu">
                        <a href="#stake" data-active="true" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                                <span>Savings</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </a>
                        <ul className="submenu list-unstyled collapse" id="stake" data-parent="#accordionExample" >
                            <li>
                                <Link to="/savings"> Overview </Link>
                            </li>
                                                   
                        </ul>
                    </li>

                    <li className="menu">
                        <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                <span>Governance</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </a>
                        <ul className="submenu list-unstyled collapse" id="components" data-parent="#accordionExample" >
                            <li>
                                <Link to="/portal"> Overview </Link>
                            </li>
                            <li>
                                <Link to="/proposal"> Proposals </Link>
                            </li>
                            <li>
                                <Link to="/treasury"> Treasury </Link>
                            </li>
                            <li>
                                <Link to="/leaderboard"> Leaderboard </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="menu">
                        <a href="#referals" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                <span>Referal</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        </a>
                        <ul className="collapse submenu list-unstyled" id="referals" data-parent="#accordionExample">
                            <li>
                                <Link to="/referal"> Overview </Link>
                            </li>
                            
                            
                        </ul>
                    </li>

                    <li className="menu">
                        <Link to="/statistics" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-target"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                <span>Statistics</span>
                            </div>
                        </Link>
                    </li>
                

                 
              <div className="ps__rail-x s__12"><div className="ps__thumb-x s__13" tabIndex="0"></div></div><div className="ps__rail-y s__14"><div className="ps__thumb-y s__15" tabIndex="0"></div></div></ul>
              
          </nav>

      </div> */}
    </div>
  )
}

export default Sidebar;
