import React from 'react'
import { Link } from 'react-router-dom'
import './GamePlays.scss'

export default function GamePlays({name}) {
  return (
    <>
        {
            name === "gameplay"
            &&
            <div className="gameplays">
                <Link to='/login' className="gameplays-item gameplays-item--disabled">
                    <div className="gameplays-item-img centering">
                        <img src="/images/gameplay-1.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Dice
                    </div>
                </Link>

                <Link to='/dashboard' className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/KICK.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Click to Earn
                    </div>
                </Link>

                <Link to="/lucky-wheel" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/LUCKY WHEEL.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Lucky Wheel
                    </div>
                </Link>

                <Link to='/prediction' className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/predition.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Prediction
                    </div>
                </Link>

                <Link to='/betting' className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="/images/BETTING.jpg" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Bet WC
                    </div>
                </Link>

                <Link to='/login' className="gameplays-item gameplays-item--disabled">
                    <div className="gameplays-item-img centering">
                        <img src="/images/gameplay-3.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Evoplay
                    </div>
                </Link>
            </div>
        }
    </>
  )
}
