import React, {Component} from "react";

export default (props) => {
    return (
        <div className="addtodo-component">
            <input type="text" value={props.value} onChange={props.onChange}></input>
            &nbsp;&nbsp;
            <button onClick={props.addTodo}>add</button>
        </div>
    );
}