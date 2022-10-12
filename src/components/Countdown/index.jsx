import React , { useState , useEffect} from 'react'
import "./Countdown.scss"

export default function Countdown({endTime}) {
    const [dDisplay,setdDisplay] = useState()
    const [hDisplay,sethDisplay] = useState()
    const [mDisplay,setmDisplay] = useState()
    const [sDisplay,setsDisplay] = useState()

    // const DDAY = endTime;
    const DDAY = new Date(2022, 11, 7, 11, 5, 0);

    function getTimeRemaining(DDAY) {
        // convert to correct format mtf iphone
        // const arr = DDAY.split(/[- :]/)
        // const DDAYFinal = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
        const DDAYFinal = new Date(2022, 11, 7, 11, 5, 0);

        var t = DDAYFinal - new Date,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));

        setdDisplay(days)
        sethDisplay(hours)
        setmDisplay(minutes)
        setsDisplay(seconds)
    }

    const getTimeLeft = () => {
        if(DDAY){
            getTimeRemaining(DDAY)
        }
    }

    const inter = setInterval(() => {
        clearInterval(inter)
        getTimeLeft()
    },1000)

    if(DDAY===null){
        clearInterval(inter)
    }

    return (
        <div className="countdown d-flex align-items-center justify-content-center">
            <div className="countdown-item text-center">
                <div className="countdown-item-num">
                    {dDisplay}
                </div>
                <div className="countdown-item-text">
                    DAY
                </div>
            </div>
            <div className="countdown-item text-center">
                <div className="countdown-item-num">
                    {hDisplay}
                </div>
                <div className="countdown-item-text">
                    HOUR
                </div>
            </div>
            <div className="countdown-item text-center">
                <div className="countdown-item-num">
                    {mDisplay}
                </div>
                <div className="countdown-item-text">
                    MIN
                </div>
            </div>
            <div className="countdown-item text-center">
                <div className="countdown-item-num">
                    {sDisplay}
                </div>
                <div className="countdown-item-text">
                    SEC
                </div>
            </div>
        </div>
    )
}
