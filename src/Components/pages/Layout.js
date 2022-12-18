import React from 'react'
import { NavBar } from '../NavBar'
import { Home } from './Home'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

export const Layout = () => {
  return (
  <>
    <CssBaseline>
        <NavBar/>
        <Outlet/>
    </CssBaseline>
    </>  )
}
