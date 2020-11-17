import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbars from './components/layout/parts/Navbars';
import Landing from './components/layout/home/Landing';
import Prices from './components/layout/home/Prices';
import Buy from './components/layout/Buy';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError
} from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import './css/App.css';
import './css/Plugin.css';
import './css/Card.css';
import './css/Avatar.css';
import './css/Dash2.css';

import './css/Apexchart.css';
import { Header } from './components/layout/parts/Header';
import { Loan } from './components/layout/loan/Loan';
import { Views } from './components/layout/loan/Views';
import Assets from './components/layout/loan/Assets';
import Stakes from './components/layout/stake/Stakes';
import Portal from './components/layout/governance/Portal';
import Proposal from './components/layout/governance/Proposal';
import Leaderboard from './components/layout/governance/Leaderboard';
import Treasury from './components/layout/governance/Treasury';
import Referal from './components/layout/referal/referal';
import Statistics from './components/layout/statistics/Statistics';
import Privacy from './components/layout/home/Privacy';
import Terms from './components/layout/home/Terms';
import Aboutus from './components/layout/home/Aboutus';
import List from './components/layout/list/List';
import Classic from './components/layout/Classic';
import ClassicLanding from './components/layout/ClassicLanding';
// import Footer from './components/layout/parts/Footer';
// import Alert from './components/layout/Alert';




const App = () => {
  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        {/* <Sidebar /> */}
        <Route exact path='/' component={ClassicLanding} />
        {/* <Route exact path='/' component={Prices} /> */}
        <section className='mt-6'>
          {/* <Alert /> */}
          <Switch>
            <Route exact path='/trade/:token/:base' component={Classic} />
            <Route exact path='/advance/trade/:token/:base' component={Buy} />
            <Route exact path='/views' component={Views} />
            <Route exact path='/loan' component={Loan} />
            <Route exact path='/assets' component={Assets} />
            <Route exact path='/savings' component={Stakes} />
            <Route exact path='/portal' component={Portal} />
            <Route exact path='/proposal' component={Proposal} />
            <Route exact path='/treasury' component={Treasury} />
            <Route exact path='/leaderboard' component={Leaderboard} />
            <Route exact path='/referal' component={Referal} />
            <Route exact path='/statistics' component={Statistics} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/aboutus' component={Aboutus} />
            <Route exact path='/list' component={List} />
          </Switch>
        </section>
        {/* <Footer /> */}
      </Fragment>
    </Router>
  </Provider>
    </Web3ReactProvider>
  );
};
export default App;
