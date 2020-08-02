import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldS.js'

class WelcomeComp extends Component{
    constructor(props){
        super(props)
        this.retrieveWelcomeMsg=this.retrieveWelcomeMsg.bind(this)
        this.handleSuccessResponse=this.handleSuccessResponse.bind(this)
        this.state= {
            welomeMessage : ''
        }
    }
    render(){
        return (
            <>
            <div className="welcome">
                Welcome {this.props.match.params.name}. 
                For Todo click <Link to="/listTodo">here</Link>
            </div>
            <div className="container">
                Click here to get a customized message
                <button onClick={this.retrieveWelcomeMsg} className="btn btn-success">Get Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }
    retrieveWelcomeMsg(){
        // HelloWorldService.executeHelloWorld()
        // .then(response => this.handleSuccessResponse(response))
        // //.catch()

        // HelloWorldService.executeHelloWorldBean()
        // .then(response => this.handleSuccessResponse(response))
        // //.catch()

        HelloWorldService.executeHelloWorldPathVariable(this.props.match.params.name)
        .then(response => this.handleSuccessResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessResponse(response){
        this.setState({
        welcomeMessage : response.data.message})
    }
    handleError(error){
        let errorMessage=''

        if(error.message)
            errorMessage+=error.message
        if(error.response && error.response.data)
            errorMessage+=error.response.data.message
        this.setState({welcomeMessage: errorMessage})
        }
}

export default WelcomeComp