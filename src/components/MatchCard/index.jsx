import React from 'react'
import { Link } from 'react-router-dom'
import './MatchCard.scss'

export default function MatchCard() {
  return (
    <Link to='/betting/room' className="match-card">
        <div className="match-card-content">
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

            <div className="match-card-date d-flex align-items-center justify-content-center flex-column">
                <img src="/images/betting/logo.png" alt="" className="match-card-date-icon" />
                <div className="match-card-date-text">
                    20/11
                </div>
                <div className="match-card-date-text">
                    23:00
                </div>
            </div>
        </div>

        <div className="match-card-viewmore text-center">
            Detail
        </div>
    </Link>
  )
}
