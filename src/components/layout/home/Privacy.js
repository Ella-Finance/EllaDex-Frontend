import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Privacy.css';

export const Privacy = () => {
  return (
    <div>
      <div id='headerWrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 col-sm-12 col-12 text-center mb-5'>
              <a href='index.html' className='navbar-brand-privacy'>
                {/* <img src="assets/img/90x90.jpg" className="img-fluid" alt="logo" /> */}
              </a>
            </div>
            <div className='col-md-12 col-sm-12 col-12 text-center'>
              <h2 className='main-heading'>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>

      <div id='privacyWrapper' className=''>
        <div className='privacy-container'>
          <div className='privacyContent'>
            <div className='d-flex justify-content-between privacy-head'>
              <div className='privacyHeader'>
                <h1>Privacy Policy</h1>
              </div>
            </div>

            <div className='privacy-content-container'>
              <section>
                <h5>1. About this Notice</h5>
                <p>
                  This Privacy and Cookie Notice provides information on how
                  egorasdao collects and processes your personal data when you
                  visit our website or mobile applications.
                </p>
              </section>
              <section>
                <h5>2. The Data We Collect About You?</h5>
                <p>
                  We collect your personal data in order to provide and
                  continually improve our products and services. We may collect,
                  use, store and transfer the following different kinds of
                  personal data about you: Here for marketing and personal data
                  optimization purposes. egorasdao also uses Google Digital
                  Marketing to propose targeted offers.
                  <br />
                  To find out more:
                  <br />
                  <br />
                  Information you provide to us: We receive and store the
                  information you provide to us including your identity data,
                  contact data, delivery address and financial data.
                  <br />
                  <br />
                  Information on your use of our website and/or mobile
                  applications: We automatically collect and store certain types
                  of information regarding your use of the egorasdao including
                  information about your searches, views, downloads and
                  transactions.
                  <br />
                  <br />
                  Information from third parties and publicly available sources:
                  We may receive information about you from third parties
                  including our carriers; payment service providers;
                  merchants/brands; and advertising service providers.
                </p>
              </section>
              <section>
                <h5>3. Cookies and How We Use Them</h5>
                <p>
                  A cookie is a small file of letters and numbers that we put on
                  your computer if you agree.
                </p>
                <p>
                  Cookies allow us to distinguish you from other users of our
                  website and mobile applications, which helps us to provide you
                  with an enhanced browsing experience. For example we use
                  cookies for the following purposes: Recognising and counting
                  the number of visitors and to see how visitors move around the
                  site when they are using it (this helps us to improve the way
                  our website works, for example by ensuring that users can find
                  what they are looking for).
                </p>
                <p>
                  Identifying your preferences and subscriptions e.g. language
                  settings and Sending you newsletters and
                  commercial/advertising messages tailored to your interests.
                  <br />
                  <br />
                  Our approved third parties may also set cookies when you use
                  our website. Third parties include search engines, providers
                  of measurement and analytics services, social media networks
                  and advertising companies.
                </p>
              </section>
              <section>
                <h5>4. How We Use Your Personal Data</h5>
                <p>
                  We use your personal data to operate, provide, develop and
                  improve the products and services that we offer, including the
                  following: Managing your relationship with us.
                  <br />
                  <br />
                  Enabling you to participate in promotions, competitions and
                  surveys. Improving our website, applications, products and
                  services Recommending/advertising products or services which
                  may be of interest to you.
                  <br />
                  <br />
                  Complying with our legal obligations, including verifying your
                  identity where necessary.
                </p>
              </section>
              <section>
                <h5>8. Your Legal Rights</h5>
                <p>
                  It is important that the personal data we hold about you is
                  accurate and current. Please keep us informed if your personal
                  data changes during your relationship with us.
                  <br />
                  Under certain circumstances, you have rights under data
                  protection laws in relation to your personal data, including
                  the right to access, correct or erase your personal data,
                  object to or restrict processing of your personal data, and
                  unsubscribe from our emails and newsletters.
                </p>
              </section>
              <section>
                <h5>9. Further Details</h5>
                <p>
                  If you are looking for more information on how we process your
                  personal data, or you wish to exercise your legal rights in
                  respect of your personal data, please contact{' '}
                  <Link to=''>support@egoras.com</Link>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div id='miniFooterWrapper' className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <div className='position-relative'>
                <div className='arrow text-center'>
                  <p className=''>Up</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-7 mx-auto col-lg-6 col-md-6 site-content-inner text-md-left text-center copyright align-self-center'>
                  <span className='mr-3'>
                    <Link to='/terms'>Terms & Conditions</Link>
                  </span>
                  <span className='mr-3'>
                    <Link to='/privacy'>Privacy Policy</Link>
                  </span>
                  <span className='mr-3'>
                    <Link to='/aboutus'>About Us</Link>
                  </span>
                  <span className='mr-3'>
                    <Link to=''>White Paper</Link>
                  </span>
                  <span className='mr-3'>
                    <a href='https://docs.egoras.com'>Documentation</a>
                  </span>
                </div>
                <div className='col-xl-5 mx-auto col-lg-6 col-md-6 site-content-inner text-md-right text-center align-self-center'>
                  <p className=''>
                    Copyright © 2020 <Link to='/aboutus'>EgorasDao.</Link>
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
                      className='feather feather-heart'
                    >
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
