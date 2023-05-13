import React from 'react'
import {Outlet} from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function index() {
  return (
    <>
        <MainNavigation/>
        <hr/>
        <Outlet/>
    </>
  )
}
