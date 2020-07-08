import React,{Component} from 'react';
import './Todo.css'
class Todo extends Component{
    render(){
        return(
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <button className="ToDoItem-Delete" onClick={this.props.deleteItem}>
                    Del
                </button>
            </div>
        )
    }
}


export default Todo;