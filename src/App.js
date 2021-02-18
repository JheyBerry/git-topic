import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { NavBar, Loading } from './components'
import { Home, StarredRepo, MyRepos } from './views'
import ProtectedRoute from './auth/protected-route'
import Container from 'react-bootstrap/Container'

import './app.css'

const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute
            path="/starred-repositories"
            component={StarredRepo}
          />
          <ProtectedRoute path="/repositories" component={MyRepos} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
