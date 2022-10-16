import React from 'react'
import './LiveCard.scss'

export default function LiveCard() {
  return (
    <div className="livecard">
         <div className="d-flex align-items-center justify-content-center">
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
    </div>
  )
}
