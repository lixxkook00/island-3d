import React , { useState } from 'react'
import './ContentModal.scss'

const content = [
  {
    name:"tokenomic",
    title:"TOKENOMIC",
    content:"Token:Soccer Realm Symbol : WFB Chain: BSC Total Supply: 1.000.000.000 WFB. WFB is a token deployed on the Binance Smart Chain. It is used in the ecosystem of the Soccer Realm. Giving voting rights to owners to decide the direction of development of the Soccer Realm ecosystem To join the NFT exchange market, log in to the game, and generate passive income through staking."
  },
]

export default function ContentModal({status,name}) {

  console.log(name)
  
  return (
    
    <>
      {
        name === "story"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              STORY
            </div>

            <div className="content-modal-main">
              <div className="content-modal-li">
                <span className="primary-gradient-text">
                  Football Wonderland 
                </span>
                 is the most diverse ecosystem specifically designed for football fans around the globe.
              </div>
              <div className="content-modal-li">
                We want the blockchain application to bring the best experience to football fans. 
              </div>
              <div className="content-modal-li">
                In the fantasy universe of <span className="primary-gradient-text">
                  Football Wonderland 
                </span>, you will freely play with your passion for this sport, feeling it in many different ways.
              </div>
            </div>
          </div>
        </div>
      }

      {
        name === "about"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              ABOUT
            </div>

            <div className="content-modal-main">
              <div className="content-modal-li">
                Each gemstone is crystallized for up to 
                <span className="primary-gradient-text">
                  billions of years.
                </span>
              </div>
              <div className="content-modal-li">
                No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem.
              </div>
            </div>
          </div>
        </div>
      }

      {
        name === "gameplay"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              GAMEPLAY
            </div>

            <div className="content-modal-main">
              <div className="content-modal-li">
                <span className="primary-gradient-text">
                  Football Wonderland 
                </span> is the most diverse ecosystem specifically designed for football fans around the globe.
              </div>
              <div className="content-modal-li">
                We want the blockchain application to bring the best experience to football fans.
              </div>
               <div className="content-modal-li">
                In the fantasy universe of 
                <span className="primary-gradient-text">
                  Football Wonderland 
                </span>
                , you will freely play with your passion for this sport, feeling it in many different ways.
              </div>
            </div>
          </div>
        </div>
      }

      {
        name === "roadmap"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              ROAD MAP
            </div>

            <div className="content-modal-main">
              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q2-2022 
                </span>
                <span>
                  Ideas for the project Building a technology platform The graphic design of the project Whitepaper v1
                </span>
              </div>

              <div className="roadmap-item roadmap-item--right">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q3-2022
                </span>
                <span>
                  Completing the website Seed-round Testnet project Private-sale on Pinksale Organic Community Growth Project mainnet
                </span>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q4-2022 
                </span>
                <span>
                  Public-sale Listing Coinmarketcap Listing Coingecko Launch-NFT Open the staking feature. Open the project's Marketplace Open the match prediction feature of the World Cup event. Impact Marketing
                </span>
              </div>

              <div className="roadmap-item roadmap-item--right">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q1-2023
                </span>
                <span>
                  Audit More Partnerships Launching Football Manager game Building the foundation to develop Metaverse Listing Cex Burning tokens Launching the NFT Material Metaverse Building Whitepaper v2
                </span>
              </div>

              <div className="roadmap-item roadmap-item--left">
                <span className="primary-gradient-text">
                 <i className="fa-solid fa-angles-right"></i> Q2-2023 
                </span>
                <span>
                  Launching NFT Izan On-game VR device testing Launching NFT Lean Tournament feature
                </span>
              </div>

            </div>
          </div>
        </div>
      }

      {
        name === "tokenomic"
        &&
        <div className={`content-modal ${status}`}>
          <div className="content-modal-wrapper">
            <div className="content-modal-title primary-gradient-text">
              TOKENOMIC
            </div>

            <div className="tokenomic-img">
              <img src="./images/tokenomic-chart.png" alt="" />
            </div>

            <div className="content-modal-main content-modal-main--tokenomic">
              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Token
                </div>
                <span className="primary-gradient-text">
                  : Football Wonderland.
                </span>
              </div>

              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Symbol
                </div>
                <span className="primary-gradient-text">
                  : WFB
                </span>
              </div>

              <div className="content-modal-li">
                <div className="content-modal-li-title">
                  Total Supply
                </div>
                <span className="primary-gradient-text">
                  : 1.000.000.000
                </span>
              </div>

              <div className="content-modal-li">
                WFB is a token deployed on the Binance Smart Chain. It is used to join the NFT exchange market, log in to the game, and generate passive income through staking.
              </div>

            </div>
          </div>
        </div>
      }

    </>
  )
}
