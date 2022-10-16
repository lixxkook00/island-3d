import React from 'react'
import BettingHeader from '../../components/BettingHeader'
import Countdown from '../../components/Countdown'
import LiveCard from '../../components/LiveCard'
import PoolCard from '../../components/PoolCard'
import CreatePool from '../../modals/CreatePool'
import './BettingRoom.scss'

export default function BettingRoom() {
  return (
    <div className="betting">
        <BettingHeader />

        <CreatePool />

        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="betting-detail-banner">
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="match-card-team">
                                <img src="/images/betting/flag-Ecuador.png" alt="" className="match-card-flag" />
                                <div className="match-card-name text-center">
                                    Qatar
                                </div>
                            </div>

                            <img src="/images/betting/vs.png" alt="" className="match-card-vs" />

                            <div className="match-card-team">
                                <img src="/images/betting/flag-qatar.png" alt="" className="match-card-flag" />
                                <div className="match-card-name text-center">
                                    Ecuador
                                </div>
                            </div>
                        </div>
                        
                        <div className="centering">
                            <div className="d-flex align-items-center">
                                <div className="betting-detail-time">
                                    20 November <b>23:00</b>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="betting-detail-countdown">
                        <Countdown />
                    </div>

                    <div className="centering">
                        <div className="betting-button">
                            Create Pool
                        </div>
                    </div>

                    <div className="grid grid-3 grid-m-1">
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                        <PoolCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="live-card-list">
                        <div className="live-card-list-header d-flex align-items-center justify-content-between">
                            <div className="live-card-list-title">
                                Live <i className="fa-solid fa-circle-play"></i>
                            </div>
                            <div className="live-card-list-viewmore">
                                Mostly <i className="fa-solid fa-caret-down ml-1"></i>
                            </div>
                        </div>

                        <LiveCard />
                        <LiveCard />
                        <LiveCard />
                        <LiveCard />
                    </div>

                    <div className="live-card-list">
                        <div className="live-card-list-header d-flex align-items-center justify-content-between">
                            <div className="live-card-list-title">
                                History <i className="fa-solid fa-clock-rotate-left"></i>
                            </div>
                            <div className="live-card-list-viewmore">
                                Mostly <i className="fa-solid fa-caret-down ml-1"></i>
                            </div>
                        </div>

                        <LiveCard />
                        <LiveCard />
                        <LiveCard />
                        <LiveCard />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
