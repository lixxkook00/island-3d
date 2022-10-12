import React from 'react'
import { Link } from 'react-router-dom'
import './PoolCard.scss'

export default function PoolCard() {
  return (
    <div className="match-card">
        <div className="match-card-content">
            <div className="pool-card-result d-flex align-items-end justify-content-between">
                <div className="pool-card-num">
                    0
                </div>
                <div className="pool-card-vs">
                    :
                </div>
                <div className="pool-card-num">
                    0
                </div>
            </div>

            <div className="match-card-bottom d-flex align-items-center justify-content-between">
                <div className="match-card-result d-flex flex-column">
                    <div className="match-card-text">
                        Win
                    </div>
                    <div className="match-card-num">
                        00
                    </div>
                </div>

                <div className="match-card-result d-flex flex-column">
                    <div className="match-card-text">
                        Win
                    </div>
                    <div className="match-card-num">
                        00
                    </div>
                </div>

                <div className="match-card-result d-flex flex-column">
                    <div className="match-card-text">
                        Win
                    </div>
                    <div className="match-card-num">
                        00
                    </div>
                </div>
            </div>

            <div className="match-card-like match-card-like--left">
                <img src="/images/betting/like.png" alt="" className="match-card-like-icon" />
                <div className="match-card-like-percent">
                    30%
                </div>
            </div>

            <div className="match-card-like match-card-like--right">
                <img src="/images/betting/like.png" alt="" className="match-card-like-icon" />
                <div className="match-card-like-percent">
                    70%
                </div>
            </div>
            <div className="betting-button match-card-viewmore text-center">
                Join
            </div>
        </div>

    </div>
  )
}
