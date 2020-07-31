import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect } from 'react-redux'


const PrivateRoute = ({ component: Component, token, ...rest }) => (
  
  <Route {...rest} render={(props) => (  
    token
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
      
  )} />
)

export default connect(state => ({token: localStorage.getItem("userToken")}))(PrivateRoute)