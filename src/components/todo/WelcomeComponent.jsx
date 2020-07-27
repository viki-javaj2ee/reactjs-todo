import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldDataService from '../../api/todo/HelloWorldDataService'

class WelcomeComponent extends Component {

    constructor(props){
        
        super(props)

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.retrieveWelcomeBeanMessage = this.retrieveWelcomeBeanMessage.bind(this)
        this.retrievePathVariableMessage = this.retrievePathVariableMessage.bind(this)

        this.state = {
            welcomeMessage: '',
            welcomeBeanMessage: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome !!!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name} to Todo Application. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get customized welcome message.<br/>
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                    <button onClick={this.retrieveWelcomeBeanMessage} className="btn btn-success">Get Welcome Bean Message</button>
                    <button onClick={this.retrievePathVariableMessage} className="btn btn-success">Path Variable Message</button>
                    </div>
                    <div>
                        {this.state.welcomeMessage}
                    </div>
                    <div>
                        {this.state.welcomeBeanMessage}
                    </div>
                
            </div>
        )            
    }

    retrieveWelcomeMessage(){
        console.log("retrieve clicked");
        HelloWorldDataService.executeHelloWorldService()
        .then(response => this.handleSuccessfulResponse(response))
        //.catch()
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})
    }

    retrieveWelcomeBeanMessage(){
        HelloWorldDataService.executeHelloWorldBeanService()
        .then(response => this.setState({welcomeBeanMessage: response.data.message}))
        //.catch()
    }

    retrievePathVariableMessage(){
        HelloWorldDataService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.setState({welcomeBeanMessage: response.data.message}))
        //.catch()
    }

} 

export default WelcomeComponent