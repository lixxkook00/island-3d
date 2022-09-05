import React, { useRef, useState } from 'react'
import './PureWheel.scss'

import swal from '@sweetalert/with-react';

export default function PureWheel() {

    const main = useRef(0);
    const box = useRef(0);
    
    const [currentIndex,setCurrentIndex] = useState(0)

    const awartList = 6

    const handleSpin = () => {

        // const indexAward = Math.floor(Math.random() *8) +1

        const indexAward = 1

        setCurrentIndex(indexAward)

        const currentPosition = box.current.style.transform.slice(7, -4);

        console.log("award index", indexAward)

        // var deg = indexAward*(360/awartList) + 2880
        var deg = indexAward*(360/awartList)

        box.current.style.transform = "rotate("+deg+"deg)";

        setTimeout(() => {
            swal(`award - ${currentIndex}`, 'Congratz', 'success', 1000, false);
        },3000)
    }


  return (
    <>
    <div className="pure-wheel centering">

        <div className="wheel-bg loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="wheel" ref={main}>

                <div id="box" className="box" ref={box}>
                    <div className="box1">
                        <span className="span1">
                            <b>
                                x1 TOKEN
                                <br/>🎁
                            </b>
                        </span>
                        <span className="span2">
                            <b>
                                x2 TOKEN
                                <br/>🥡
                            </b>
                        </span>
                        <span className="span3">
                            <b>
                                x3 TOKEN
                                <br/>🌯
                            </b>
                        </span>
                        <span className="span4">
                            <b>
                                x4 TOKEN
                                <br/>🥴
                            </b>
                        </span>
                    </div>
                    <div className="box2">

                        <span className="span1">
                            <b>
                                x5 TOKEN
                                <br/>🌯
                            </b>
                        </span>

                        <span className="span2">
                            <b>
                                x6 TOKEN
                                <br/>🌯
                            </b>
                        </span>

                        <span className="span3">
                            <b>
                                x7 TOKEN
                                <br/>🌯
                            </b>
                        </span>

                        <span className="span4">
                            <b>
                                x8 TOKEN
                                <br/>🥴
                            </b>
                        </span>
                    </div>
                </div>
                <button className="spin centering" >
                    <img src="https://parspng.com/wp-content/uploads/2022/02/ballpbg.parspng.com-8.png" alt="" />    
                </button>   
            </div>
         </div>
        <div className="gradient-box" onClick={() => handleSpin() }>
            Quầy quầy quây quâyyy
        </div>
    </>
  )
}
