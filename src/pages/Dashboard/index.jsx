import React from 'react'

import HeaderDashboard from '../../components/HeaderDashboard'
import History from '../../components/History'
import Reward from '../../components/Reward'

export default function Dashboard() {
  return (
    <div className='main-bg pt-3'>
        <HeaderDashboard />

        <div className="container">
          <div className="nft">

            <div className="nft-list-text">
              <div className="nft-list-text-value">
                0
              </div>
              <h4>NFT's</h4>
            </div>

            <div className="nft-item">
              <img src="./images/1/nft-1.png" alt="" />
            </div>

            <div className="nft-item">
              <img src="./images/1/nft-2.png" alt="" />
            </div>

            <div className="nft-item">
              <img src="./images/1/nft-1.png" alt="" />
            </div>

            <div className="nft-item">
              <img src="./images/1/nft-2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
             <div className="col-lg-6 h-100">
              <Reward />
            </div>

            <div className="col-lg-6">
              <History />
            </div>

          </div>
        </div>
    </div>
  )
}
