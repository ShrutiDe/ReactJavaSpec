import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationS.js'
import moment from 'moment'

class ListTodoComp extends Component{
    constructor(props){
        super(props)

        this.state={
            todos : [],
            message : null
        }

        this.updateTodoClicked= this.updateTodoClicked.bind(this)
        this.deleteTodoClicked= this.deleteTodoClicked.bind(this)
        this.refreshTodos= this.refreshTodos.bind(this)
        this.addTodo= this.addTodo.bind(this)
    }
    componentDidMount(){
       this.refreshTodos();
    }

    refreshTodos(){
        TodoDataService.retrieveAllTodos(AuthenticationService.getUserLoggedIn())
        .then(response => {
            this.setState({
                todos : response.data
            })
        })
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getUserLoggedIn()
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState(
                    {message: `Deleted todo ${id} successfully`},
                this.refreshTodos()
                )
            }
        )
    }

    updateTodoClicked(id){
        this.props.history.push(`/todos/${id}`)
    }

    addTodo(){
        this.props.history.push('/todos/-1')
    }

    render(){
        return (
            <div className="listTodo">
                <h1>My Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div class="container">

               <table className="table">
                   <thead>
                       <tr>
                           <th>Description</th>
                           <th>Is Complete</th>
                           <th>Target Date</th>
                           <th>Update</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
                   <tbody>
                      {
                        this.state.todos.map(
                            todo => 
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.isDone}</td>
                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                            <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn">Update</button></td>
                            <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                       </tr>
                        )
                      }
                   </tbody>
               </table>
               <div className="row">
                   <button className="btn btn-success" onClick={this.addTodo}>Add</button>
               </div>
               </div>
            </div>
        )
    }
}

export default ListTodoComp