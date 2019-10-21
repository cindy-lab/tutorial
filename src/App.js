import React, {Component} from "react";
import {ToDoComponent} from "./ToDoComponent";


export default class App extends Component {
  render(){
    return(
      <center>
      <div className="App">
        <ToDoComponent/>
      </div>
      </center>
    );
  }
}
// export default hot (module) (App);
