import axios from 'axios'
import {API_URL} from '../../Constants'

class AuthenticationService {

    executeBasicAuthenticationService(username, password){
        
        return axios.get(`${API_URL}/basicauth`, {
                 headers: {
                     authorization: this.createBasicAuthToken(username, password)
                 }
             })
    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, {username, password})
    }


    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username+":"+password)
    }

    createJWTToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username,password){

        //let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)
        sessionStorage.setItem('authenticatedUser',username)
        //this.setupAxiosInterceptors(basicAuthHeader)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem('authenticatedUser',username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) return false
        return true   
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')

        if (user === null) return ''
        return user   
    }

    setupAxiosInterceptors(token){

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()){
                    config.headers.authorization = token
                }

                return config
            }
        )
    }

}

export default new AuthenticationService()