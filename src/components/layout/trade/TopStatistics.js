import React from 'react'

const TopStatistics = () => {
    return (
        <div>
             <div className='mt-3'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='transact-stat'>
                <div className='bg-pale shadow p-2 rounded-left mr-2'>
                  <div className=''>
                    <div className="media">
                        <img className="align-self-center rounded" src="/img/ethereum.png" width='75' alt="pic1" />
                        <div className="media-body my-auto">
                            <p className="media-heading mb-0">ETH/USDT</p>
                            <p className="media-text">Ethereum</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='bg-pale shadow p-2 mr-2'>
                  <div className=''>
                      <h6 className=''>Last Price</h6>
                      <p className='text-success'>0.00024532</p>
                  </div>
                </div>
                <div className='bg-pale shadow p-2 mr-2'>
                  <div className=''>
                    <h6 className=''>Change</h6>
                    <p className='text-success'>0.00024532</p>
                  </div>
                </div>
                <div className='bg-pale shadow p-2 mr-2'>
                  <div className=''>
                    <h6 className=''>24h-High</h6>
                    <p className='text-success'>0.00024532</p>
                  </div>
                </div>
                <div className='bg-pale shadow p-2 mr-2'>
                  <div className='mx-auto'>
                    <h6 className=''>24-Low</h6>
                    <p className='text-success'>0.00024532</p>
                  </div>
                </div>
                <div className='bg-pale shadow p-2 rounded-right'>
                  <div className=''>
                    <h6 className=''>24h Volume</h6>
                    <p className='text-success'>0.00024532</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default TopStatistics;