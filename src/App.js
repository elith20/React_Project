import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
// import AddTask from "./components/Tasks/AddTask/AddTask";
// import Tasks from "./components/Tasks/Tasks/Tasks";
import ToDo from "./components/ToDo/ToDo";


export default class App extends Component {
 

    render() {
        // const { toDoList, checkedTasks, toggleConfirmModal , editedTask} = this.state;
        
        return <>
            <Navbar />
            {/* <AddTask/> */}
            <ToDo/>
            {/* <AddTask handleAddTask={this.handleAddTask}/> */}
            {/* {toDoList.map((item) => {
                return(
                    <Tasks  item={item} />)})} */}
            </>
    }
}