import React,{Component} from 'react';
import './App.css';
import Todo  from './components/Todo';
import Logo  from './assets/logo.svg';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    "todo":'默认listTodo'
                }
            ],
            "todo":''
        }
    }

    createNewTodoItem = ()=>{
        this.setState(({list,todo})=>({
            list:[
                ...list,
                {
                    todo
                }
            ],
            'todo':''
        }))
    }

    handleKeyPress = e=>{
        if(e.target.value !== ''){
            if (e.key ==='Enter'){
                this.createNewTodoItem();
            }
        }
    }

    handleInput = e=>{
        this.setState({
            todo:e.target.value
        })
    }

    deleteItem = indexTodoDelete =>{
        this.setState(({list})=>({
            list:list.filter((todo,index)=>index !== indexTodoDelete)
        }))
    }
    render(){
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="logo" />
                <h1 className="Todo-Header">React Todo</h1>

                <div className="ToDo-Container">
                    {
                        this.state.list.map((item,key)=>{
                            return <Todo
                                key={key}
                                item={item.todo}
                                deleteItem={this.deleteItem.bind(this, key)}
                            />
                        })
                    }
                </div>

                <div>
                   <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                    <button className="ToDo-Add" onClick={this.createNewTodoItem}>ADD</button>
                </div>
            </div>
        )
    }
}
export default App