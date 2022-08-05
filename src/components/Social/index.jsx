import React from 'react'
import './Social.scss'

export default function Social({status}) {
  return (
    <div className={`social ${status}`}>
        <div className="social-wrapper">
            <a href="/" className="social-item">
                <i className="fa-solid fa-paper-plane"></i>
            </a>

            <a href="/" className="social-item">
                <i className="fa-solid fa-paper-plane"></i>
            </a>

            <a href="/" className="social-item">
                <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="/" className="social-item">
                <i className="fa-solid fa-envelope"></i>
            </a>

            <a href="/" className="social-item">
                <i className="fa-solid fa-book-open"></i>
            </a>
        </div>
    </div>
  )
}
