import React from 'react'
import './LuckyWheel.scss'

import PureWheel from '../../components/PureWheel'

export default function LuckyWheel() {
  return (
    <div className="lucky-wheel centering">
      <div className="lucky-wheel-wrapper">
        <div className="lucky-wheel-tower">
          <img className="tower-wheel" src="/images/2/wheel.png" alt="" />
        </div>

        <div className="lucky-wheel-infor">
          <div className="lucky-wheel-block">
            <div className="lucky-wheel-title text-center">
              Choose cost
            </div>

            <div className="d-flex justify-content-around">
              <div className="cost">
                <img src="/images/2/Binance.png" alt="" className="cost-coin" />

                <div className="cost-value">
                  500
                </div>
              </div>

              <div className="cost">
                <img src="/images/2/Binance.png" alt="" className="cost-coin" />

                <div className="cost-value">
                  1000
                </div>
              </div>

              <div className="cost">
                <img src="/images/2/Binance.png" alt="" className="cost-coin" />

                <div className="cost-value">
                  5,000
                </div>
              </div>

              <div className="cost">
                <img src="/images/2/Binance.png" alt="" className="cost-coin" />

                <div className="cost-value">
                  10,000
                </div>
              </div>
            </div>
          </div>

           <div className="lucky-wheel-block">
            <div className="lucky-wheel-title text-center">
              Lottery History
            </div>

            <div className="d-flex justify-content-around">
              <div className="cost">
                <img src="/images/2/bitcoin.png" alt="" className="cost-coin" />
              </div>

              <div className="cost">
                <img src="/images/2/eth.png" alt="" className="cost-coin" />
              </div>
              
              <div className="cost">
                <img src="/images/2/usd.png" alt="" className="cost-coin" />
              </div>

              <div className="cost">
                <img src="/images/2/near.png" alt="" className="cost-coin" />
              </div>

              <div className="cost">
                <img src="/images/2/dai.png" alt="" className="cost-coin" />
              </div>


              <div className="cost">
                <img src="/images/2/T.png" alt="" className="cost-coin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
