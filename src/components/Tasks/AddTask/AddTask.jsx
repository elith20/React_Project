import React, { Component } from "react";
import classes from'./AddTask.module.css'
import idGenerator from "../../../utils/utils";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';





export default class AddTask extends Component {
    state = {
        id: idGenerator(),
        toDoList: [],
        title: "",
        description: "",
        importance: "",
        startdate: "",
        enddate: "",
        developers: "",
        show: false,
    }

    handleTitleValue = (event) => {
        this.setState({
            title: event.target.value,

        })
    }

    handleDescription = (event) => {
        this.setState({
            description: event.target.value,

        })
    }

    handleRadioValue = (e) => {
        this.setState({
            importance: e.target.value
        })
    }

    handleSelectValue = (event) => {
        this.setState({
            developer: event.target.value
        })
    }

    handleStartDate = (e) => {
        this.setState({
            startdate: e.target.value,
        })
    }

    handleEndDate = (e) => {
        this.setState({
            enddate: e.target.value,
        })
    }

    handleOpenClose = () =>{
        this.setState({
            show : !this.state.show
        })
    }

    handleAddTask = (event) => {
        event.preventDefault();
        const { title, description, importance, startdate, enddate, developer, show} = this.state;
        // if (!title || !description || !importance || !developer || !startdate || !enddate) {

        //     return;
        // }

        let newObj = {
            id: idGenerator(),
            title,
            description,
            importance,
            startdate,
            enddate,
            developer,
            show,
        }

        this.props.handleAddTask(newObj);

        let toDoList = [...this.state.toDoList];
        toDoList.push(newObj);
        
        fetch('http://localhost:3004/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toDoList)
        })
        .then(response => {
            if (!response.ok) {
                throw response.error
            }
            return response.json()
        })
        .then(task => {
            toDoList.push(task);
            this.setState({
                toDoList,
                show: false

            })
        })
        .catch(error => console.log(error))

        this.handleOpenClose()
        this.setState({
            toDoList,
            title: '',
            description: '',
            importance: '',
            startdate: '',
            enddate: '',
            developer: '',
            show: false
        })
    }

    handleAddKeyDown = (event) => {
        if (event.key === "Enter") {
          this.handleAddTask(event)
        }
    
    }

    render() {
        const { title, developer, importance, startdate, enddate, description } = this.state;
        const { disabledButton } = this.props;

        return (
            <div>               
                <div className={classes.newtask}>
                    <Button 
                        className={classes.Button} 
                        onClick={this.handleOpenClose}
                        disabled={disabledButton}
                        >New Task
                    </Button>
                </div>
                <Modal show={this.state.show} onHide={this.handleOpenClose} className={classes.Modal}>
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title className="text-info">Add New Task</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form className={classes.Form}>
                            <Form.Group  >
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    className={classes.Title}
                                    type="text"
                                    id="title"
                                    value={title}
                                    placeholder="Task name..."
                                    onChange={this.handleTitleValue} />
                            </Form.Group>
                            <Form.Group className="mb-3 text-info">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    className={classes.description}
                                    as="textarea"
                                    id="description"
                                    value={description}
                                    placeholder="Describe task..."
                                    onChange={this.handleDescription}
                                />
                            </Form.Group>
                            <Form.Group    
                                className="mb-3" 
                                id="importance" 
                                >
                                <Form.Label className ="text-info" style={{display:"block"}}>Choose importance</Form.Label>
                                <Form.Group className="mb-3"> 
                                    <Form.Label> High
                                    <Form.Check
                                        inline="true"
                                        value="high"
                                        name="importance"
                                        type="radio"
                                        checked={importance === 'high'}
                                        onChange={this.handleRadioValue}
                                    />
                                    </Form.Label>
                                    <Form.Label > Medium
                                    <Form.Check
                                        inline="true"
                                        value="medium"
                                        name="importance"
                                        type="radio"
                                        checked={importance === 'medium'}
                                        onChange={this.handleRadioValue}
                                    />
                                    </Form.Label>
                                    <Form.Label>Low
                                    <Form.Check
                                        inline="true"
                                        value="low"
                                        name="importance"
                                        type="radio"
                                        checked={importance === 'low'}
                                        onChange={this.handleRadioValue}
                                    />
                                    </Form.Label>
                                </Form.Group>
                                    {/* <Form.Check
                                        inline="true"
                                        label="High"
                                        name="importance"
                                        type="radio"
                                        id="High"
                                        checked={importance === 'High'}
                                        onChange={this.handleRadioValue}
                                    />
                                    <Form.Check
                                        inline="true"
                                        label="Medium"
                                        name="importance"
                                        type="radio"
                                        id="Medium"
                                        checked={importance === 'Medium'}
                                        onChange={this.handleRadioValue}
                                    />
                                    <Form.Check
                                        inline="true"
                                        label="Low"
                                        name="importance"
                                        type="radio"
                                        id="Low"
                                        checked={importance === 'Low'}
                                        onChange={this.handleRadioValue}
                                    /> */}
                            </Form.Group>
                            <Form.Label className="text-info">Choose duration</Form.Label>
                            <Form.Group className={classes.date}>
                                <Form.Control 
                                    inline="true"
                                    type="date"
                                    id="startdate"
                                    value={startdate}
                                    onChange={this.handleStartDate} />
                                <Form.Control 
                                    inline="true"
                                    type="date"
                                    id="enddate"
                                    value={enddate}
                                    onChange={this.handleEndDate} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Select
                                    aria-label="Default select example"
                                    value={developer}
                                    onChange={this.handleSelectValue}
                                    className="text-info">
                                    <option >Choose developer</option>
                                    <option value="Dolera">Dolera</option>
                                    <option value="Aksana">Aksana</option>
                                    <option value="Developer3">Developer3</option>
                                    <option value="Developer 4">Developer 4</option>
                                    <option value="Developer 5">Developer 5</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button 
                            variant="info" 
                            onClick={this.handleAddTask} 
                            onKeyDown={this.handleAddKeyDown}
                            disabled={disabledButton}
                            >Add Task</Button>
                        <Button 
                            variant="secondary" 
                            onClick={this.handleOpenClose}
                            disabled={disabledButton}
                            >Close</Button>
                            
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}
