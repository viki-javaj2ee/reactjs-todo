import axios from 'axios'


class HelloWorldDataService{

    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        let username = 'viki'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)

        return axios.get('http://localhost:8080/hello-world-bean',
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

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
            //, {
            //     headers: {
            //         authorization: basicAuthHeader
            //     }
            // }
        )
    }

}

export default new HelloWorldDataService()