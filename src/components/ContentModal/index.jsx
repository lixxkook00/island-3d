import React , { useState } from 'react'
import './ContentModal.scss'

const content = [
  {
    name:"story",
    title:"STORY",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying."
  },
  {
    name:"gameplay",
    title:"GAME PLAY",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying."
  },
  {
    name:"roadmap",
    title:"ROAD MAP",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying."
  },
  {
    name:"about",
    title:"ABOUT",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying."
  },
  {
    name:"tokenomic",
    title:"TOKENOMIC",
    content:"Each gemstone is crystallized for up to billions of years. Created from the quintessence of heaven and earth, each piece has a different beauty. No two are the same. The added bonus is the skill of the artisans, which will enhance the value of that gem. However, at present, there are mixed real and fake stones on the market. If the buyer is not knowledgeable, it is easy to fall into a state of anxiety when buying."
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
