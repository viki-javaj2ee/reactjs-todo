import axios from 'axios'


class HelloWorldDataService{

    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080//hello-world/path-variable/${name}`)
    }

}

export default new HelloWorldDataService()