import React from 'react'

export default function BettingHeader() {
  return (
    <div className="container">
        <div className="betting-header d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <img src="https://tmdl.edu.vn/wp-content/uploads/2022/07/logo-manchester-united-4.png" alt="" className="avt" />

                <div className="betting-icon mr-1 ml-1">
                    <i className="fa-solid fa-bell"></i>
                </div>

                <div className="betting-wallet d-flex align-items-center">
                    <img src="/images/coin-wheel.png" alt="" className="betting-coin" />

                    <div className="betting-amount">
                        680.000.000,00
                    </div>
                </div>
            </div>

            <div className="betting-icon">
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    </div>
  )
}
