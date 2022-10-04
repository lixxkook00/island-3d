import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { activeLoading } from '../../actions/loading'

import './Login.scss'

export default function Login() {
    const dispatch = useDispatch();

    const [formState,setFormState] = useState("")

    const usernameInput = useRef(null)

    useEffect(() => {
        usernameInput.current.value !== "" 
        ? setFormState("active") 
        : setFormState("")
    },[])

    // handle loading
    const loadingState = useSelector(state => state.loading)

    console.log(loadingState)
    
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("cc")
        dispatch(activeLoading(true))
    }

    return (
        <div className="main-bg centering">
            <div className="container centering">
                <div className={`login ${formState}`}>

                    <div className="form-title">
                        SIGN IN
                    </div>

                    <form className="form" id="signUpForm" onSubmit={(e) => handleLogin(e)}>
                        <div className="form-group">
                            <div>
                                <input 
                                    ref={usernameInput}
                                    placeholder="Username" 
                                    type="text" 
                                    id="username" 
                                    className="form-control" 
                                    onFocus={() => setFormState("active")}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                        <div className="form-group mb-1">
                            <div className="password-block">
                                <input 
                                    name="password" 
                                    placeholder="Password" 
                                    // type={typePass}
                                    id="password" 
                                    className="form-control" 
                                    autoComplete="off"
                                />
                                <div className="password-block-icon" onClick={() => console.log()}>
                                    <i className="fa-solid fa-eye"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 d-flex justify-content-end">
                            <Link className="link forgot-pass" to="/forgotpassword">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="">
                            <div className="link">
                                <span className="red-text">
                                    {/* hehe */}
                                </span>
                            </div>
                        </div>

                        <div className="wrapper-animation">
                            <div className="form-group button-animation-right">
                                <button type="submit" className="primary-button">
                                    <div className="text">SIGN IN</div>
                                </button>
                            </div>
                            <div className="form-group button-animation-left">
                                <button type="submit" className="primary-button">
                                    <div className="text">SIGN IN WITH WALLET</div>
                                </button>
                            </div>
                        </div>
                        
                        <div className="centering">
                            <div className="tac form-group">
                                No Account ?&nbsp;
                                <Link className="link primary-text" to="/signup">
                                    Sign up here &gt;
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
