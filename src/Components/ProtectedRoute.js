import React from "react"
import { Route, Redirect } from "react-router-dom"
import { apiService } from "../Api"

function ProtectedRoute({ component, ...props }) {
  const isAuth = apiService.checkAuth()
  if (isAuth) return <Route {...props}>{component}</Route>
  return <Redirect to={{ pathname: "/", state: { from: props.location.pathname } }} />
}

export default ProtectedRoute
