import React, {Component} from "react";
import TodoItem from "./TodoItem";
import AddTodoComponent from "./AddTodoComponent";
import "./style.css";


export class ToDoComponent extends React.Component {
    constructor(props){
        super(props);
        this.addTodo= this.addTodo.bind(this);
        this.handleOnClick= this.handleOnClick.bind(this);
        this.handleOnChange= this.handleOnChange.bind(this);
        this.deleteTodo= this.deleteTodo.bind(this);
        this.state = {
            todoList : [],
            newTodo:""
        }
    }

    addTodo(todo)
    {
        const todoListAdd = this.state.todoList;
        todoListAdd.push(todo);
        this.setState = ({todoList: todoListAdd});
    }
    deleteTodo(index){
        const {todoList} = this.state;
        todoList.splice(index, 1);
        this.setState({todoList});
    }

    handleOnClick() {
        const {todoList, newTodo} = this.state;
        todoList.push(newTodo);
        this.setState({todoList, newTodo: " "});
    }
    handleOnChange(e) {
        this.setState({newTodo: e.target.value})
    }
    render(){
        return (
            <div>
                <AddTodoComponent value={this.state.newTodo} 
                onChange={this.handleOnChange}
                addTodo={this.handleOnClick}
                deleteTodo ={this.todo}
                /> 
                {this.state.todoList.map(
                    (todo,i, arrays) => {
                        return(<TodoItem key={i} number = {i}
                        value={todo}
                        addTodo = {this.addTodo}
                        deleteTodo={this.deleteTodo}/>);
                    }
                )
                }
                
                {
                    this.state.todoList.length ===0? <div>this is empty</div>: ''
                }
            </div>
        );
     
    }
}

