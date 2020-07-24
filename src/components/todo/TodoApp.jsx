import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LoginComponent from './LoginComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'

class TodoApp extends Component {
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent />
                </Router>    

                {/*<LoginComponent />
                   <WelcomeComponent /> */}
            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp