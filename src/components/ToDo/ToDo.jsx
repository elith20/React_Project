import React, { Component } from "react";
import AddTask from "../Tasks/AddTask/AddTask";
import Tasks from "../Tasks/Tasks/Tasks";
import {Row, Col, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import EditModal from "../EditModal";
import Confirm from "../Confirm";


export default class ToDo extends Component{
    state = {
        toDoList: [],
        checkedTasks: new Set(),
        toggleConfirmModal: false,
        editedTask:null,
    }
    

    handleAddTask = (newObj)=>{
       let toDoList = [...this.state.toDoList];
       toDoList.push(newObj);
       this.setState({
        toDoList
       });
    }

    handleRemoveSingleTask = (taskId) => {
        let toDoList = [...this.state.toDoList];

        toDoList = toDoList.filter(item => taskId !== item.id)

        this.setState({
            toDoList,
        })

    }

    handleCheckedTasks = (taskID) => {
        let checkedTasks = new Set(this.state.checkedTasks);

        if (checkedTasks.has(taskID)) {
            checkedTasks.delete(taskID);
        } else {
            checkedTasks.add(taskID);
        }

        this.setState({
            checkedTasks
        })

    }

    
    handleRemovedCheckedTasks = () => {
        let toDoList = [...this.state.toDoList];
        let checkedTasks = new Set(this.state.checkedTasks);

        checkedTasks.forEach(itemId => {
            toDoList = toDoList.filter(item => item.id !== itemId)
        })

        checkedTasks.clear()

        this.setState({
            checkedTasks,
            toDoList,
            toggleConfirmModal: false

        })
    }

    handleToggleShowCofirmModal = () => {
        this.setState({
            toggleConfirmModal: !this.setState.toggleConfirmModal,
        })
    }

    toggleHide = () => {
        this.setState({
            toggleConfirmModal: false
        })

    }
    handleEditTask =(taskObj)=>{
        this.setState({
            editedTask:taskObj,
        })
    }

    handleSaveEditedTask =(taskObj)=>{
    let toDoList = [...this.state.toDoList];

    let index  = toDoList.findIndex((item)=>item.id === taskObj.id);
    toDoList[index] = {
        ...toDoList[index],
        ...taskObj
    }

    this.setState({
        toDoList,
        editedTask:null
    })

    }

    render(){
        const{toDoList, checkedTasks,  editedTask, toggleConfirmModal} = this.state;
        return(
            <div style={{background: "#525151"}}>
            <Navbar/>
            <AddTask 
                handleAddTask = {this.handleAddTask}
                disabledButton={checkedTasks.size}
            />
            <Row >
                {toDoList.map((item)=>{
                    return(
                        <Col key={item.id}>
                            <Tasks 
                                item = {item}
                                handleCheckedTasks={this.handleCheckedTasks}
                                handleRemoveSingleTask = {this.handleRemoveSingleTask}
                                disabledButton={checkedTasks.size}
                                handleEditTask={this.handleEditTask}
                            />
                        </Col>
                        )
                    })
                }
            </Row>
            <Row>
                {checkedTasks.size && <Button
                    onClick={this.handleToggleShowCofirmModal}
                    variant="danger"
                    className="w-25 mt-5"
                    disabled={!checkedTasks.size}
                >Remove checked tasks</Button>}
            </Row>
            <Confirm
                show={toggleConfirmModal}
                onHide={this.toggleHide}
                handleRemovedCheckedTasks={this.handleRemovedCheckedTasks}
                count={checkedTasks.size}
            />
            <Col>
                {!!editedTask && 
                <EditModal 
                    onClose={()=>this.handleEditTask(null)}
                    editTaskData={editedTask}
                    onSave={this.handleSaveEditedTask}
                    />
                }
            </Col>          
            </div>
        )
    }
}