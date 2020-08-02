import axios from 'axios'
import {API_URL} from '../../constants.js'

export const USER_NAME_SESSION = 'authentication'
class AuthenticationService{

    basicAuthToken(username,password){
        return 'Basic '+ window.btoa(username + ":" +password)
    }

    executeBasicAuthService(username,password){
        
        return axios.get(`${API_URL}/basicAuth`,{
            headers:{
                authorization: this.basicAuthToken(username,password)
            }
        })
    }

    executeJwtAuthService(username,password){
        
        return axios.post(`${API_URL}/authenticate`,{
            username, password
        })
    }

    createJwtToken(token){
        return 'Bearer '+ token
    }
    registerSuccessfullforJwt(username,token){
        sessionStorage.setItem('USER_NAME_SESSION',username);
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    registerSuccessfull(username,password){
        console.log('Sucessfull')
        sessionStorage.setItem('USER_NAME_SESSION',username);
        this.setupAxiosInterceptors(this.basicAuthToken(username,password))
    }

    logout(){
        sessionStorage.removeItem('USER_NAME_SESSION')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('USER_NAME_SESSION')
        if(user===null) return false
        return true
    }

    getUserLoggedIn(){
        let user = sessionStorage.getItem('USER_NAME_SESSION')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader){
        

        axios.interceptors.request.use(
            (config) =>  {
                if(this.isUserLoggedIn())
                    config.headers.authorization = basicAuthHeader
                return config
            }
           
        )
       
    }
}
export default new AuthenticationService()