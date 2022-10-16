import React from 'react'
import './Betting.scss'

import BettingHeader from '../../components/BettingHeader'
import MatchCard from '../../components/MatchCard'

export default function Betting() {
  return (
    <div className="betting">
        <BettingHeader />

        <div className="container">
            <div className="betting-banner">
                <img src="/images/betting/banner.jpg" alt="" className="" />
            </div>
        </div>

        <div className="container">
            <div className="betting-list grid-4-1">
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>
        </div>
    </div>
  )
}
