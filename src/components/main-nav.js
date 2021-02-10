import { NavLink } from 'react-router-dom'
import React from 'react'

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/repositories"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      My Repositories
    </NavLink>
    <NavLink
      to="/starred-repositories"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Starred Repositories
    </NavLink>
  </div>
)

export default MainNav
