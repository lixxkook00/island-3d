import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Loading.scss"

export default function Loading() {

  const globalState = useSelector(state => state.loading)

  return (
    <>
      {
        globalState

        &&

        <div className="loading centering">
          <img src="https://www.inspirationde.com/wp-content/uploads/2019/09/cd514331234507.564a1d2324e4e.gif" alt="" />
        </div>
      }
    </>
  )
}
