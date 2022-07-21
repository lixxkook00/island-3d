import React from 'react'

export default function NavMobile({statusNavMobile,navMobile}) {
  return (
    <div className={`nav-mobile ${statusNavMobile} hide-on-pc`} ref={navMobile}>
        <div 
            className="nav-mobile-item story" 
            data-target="-15m -7m -80m"
            data-name="story"
        >
            <div className="nav-mobile-item-icon">
                <img src="./images/story-ball.png" alt="" />
            </div>
            <div className="nav-mobile-item-title">
                Story
            </div>
        </div>

        <div 
            className="nav-mobile-item gameplay" 
            data-target="0.00m -22.00m -100.00m"
            data-name="gameplay"
        >
            <div className="nav-mobile-item-icon">
                <img src="./images/gameplay-ball.png" alt="" />
            </div>
            <div className="nav-mobile-item-title">
                Game Play
            </div>
        </div>

        <div 
            className="nav-mobile-item roadmap" 
            data-target="9m -11m -95m"
            data-name="roadmap"
        >
            <div className="nav-mobile-item-icon">
                <img src="./images/roadmap-ball.png" alt="" />
            </div>
            <div className="nav-mobile-item-title">
                Road Map
            </div>
        </div>

        <div 
            className="nav-mobile-item about" 
            data-target="-12m -12m -75m" 
            data-name="about"    
            >
            <div className="nav-mobile-item-icon">
                <img src="./images/about-ball.png" alt="" />
            </div>
            <div className="nav-mobile-item-title">
                About
            </div>
        </div>
        
        <div 
            className="nav-mobile-item tokenomic" 
            data-target="15m -18m -84m"
            data-name="tokenomic"
        >
            <div className="nav-mobile-item-icon">
                <img src="./images/tokenomic-ball.png" alt="" />
            </div>
            <div className="nav-mobile-item-title">
                Tokenomic
            </div>
        </div>
    </div>
  )
}
