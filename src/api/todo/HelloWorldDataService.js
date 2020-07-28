import axios from 'axios'
import {API_URL} from '../../Constants'

class HelloWorldDataService{

    executeHelloWorldService(){
        return axios.get(`${API_URL}/hello-world`)
    }

    executeHelloWorldBeanService(){
        let username = 'viki'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)

        return axios.get(`${API_URL}/hello-world-bean`,
        {
            headers: {
                authorization: basicAuthHeader
            }
        }        
        )
    }

    executeHelloWorldPathVariableService(name){
        // let username = 'viki'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)

        return axios.get(`${API_URL}/hello-world/path-variable/${name}`
            //, {
            //     headers: {
            //         authorization: basicAuthHeader
            //     }
            // }
        )
    }

}

export default new HelloWorldDataService()