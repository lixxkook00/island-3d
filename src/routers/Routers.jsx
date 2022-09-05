import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LuckyWheel from '../pages/LuckyWheel'
import MainPage from '../pages/MainPage'

export default function Routers() {
  return (
    <Routes>

        <Route exact path="/" element={<MainPage />} />

        <Route exact path="/lucky-wheel" element={<LuckyWheel />} />

    </Routes>
  )
}
