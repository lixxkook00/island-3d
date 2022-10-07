import React, { useState } from 'react'
import './LuckyWheel.scss'

export default function LuckyWheel() {

  const [rotateState,setRotateState] = useState('')
  const [resultNumber,setResultNumber] = useState('')

  
  const handleSpinning = () => {
    const resultNum = Math.floor(Math.random() * 7) + 1;
    setResultNumber('')

    // begin
    setRotateState('active')

    // finish
    setTimeout(() => {
      setRotateState('')
      setResultNumber(resultNum)
      
      console.log("Trung so :",resultNum);
    },1700+resultNum*50)
  }

  return (
    <div className="lucky-wheel centering">
      <div className="lucky-wheel-wrapper">
        <div className="lucky-wheel-tower">
          <img className="tower-wheel" src="/images/2/wheel.png" alt="" />

          <div className={`wheel-prize ${rotateState}`}>
            <div className={`wheel-prize-item wheel-prize-item--1 ${ resultNumber === 1 && 'active'}`}>
              <img src="./images/2/usd.png" alt="" className="wheel-prize-icon" />
            </div>

            <div className={`wheel-prize-item wheel-prize-item--2 ${ resultNumber === 2 && 'active'}`}>
              <img src="./images/2/b.png" alt="" className="wheel-prize-icon" />
            </div>
            
            <div className={`wheel-prize-item wheel-prize-item--3 ${ resultNumber === 3 && 'active'}`}>
              <img src="./images/2/Binance.png" alt="" className="wheel-prize-icon" />
            </div>
            
            <div className={`wheel-prize-item wheel-prize-item--4 ${ resultNumber === 4 && 'active'}`}>
              <img src="./images/2/bitcoin.png" alt="" className="wheel-prize-icon" />
            </div>

            <div className={`wheel-prize-item wheel-prize-item--5 ${ resultNumber === 5 && 'active'}`}>
              <img src="./images/2/usd.png" alt="" className="wheel-prize-icon" />
            </div>

            <div className={`wheel-prize-item wheel-prize-item--6 ${ resultNumber === 6 && 'active'}`}>
              <img src="./images/2/T.png" alt="" className="wheel-prize-icon" />
            </div>

            <div className={`wheel-prize-item wheel-prize-item--7 ${ resultNumber === 7 && 'active'}`}>
              <img src="./images/2/Binance.png" alt="" className="wheel-prize-icon" />
            </div>

            <div className={`wheel-prize-item wheel-prize-item--8 ${ resultNumber === 8 && 'active'}`}>
              <img src="./images/2/bitcoin.png" alt="" className="wheel-prize-icon" />
            </div>
            
            <img onClick={handleSpinning} className="wheel-button" src="./images/chongdien.jpeg" alt="" />
          </div>

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
