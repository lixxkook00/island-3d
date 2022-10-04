import React from 'react'
import './Reward.scss'

export default function Reward() {

  return (
        <div className="reward">
            <div className="primary-block">
                <div className="title text-center">
                    Wallet
                </div>
            
                <div className="reward-item">
                    <div className="reward-title">
                        Total Balance
                    </div>
                    <div className="reward-value value">
                        1000000 BNB
                    </div>
                </div>

                <div className="reward-item">
                    <div className="reward-title">
                        {/* Total Rewards */}
                    </div>
                    <div className="reward-value value">
                        {/* <FormatAmount amount={100000}/> FIFA */}
                    </div>
                </div>

                {/* <div className="reward-item">
                    <div className="reward-title">
                        Claimable Rewards
                    </div>
                    <div className="reward-value value">
                        <FormatAmount amount={600000000}/> FIFA
                    </div>
                </div> */}

                <div className="centering">
                    <div className="primary-button" >
                        Claim
                    </div>
                </div>

                <div className="centering mt-2">
                    <div className="primary-button" >
                        Deposit
                    </div>
                </div>
            </div>
        </div>
    )
}
