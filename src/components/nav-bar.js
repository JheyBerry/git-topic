import React from 'react'
import Navbar from 'react-bootstrap/navbar'

import MainNav from './main-nav'
import AuthNav from './auth-nav'

const NavBar = () => (
  <div className="nav-container mb-3">
    <Navbar className="navbar navbar-expand-md">
        <div className="container-fluid" style={{padding:"0 10rem"}}>
          <div className="navbar-brand logo" />
          <MainNav />
          <AuthNav />
        </div>
    </Navbar>
  </div>
)

export default NavBar
