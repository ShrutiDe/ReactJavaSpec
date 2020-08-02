import React, {Component} from 'react'
import AuthenticationService from './AuthenticationS.js'
import { withRouter } from 'react-router';

import {Link} from 'react-router-dom'

class HeaderComp extends Component{
    render(){
        const isUserLog = AuthenticationService.isUserLoggedIn();
        console.log(isUserLog);
        return(
           <header>
               <nav  className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div>
                    <a href="www.google.com">Google</a>
                   </div>
                   <ul className="navbar-nav">
                       {isUserLog && <li><Link className="nav-link" to="/welcome/Shrutide">Home</Link></li>}
                       {isUserLog && <li><Link className="nav-link" to="/listTodo">Todos</Link></li>}
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       {!isUserLog && <li><Link className="nav-link" to="/login">Login</Link></li>}
                       {isUserLog && <li><Link onClick={AuthenticationService.logout} className="nav-link" to="/logout">Logout</Link></li>}
                   </ul>
               </nav>
           </header>
        )
    }
}

export default withRouter(HeaderComp)