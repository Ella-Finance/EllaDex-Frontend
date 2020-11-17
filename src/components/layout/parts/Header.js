import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import check from '../../../img/check.png';
import check from '../../../img/egoraslogodark.png';
import metamask from '../../../img/metamask.png';
import fortmatic from '../../../img/fortmatic.png';
import ngoraslogo from '../../../img/single.png';
import { Search } from '../../Search';
import { Authenticate } from '../../auth/Authenticate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faExchangeAlt, faPager, faSave } from '@fortawesome/free-solid-svg-icons';

export const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='header-container header-bg fixed-top border-bottom-0'>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light py-2'>
          <Link to='/' className='nav-link py-0'>
            <img
              src={ngoraslogo}
              className='navbar-logo img-fluid'
              width='50'
              alt='logo'
            />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown'>
                <a
                  className='nav-link text-black custom-nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Exchange{' '}
                  <div class='icon-container d-inline mr-2'>
                  <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      class='feather feather-trello'
                    >
                      <rect
                        x='3'
                        y='3'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <rect x='7' y='7' width='3' height='9'></rect>
                      <rect x='14' y='7' width='3' height='5'></rect>
                    </svg>
                  </div>
                  <svg
                    class='HeaderNavItem__StyledChevron-sc-34h4r7-2 bjIMNq'
                    height='6'
                    viewBox='0 0 10 6'
                    width='10'
                  >
                    <path d='M4 4l-.354.354.354.353.354-.353zM-.354.354l4 4 .708-.708-4-4zm4.708 4l4-4-.708-.708-4 4z'></path>
                  </svg>
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <Link className='dropdown-item' to='/advance/trade/DAI/ETH'>
                    Advance
                  </Link>

                  <Link className='dropdown-item' to='/'>
                    Classic
                  </Link>
                 
                  
                  
                </div>
              </li>


             
             
              <li className='nav-item'>
                <Link
                  className='nav-link text-black custom-nav-link'
                  to='/savings'
                >
                  Savings{' '}
                  <div class='icon-container d-inline mr-2'>
                  <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  className='nav-link text-black custom-nav-link'
                  to='/list'
                >
                  Create Pair{' '}
                  <div class='icon-container d-inline mr-2'>
                    <FontAwesomeIcon icon={faExchangeAlt} />
                  </div>
                </Link>
              </li>
               
              {/* <li className='nav-item'>
                <Link
                  className='nav-link text-black custom-nav-link'
                  to='/referal'
                >
                  Referral{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    class='feather feather-users'
                  >
                    <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                    <circle cx='9' cy='7' r='4'></circle>
                    <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                    <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                  </svg>
                </Link>
              </li> */}
              {/* <li className='nav-item'>
                <Link
                  className='nav-link text-black custom-nav-link'
                  to='/statistics'
                >
                  Statistics{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    class='feather feather-bar-chart-2'
                  >
                    <line x1='18' y1='20' x2='18' y2='10'></line>
                    <line x1='12' y1='20' x2='12' y2='2'></line>
                    <line x1='6' y1='20' x2='6' y2='14'></line>
                  </svg>
                </Link>
              </li> */}
            </ul>
            <ul className='navbar-nav flex-row ml-md-auto'>
              <Authenticate isHome="false"/>
             
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
