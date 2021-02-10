import React from 'react'

import MainNav from './main-nav'
import AuthNav from './auth-nav'

const NavBar = () => (
  <div className="nav-container mb-3">
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid" style={{padding:"0 10rem"}}>
        <div className="navbar-brand logo" />
        <MainNav />
        <AuthNav />
      </div>
    </nav>
  </div>
)

export default NavBar
