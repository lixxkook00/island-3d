import React from 'react'
import './HeaderDashboard.scss'

export default function HeaderDashboard() {
  return (
    <>
        <div className="centering hidden-m-t">
            <div className="header-dashboard">
                <div className="header-dashboard-side">
                    <div className="header-dashboard-item active">
                        HOME
                    </div>

                    <div className="header-dashboard-item">
                        PLAYER
                    </div>
                </div>

                <div className="header-dashboard-side">
                    <div className="header-dashboard-item">
                        PENALTY
                    </div>

                    <div className="header-dashboard-item">
                        LOG OUT
                    </div>
                </div>
            </div>
        </div>
        {/* Total wallet */}
        <div className="wallet container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="wallet-item">
                        <div className="wallet-item-icon">
                            <img src="/images/2/bitcoin.png" alt="" />
                        </div>
                        <div className="wallet-item-value">
                            0.00000
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="wallet-item">
                        <div className="wallet-item-icon">
                            <img src="/images/2/Binance.png" alt="" />
                        </div>
                        <div className="wallet-item-value">
                            0.00000
                        </div>
                    </div>
                </div>


                <div className="col-lg-3 col-md-6">
                    <div className="wallet-item">
                        <div className="wallet-item-icon">
                            <img src="/images/2/b.png" alt="" />
                        </div>
                        <div className="wallet-item-value">
                            0.00000
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="wallet-item">
                        <div className="wallet-item-icon">
                            <img src="/images/2/dai.png" alt="" />
                        </div>
                        <div className="wallet-item-value">
                            0.00000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
