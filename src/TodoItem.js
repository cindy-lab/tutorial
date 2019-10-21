import React, {Component} from  "react";

export default (props) => {
    return(
        <div key={props.number}>
           <span className="todo-item">{props.number+1}. {props.value}</span>
            <button>Edit</button>&nbsp;
            <button onClick={() => props.deleteTodo(props.number)}>Delete</button>
        </div>
    )
}