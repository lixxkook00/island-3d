import React , { useState } from 'react'
import './ContentModal.scss'

const content = [
  {
    name:"story",
    title:"STORY",
    content:"Soccer Realm is the most diverse ecosystem specifically designed for football fans around the globe. We want the blockchain application to bring the best experience to football fans. In the fantasy universe of Soccer Realm, you will freely play with your passion for this sport, feeling it in many different ways."
  },
  {
    name:"gameplay",
    title:"GAME PLAY",
    content:"Soccer Realm is the most diverse ecosystem specifically designed for football fans around the globe. We want the blockchain application to bring the best experience to football fans. In the fantasy universe of Soccer Realm, you will freely play with your passion for this sport, feeling it in many different ways."
  },
  {
    name:"roadmap",
    title:"ROAD MAP",
    content:"Q2-2022 Ideas for the project Building a technology platform The graphic design of the project Whitepaper v1 Q3-2022 Completing the website Seed-round Testnet project Private-sale on Pinksale Organic Community Growth Project mainnet Q4-2022 Public-sale Listing Coinmarketcap Listing Coingecko Launch-NFT Open the staking feature. Open the project's Marketplace Open the match prediction feature of the World Cup event. Impact Marketing Q1-2023 Audit More Partnerships Launching Football Manager game Building the foundation to develop Metaverse Listing Cex Burning tokens Launching the NFT Material Metaverse Building Whitepaper v2 Q2-2023 Launching NFT Izan On-game VR device testing Launching NFT Lean Tournament feature"
  },
  {
    name:"about",
    title:"ABOUT",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem."
  },
  {
    name:"tokenomic",
    title:"TOKENOMIC",
    content:"Token:Soccer Realm Symbol : SOR Chain: BSC Total Supply: 1.000.000.000 SOR. SOR is a token deployed on the Binance Smart Chain. It is used in the ecosystem of the Soccer Realm. Giving voting rights to owners to decide the direction of development of the Soccer Realm ecosystem To join the NFT exchange market, log in to the game, and generate passive income through staking."
  },
]

export default function ContentModal({status,name}) {
  
  return (
    <div className={`content-modal ${status}`}>
      {
        content.map((item,index) => {
          if(name===item.name){
            return (
              <div key={index} className="content-modal-wrapper">
                <div className="content-modal-title">
                  {item.title}
                </div>

                <div className="content-modal-main">
                  {item.content}
                </div>
              </div>
            )
          }
        })
      }
      
    </div>
  )
}
