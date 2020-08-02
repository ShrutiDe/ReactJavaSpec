import React, {Component} from 'react'
import AuthenticationService from './AuthenticationS.js'
import { Route, Redirect } from 'react-router-dom'

class AuthenticateRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
           return <Route {...this.props}/>
        }else{
            console.log('not logged')
           return <Redirect to="/login"/>
        }
    }
}

export default AuthenticateRoute