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
                <div className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-1.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Dice
                    </div>
                </div>

                <Link to="/lucky-wheel" className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-2.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Lucky Wheel
                    </div>
                </Link>

                <div className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-3.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Evoplay
                    </div>
                </div>

                <div className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-4.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Tower
                    </div>
                </div>
                <div className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-5.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Hilo
                    </div>
                </div>

                <div className="gameplays-item">
                    <div className="gameplays-item-img centering">
                        <img src="./images/gameplay-3.png" alt="" />
                    </div>
                    <div className="primary-gradient-text">
                        Evoplay
                    </div>
                </div>
            </div>
        }
    </>
  )
}
