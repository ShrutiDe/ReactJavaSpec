import axios from 'axios'
import API_URL from '../../constants.js'

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/jpa/users/${name}/todos`)
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/jpa/users/${name}/todos/${id}`)
    }

    retrieveTodo(username, id){
        return axios.get(`http://localhost:8080/jpa/users/${username}/todo/${id}`)
    }
    
    updateTodo(username, id, todo){
        return axios.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo)
    }

    createTodo(username, todo){
        return axios.post(`http://localhost:8080/jpa/users/${username}/todos/`, todo)
    }

}

export default new TodoDataService()
