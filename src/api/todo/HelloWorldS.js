import axios from 'axios'
import {API_URL} from '../../constants.js'

class HelloWorldService{
    executeHelloWorld(){
        return axios.get(`${API_URL}/hello-world`)
       // console.log('executed Service')
    }

    executeHelloWorldBean(){
        return axios.get(`${API_URL}/hello-world-bean`)
       // console.log('executed Service')
    }

    executeHelloWorldPathVariable(name){
        // let username= 'shrutide'
        // let password= 'desaish'
        // let basicAuthHeader= 'Basic '+ window.btoa(username + ":" +password)
        return axios.get(`${API_URL}/hello-world/path-variable/${name}`
        // ,{
        //     headers: {
        //     authorization: basicAuthHeader
        //     }
        // }
        )
       // console.log('executed Service')
    }
}

export default new HelloWorldService()