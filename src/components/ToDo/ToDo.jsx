import React from "react";
import AddTask from "../Tasks/AddTask/AddTask";
import Tasks from "../Tasks/Tasks/Tasks";
import {Row, Col, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import EditModal from "../EditModal";
import Confirm from "../Confirm";
import { useState, useEffect } from "react";


// export default class ToDo extends Component{
//     state = {
//         toDoList: [],
//         checkedTasks: new Set(),
//         toggleConfirmModal: false,
//         editedTask:null,
//     }

//     componentDidMount(){
//         fetch('http://localhost:3004/tasks',{})
//         .then(response =>{
//             if(!response.ok){
//                 throw(response.error)
//             }
//             response.json()
//         })
//         .then(tasks => {
//             let toDoList = [...tasks]
//             this.setState({
//                 toDoList
//             })
//         })
//         .catch(error=> {
//             console.log(error)
//         })
//     }

//     handleAddTask = (newObj) => {
//         let toDoList = [...this.state.toDoList];

//         fetch('http://localhost:3004/tasks', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newObj)
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw response.error
//                 }
//                 return response.json()
//             })
//             .then(task => {
//                 toDoList.push(task);
//                 this.setState({
//                     toDoList,
//                     showNewTaskModal: false

//                 })
//             })
//             .catch(error => console.log(error))
//     }

//     handleRemoveSingleTask = (taskId) => {
//         let toDoList = [...this.state.toDoList];

//         fetch(`http://localhost:3004/tasks/${taskId}`,{
//             method: 'DELETE',
//         })
//         .then(response=>{
//             if(!response.ok){
//                 throw(response.error)
//             }
//             response.json()
//         })
//         .then(tasks => {
//             toDoList = toDoList.filter(item => taskId !== item.id)
//             this.setState({
//                 toDoList,
//             })
//         }).catch(error=> console.log(error))
//     }

//     handleCheckedTasks = (taskID) => {
//         let checkedTasks = new Set(this.state.checkedTasks);

//         if (checkedTasks.has(taskID)) {
//             checkedTasks.delete(taskID);
//         } else {
//             checkedTasks.add(taskID);
//         }

//         this.setState({
//             checkedTasks
//         })

//     }

//     handleRemovedCheckedTasks = () => {
//         let toDoList = [...this.state.toDoList];
//         let checkedTasks = new Set(this.state.checkedTasks);
        
//         checkedTasks.forEach(itemId => {
//             toDoList = toDoList.filter(item => item.id !== itemId)
//         })

//         checkedTasks.forEach((itemId) =>{
//             fetch(`http://localhost:3004/tasks/${itemId}`,{
//             method: 'DELETE',
//         })
//         .then(response=>{
//             if(!response.ok){
//                 throw(response.error)
//             }
//             response.json()
//         })
//         .then(tasks => {
//             toDoList = toDoList.filter(item => itemId !== item.id)
//             this.setState({
//                 toDoList,
//                 checkedTasks: '',
//                 toggleConfirmModal: false
//             })
//         }).catch(error=> console.log(error))
//     })
//     }

//     handleToggleShowCofirmModal = () => {
//         this.setState({
//             toggleConfirmModal: !this.setState.toggleConfirmModal,
//         })
//     }

//     toggleHide = () => {
//         this.setState({
//             toggleConfirmModal: false
//         })

//     }

//     handleEditTask =(taskObj)=>{
//         this.setState({
//             editedTask:taskObj,
//         })
//     }

//     handleSaveEditedTask =(taskObj)=>{
//     let toDoList = [...this.state.toDoList];

//     fetch(`http://localhost:3004/tasks/${taskObj.id}`,{
//         method: 'PUT',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(taskObj)
//     })
//     .then(response => {
//         if(!response.ok){
//             throw response.error
//         }
//         response.json()
//     })
//     .then(task => {
//         let index  = toDoList.findIndex((item)=>item.id === taskObj.id);

//         toDoList[index] = {
//             ...taskObj
//         }

//         this.setState({
//             toDoList,
//             editedTask:null
//         })
//     })
//     .catch(error => console.log(error))
//     }

//     render(){
//         const{toDoList, checkedTasks,  editedTask, toggleConfirmModal} = this.state;
//         return(
//             <div>
//             <Navbar/>
//             <AddTask 
//                 handleAddTask = {this.handleAddTask}
//                 disabledButton={checkedTasks.size}
//             />
//              <Row className="">
//                 {checkedTasks.size && <Button
//                     onClick={this.handleToggleShowCofirmModal}
//                     variant="danger"
//                     className="w-25 mt-5"
//                     disabled={!checkedTasks.size}
//                 >Remove checked tasks</Button>}
//             </Row>
//             <Row >
//                 {toDoList.map((item)=>{
//                     return(
//                         <Col key={item.id}>
//                             <Tasks 
//                                 item = {item}
//                                 handleCheckedTasks={this.handleCheckedTasks}
//                                 handleRemoveSingleTask = {this.handleRemoveSingleTask}
//                                 disabledButton={checkedTasks.size}
//                                 handleEditTask={this.handleEditTask}
//                             />
//                         </Col>
//                         )
//                     })
//                 }
//             </Row>
           
//             <Confirm
//                 show={toggleConfirmModal}
//                 onHide={this.toggleHide}
//                 handleRemovedCheckedTasks={this.handleRemovedCheckedTasks}
//                 count={checkedTasks.size}
//             />
//             <Col>
//                 {!!editedTask && 
//                 <EditModal 
//                     onClose={()=>this.handleEditTask(null)}
//                     editTaskData={editedTask}
//                     onSave={this.handleSaveEditedTask}
//                     />
//                 }
//             </Col>          
//             </div>
//         )
//     }
// }
export default function ToDo(){
    // state = {
    //     toDoList: [],
    //     checkedTasks: new Set(),
    //     toggleConfirmModal: false,
    //     editedTask:null,
    // }
    const[toDoList, setToDoList] = useState([]);
    const[checkedTasks, setCheckedTasks] = useState(new Set());
    const[toggleConfirmModal, setToggleConfirmModal] = useState(false);
    const[editedTask, setEditedTask] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:3004/tasks',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify(newObj)
    })
        .then(response =>{
            if(!response.ok){
                throw(response.error)
            }
            response.json()
        })
        .then(tasks => {
            // let toDoList = [...tasks]
            setToDoList([tasks])
        })
        .catch(error=> {
            console.log(error)
        })
    })

    function handleAddTask(newObj){
        // let toDoList = [...this.state.toDoList];

        fetch('http://localhost:3004/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObj)
        })
            .then(response => {
                if (!response.ok) {
                    throw response.error
                }
                return response.json()
            })
            .then(task => {
                // toDoList.push(task);
                // this.setState({
                //     toDoList,
                //     showNewTaskModal: false

                // })
                setToDoList(task)
            })
            .catch(error => console.log(error))
    }

    function handleRemoveSingleTask(taskId){
        // let toDoList = [...this.state.toDoList];

        fetch(`http://localhost:3004/tasks/${taskId}`,{
            method: 'DELETE',
        })
        .then(response=>{
            if(!response.ok){
                throw(response.error)
            }
            response.json()
        })
        .then(tasks => {
            toDoList.filter(item => taskId !== item.id)
            setToDoList(toDoList)
        }).catch(error=> console.log(error))
    }

    function handleCheckedTasks(taskID){

        if (checkedTasks.has(taskID)) {
            checkedTasks.delete(taskID);
        } else {
            checkedTasks.add(taskID);
        }

        setCheckedTasks(checkedTasks)

    }

    function handleRemoveCheckedTasks(){
        // let toDoList = [...this.state.toDoList];
        // let checkedTasks = new Set(this.state.checkedTasks);
        
        checkedTasks.forEach(itemId => {
            toDoList.filter(item => item.id !== itemId)
        })

        checkedTasks.forEach((itemId) =>{
            fetch(`http://localhost:3004/tasks/${itemId}`,{
            method: 'DELETE',
        })
        .then(response=>{
            if(!response.ok){
                throw(response.error)
            }
            response.json()
        })
        .then(tasks => {
            toDoList.filter(item => itemId !== item.id)
            this.setState({
                toDoList,
                checkedTasks: '',
                toggleConfirmModal: false
            })
        }).catch(error=> console.log(error))
    })
    }

    function handleToggleShowCofirmModal(){
        setToggleConfirmModal(!toggleConfirmModal)
    }

    function toggleHide(){
        setToggleConfirmModal(false)
    }

    function handleEditTask(taskObj){
        setEditedTask(taskObj)
    }

    function handleSaveEditedTask(taskObj){
    // let toDoList = [...this.state.toDoList];

    fetch(`http://localhost:3004/tasks/${taskObj.id}`,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskObj)
    })
    .then(response => {
        if(!response.ok){
            throw response.error
        }
        response.json()
    })
    .then(task => {
        let index  = toDoList.findIndex((item)=>item.id === taskObj.id);

        toDoList[index] = {
            ...task
        }

        // this.setState({
        //     toDoList,
        //     editedTask:null
        // })
        setToDoList()
        setEditedTask(null)
    })
    .catch(error => console.log(error))
}

    
        // const{toDoList, checkedTasks,  editedTask, toggleConfirmModal} = this.state;
        return(
            <div>
            <Navbar/>
            <AddTask 
                handleAddTask = {handleAddTask}
                disabledButton={checkedTasks.size}
            />
             {/* <Row className="">
                {checkedTasks.size && <Button
                    onClick={handleToggleShowCofirmModal}
                    variant="danger"
                    className="w-25 mt-5"
                    disabled={!checkedTasks.size}
                >Remove checked tasks</Button>}
            </Row> */}
            <Row >
                {/* {toDoList.map((item)=>{ */}
                    {/* return( */}
                        <Col >
                            <Tasks 
                                item = {toDoList}
                                handleCheckedTasks={handleCheckedTasks}
                                handleRemoveSingleTask = {handleRemoveSingleTask}
                                disabledButton={checkedTasks.size}
                                handleEditTask={handleEditTask}
                            />
                        </Col>
                        {/* ) */}
                    {/* }) */}
                {/* } */}
            </Row>
           
            {/* <Confirm
                show={toggleConfirmModal}
                onHide={toggleHide}
                handleRemovedCheckedTasks={handleRemoveCheckedTasks}
                count={checkedTasks.size}
            />
            <Col>
                {!!editedTask && 
                <EditModal 
                    onClose={()=>handleEditTask(null)}
                    editTaskData={editedTask}
                    onSave={handleSaveEditedTask}
                    />
                }
            </Col>           */}
            </div>
        )
    
            }