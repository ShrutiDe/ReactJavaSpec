import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticateRoute from './AuthenticateRoute'
import LoginComp from './LoginComp'
import ListTodoComp from './ListTodoComp'
import HeaderComp from './HeaderComp'
import FooterComp from './FooterComp'
import LogoutComp from './LogoutComp'
import WelcomeComp from './WelcomeComp'
import TodoComp from './TodoComponent'

class TodoApp extends Component{
    render(){
        return (
            <div className="Todo">
               <Router>
               <>
               <HeaderComp />
                <Switch>
                   <Route path="/" exact component={LoginComp}/>
                   <Route path="/login" component={LoginComp}/>
                   <AuthenticateRoute path="/welcome/:name" component={WelcomeComp}/>
                   <AuthenticateRoute path="/listTodo" component={ListTodoComp}/>
                   <AuthenticateRoute path="/logout" component={LogoutComp}/>
                   <AuthenticateRoute path="/todos/:id" component={TodoComp}/>
                   <Route component={ErrorComp} />
                </Switch>
                <FooterComp />
                </>
               </Router>
              
             
            </div>
        )
    }
}





function ErrorComp(){
    return <div>Error Page Display</div>
}


// function ValidLogin(props){
//     if(props.hasLoginFailed){
//         return <div>Login Failed</div>
//     }else  if(props.successMsg){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp