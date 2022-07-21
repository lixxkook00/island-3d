import React , {useState} from 'react'
import './Menu.scss'

import { toggleActiveClass } from '../../Utils/toggleActive'

export default function Menu({setRotateStatusGlobal,rotateStatusGlobal}) {
    const [menuStatus,setMenuStatus] = useState("")
    const [soundStatus,setSoundStatus] = useState("")
    const [rotateStatus,setRotateStatus] = useState("")

    // handle music background
    // const [audio] = useState(new Audio(url));

    const handleSound = () => {
        toggleActiveClass(soundStatus,setSoundStatus)
    }

    const handleRotate = () => {
        toggleActiveClass(rotateStatus,setRotateStatus)
        setRotateStatusGlobal(!rotateStatusGlobal)
    }

    return (
        <div className={`menu ${menuStatus}`}>
            <div 
                className="menu-btn" 
                onClick={() => {menuStatus==="" ? setMenuStatus("active") : setMenuStatus("")}}
            >
                <i className="fa-solid fa-gear"></i>
            </div>
            <div className="menu-content">
                <div className="menu-content-item">
                    <div 
                        className={`menu-content-icon ${soundStatus}`}
                        onClick={() => handleSound()}
                    >
                        <i className="fa-solid fa-music"></i>
                    </div>
                    <div className="menu-content-title">
                        Sound
                    </div>
                </div>

                <div className="menu-content-item">
                    <div 
                        className={`menu-content-icon ${rotateStatus}`}
                        onClick={() => handleRotate()}
                    >
                        <i className="fa-solid fa-rotate"></i>
                    </div>
                    <div className="menu-content-title">
                        Auto Rotate
                    </div>
                </div>
            </div>
        </div>
    )
}
