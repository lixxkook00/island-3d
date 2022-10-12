import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Betting from '../pages/Betting'
import BettingRoom from '../pages/BettingRoom'

import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import LuckyWheel from '../pages/LuckyWheel'
import MainPage from '../pages/MainPage'
import Prediction from '../pages/Prediction'

export default function Routers() {
  return (
    <Routes>

        <Route exact path="/" element={<MainPage />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/lucky-wheel" element={<LuckyWheel />} />

        <Route exact path="/prediction" element={<Prediction />} />

        <Route exact path="/dashboard" element={<Dashboard />} />

        <Route exact path="/betting" element={<Betting />} />

        <Route exact path="/betting/room" element={<BettingRoom />} />

    </Routes>
  )
}
