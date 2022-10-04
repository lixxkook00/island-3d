import React from 'react'
import './StakingCard.scss'

export default function StakingCard({status}) {
    return (
        <div className="staking-card h-100">
            <div className={`staking-card-header ${status}`}>
                <div className="staking-card-header-status">
                    {
                        status === 'later'
                        ?
                        <i className="fa-regular fa-clock"></i>
                        :
                        <i className="fa-sharp fa-solid fa-circle-play"></i>
                    }
                    {status}
                </div>

                <div className="staking-card-header-code">
                    #23415
                </div>
            </div>

            <div className={`staking-card-up ${status}`}>
                <h4>UP</h4>
                <span>1.15x Payout</span>
            </div>

            <div className="staking-card-content">

                {
                    status === 'live'
                    &&
                    <>
                        <div className="staking-card-content-price">
                            <div className="">
                                <div className="staking-card-title">
                                    LAST PRICE
                                </div>
                                <span className="value">
                                    $3.9510
                                </span>
                            </div>

                            <div className="value-block">
                                <i className="fa-solid fa-arrow-up"></i>
                                $002.3315
                            </div>
                        </div>

                        <div className="staking-card-content-li">
                            <div className="staking-card-content-li-title">
                                Located Price
                            </div>
                            <div className="staking-card-content-li-value">
                                $3.9150
                            </div>
                        </div>

                        <div className="staking-card-content-li">
                            <div className="staking-card-content-li-title">
                                Prize Pool:
                            </div>
                            <div className="staking-card-content-li-value">
                                20.3651 Token
                            </div>
                        </div>
                    </>
                }
                
                {
                    status === 'next'
                    &&
                    <>
                        <div className="staking-card-content-li">
                            <div className="staking-card-next-title">
                                Located Price
                            </div>
                            <div className="staking-card-next-value">
                                20.36225 Token
                            </div>
                        </div>
                        <div className="primary-button">
                            ENTER UP
                        </div>
                        <div className="second-button mt-2">
                            ENTER DOWN
                        </div>
                    </>
                }

                {
                    status === 'later'

                    &&
                    <div className="later-content">
                        <div className="later-content-title">
                            LAST PRICE
                        </div>
                        <div className="later-content-countdown">
                            ~07:56
                        </div>
                    </div>
                }

            </div>

            <div className={`staking-card-down ${status}`}>
                <span>2.70x Payout</span>
                <h4>DOWN</h4>
            </div>

        </div>
    )
}
