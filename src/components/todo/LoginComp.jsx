import React, {Component} from 'react'
import AuthenticationService from './AuthenticationS.js'

class LoginComp extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'Shrutide',
            password:'',
            hasLoginFailed: false,
            successMsg: false
        }
        //this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.validateLogin=this.validateLogin.bind(this)
    }
    // handleUsernameChange(event){

    //     this.setState({username:event.target.value})
    // }
    handleChange(event){
        console.log(event.target.name)
        this.setState({[event.target.name]:event.target.value})
    }

    validateLogin(){
        // if(this.state.username==='Shrutide' && this.state.password==='desaish'){
        //     AuthenticationService.registerSuccessfull(this.state.username,this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({hasLoginFailed:false})
        //     // this.setState({successMsg:true})
        // }else{
        //     this.setState({hasLoginFailed:true})
        //     this.setState({successMsg:false})
        //}
        // AuthenticationService.executeBasicAuthService(this.state.username,this.state.password)
        // .then(
        //     () => {
        //         AuthenticationService.registerSuccessfull(this.state.username,this.state.password);
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }
        // )
        // .catch(
        //     () => {
        //         this.setState({hasLoginFailed:true})
        //         this.setState({successMsg:false})
        //     }
        // )

        AuthenticationService.executeJwtAuthService(this.state.username,this.state.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessfullforJwt(this.state.username,response.data.token);
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        )
        .catch(
            () => {
                this.setState({hasLoginFailed:true})
                this.setState({successMsg:false})
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ValidLogin hasLoginFailed={this.state.hasLoginFailed} successMsg={this.state.successMsg} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Login Failed</div>}
                    {this.state.successMsg && <div>Login Successful</div>}
                    UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                     <button className="btn btn-success" onClick={this.validateLogin}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComp