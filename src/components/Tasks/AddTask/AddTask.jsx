import React from "react";
import classes from'./AddTask.module.css'
import { useState } from "react";

// export default class AddTask extends Component {
//     state = {
//         toDoList: [],
//         title: "",
//         description: "",
//         importance: "",
//         startdate: "",
//         enddate: "",
//         developers: "",
//         }

//     handleTitleValue = (event) => {
//         this.setState({
//             title: event.target.value,

//         })
//     }

//     handleDescription = (event) => {
//         this.setState({
//             description: event.target.value,

//         })
//     }

//     handleRadioValue = (e) => {
//         this.setState({
//             importance: e.target.value
//         })
//     }

//     handleSelectValue = (event) => {
//         this.setState({
//             developer: event.target.value
//         })
//     }

//     handleStartDate = (e) => {
//         this.setState({
//             startdate: e.target.value,
//         })
//     }

//     handleEndDate = (e) => {
//         this.setState({
//             enddate: e.target.value,
//         })
//     }

//     handleOpenClose = () =>{
//         this.setState({
//             show : !this.state.show
//         })
//     }

//     handleAddTask = (event) => {
//         event.preventDefault();
//         const { title, description, importance, startdate, enddate, developer} = this.state;
//         // if (!title || !description || !importance || !developer || !startdate || !enddate) {

//         //     return;
//         // }

//         let newObj = {
//             title,
//             description,
//             importance,
//             startdate,
//             enddate,
//             developer,
//         }

//         this.props.handleAddTask(newObj);

//         let toDoList = [...this.state.toDoList];
//         toDoList.push(newObj);
        

//         this.handleOpenClose()
//         this.setState({
//             toDoList,
//             title: '',
//             description: '',
//             importance: '',
//             startdate: '',
//             enddate: '',
//             developer: '',
//         })
//     }

//     handleAddKeyDown = (event) => {
//         if (event.key === "Enter") {
//           this.handleAddTask(event)
//         }
//     }

//     render() {
//         const { title, description, importance, startdate, enddate, developer } = this.state;
//         const { disabledButton } = this.props;

//         return (
//             <div>               
//                 <div className={classes.newtask}>
//                     <button 
//                         className={classes.Button} 
//                         onClick={this.handleOpenClose}
//                         disabled={disabledButton}
//                         >New Task
//                     </button>
//                 </div>
//                 <Modal 
//                     show={this.state.show} 
//                     onHide={this.handleOpenClose} 
//                     className={classes.Modal}>
//                 <Modal.Dialog >
//                     <Modal.Header closeButton>
//                         <Modal.Title className="text-info">Add New Task</Modal.Title>
//                     </Modal.Header>

//                     <Modal.Body>
                        // <Form 
                        //     className={classes.Form} 
                        //     onKeyDown={this.handleAddKeyDown} 
                        //     >
                        //     <Form.Group  >
                        //         <Form.Label>Title</Form.Label>
                        //         <Form.Control 
                        //             className={classes.Title}
                        //             type="text"
                        //             id="title"
                        //             value={title}
                        //             placeholder="Task name..."
                        //             onChange={this.handleTitleValue} />
                        //     </Form.Group>
                        //     <Form.Group className="mb-3 text-info">
                        //         <Form.Label>Description</Form.Label>
                        //         <Form.Control
                        //             className={classes.description}
                        //             as="textarea"
                        //             id="description"
                        //             value={description}
                        //             placeholder="Describe task..."
                        //             onChange={this.handleDescription}
                        //         />
                        //     </Form.Group>
                        //     <Form.Group    
                        //         className="mb-3" 
                        //         id="importance" 
                        //         >
                        //         <Form.Label className ="text-info" style={{display:"block"}}>Choose importance</Form.Label>
                        //         <Form.Group className="mb-3"> 
                        //             <Form.Label> High
                        //             <Form.Check
                        //                 inline="true"
                        //                 value="high"
                        //                 name="importance"
                        //                 type="radio"
                        //                 checked={importance === 'high'}
                        //                 onChange={this.handleRadioValue}
                        //             />
                        //             </Form.Label>
                        //             <Form.Label > Medium
                        //             <Form.Check
                        //                 inline="true"
                        //                 value="medium"
                        //                 name="importance"
                        //                 type="radio"
                        //                 checked={importance === 'medium'}
                        //                 onChange={this.handleRadioValue}
                        //             />
                        //             </Form.Label>
                        //             <Form.Label>Low
                        //             <Form.Check
                        //                 inline="true"
                        //                 value="low"
                        //                 name="importance"
                        //                 type="radio"
                        //                 checked={importance === 'low'}
                        //                 onChange={this.handleRadioValue}
                        //             />
                        //             </Form.Label>
                        //         </Form.Group>
                        //     </Form.Group>
                        //     <Form.Label className="text-info">Choose duration</Form.Label>
                        //     <Form.Group className={classes.date}>
                        //         <Form.Control 
                        //             inline="true"
                        //             type="date"
                        //             id="startdate"
                        //             value={startdate}
                        //             onChange={this.handleStartDate} />
                        //         <Form.Control 
                        //             inline="true"
                        //             type="date"
                        //             id="enddate"
                        //             value={enddate}
                        //             onChange={this.handleEndDate} />
                        //     </Form.Group>
                        //     <Form.Group >
                        //         <Form.Select
                        //             aria-label="Default select example"
                        //             value={developer}
                        //             onChange={this.handleSelectValue}
                        //             className="text-info">
                        //             <option value=''>Choose developer</option>
                        //             <option value="Dolera">Dolera</option>
                        //             <option value="Aksana">Aksana</option>
                        //             <option value="Developer3">Developer3</option>
                        //             <option value="Developer 4">Developer 4</option>
                        //             <option value="Developer 5">Developer 5</option>
                        //         </Form.Select>
                        //     </Form.Group>
                        // </Form>
//                     </Modal.Body>

//                     <Modal.Footer>
//                         <Button 
//                             variant="info" 
//                             onClick={this.handleAddTask} 
//                             disabled={disabledButton}
//                             >Add Task</Button>
//                         <Button 
//                             variant="secondary" 
//                             onClick={this.handleOpenClose}
//                             disabled={disabledButton}
//                             >Close</Button>
                            
//                     </Modal.Footer>
//                 </Modal.Dialog>
//                 </Modal>
//             </div>
//         )
//     }
// }


export default function AddTask(props){
    const[title, setTitle] = useState();
    const[description, setDescription] = useState();
    const[importance, setImportance] = useState();
    const[developer, setDeveloper] = useState();
    const[startdate, setStartdate] = useState();
    const[enddate, setEnddate] = useState();
    const[show, setShow] = useState(false);

    function handleTitleValue(event){
        setTitle(event.target.value)
    }
    
    function handleDescription(event){
        setDescription(event.target.value)
    }

    function handleRadioValue(e){
        setImportance(e.target.value)
    }

    function handleSelectValue(event){
        setDeveloper(event.target.value)
    }

    function handleStartDate(e){   
        setStartdate(e.target.value)
    }

    function handleEndDate(e){
        setEnddate(e.target.value)
    }

    function handleOpenClose(){
       setShow(!show)
    }

    function handleAddTask(event){
        event.preventDefault();
        // const { title, description, importance, startdate, enddate, developer} = this.state;
        // if (!title || !description || !importance || !developer || !startdate || !enddate) {

        //     return;
        // }

        let newObj = {
            title,
            description,
            importance,
            startdate,
            enddate,
            developer,
        }

        props.handleAddTask(newObj);
        let toDoList = [];
        toDoList.push(newObj);
        setTitle([]);
        setDescription([]);
        setImportance([]);
        setStartdate([]);
        setEnddate([]);
        setDeveloper([]);
        // handleOpenClose() 
    }

    function handleAddKeyDown(event){
        if (event.key === "Enter") {
          handleAddTask(event)
        }
    }

    return<>
        <div className={classes.newtask}>
            <button 
                className={classes.addButton} 
                onClick={handleOpenClose}
                disabled={props.disabledButton}
                >New Task
            </button>
        </div>
        <div>
            <form 
                className={classes.Form} 
                onKeyDown={handleAddKeyDown} 
                >
                <label htmlFor="title"><h4>Title</h4></label>
                <input 
                    className={classes.formTitle}
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Task name..."
                    onChange={handleTitleValue} />
                            
                <label htmlFor="description"><h4>Description</h4></label>
                <input
                    className={classes.description}
                    as="textarea"
                    id="description"
                    value={description}
                    placeholder="Describe task..."
                    autoComplete="off"
                    onChange={handleDescription}
                /> 
                <label><h4>Choose importance </h4></label>
                <div className={classes.importance}>
                    <div>
                        <label htmlFor="high"> High </label>
                        <input
                            id="high"
                            value="high"
                            name="importance"
                            type="radio"
                            checked={importance === 'high'}
                            onChange={handleRadioValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="medium" > Medium </label>
                        <input
                            id="medium"
                            value="medium"
                            name="importance"
                            type="radio"
                            checked={importance === 'medium'}
                            onChange={handleRadioValue}
                        />
                    </div>
                    <div>
                        <label>Low </label>
                        <input
                            id="low"
                            value="low"
                            name="importance"
                            type="radio"
                            checked={importance === 'low'}
                            onChange={handleRadioValue}
                        />
                    </div>
                </div>    
                
                <label ><h4>Choose duration</h4></label>
                <div className={classes.date}>
                    <div>
                        <label htmlFor="startdate">Start Date</label>
                        <input
                            type="date"
                            id="startdate"
                            value={startdate}
                            onChange={handleStartDate} />
                    </div>
                    <div>
                        <label htmlFor="enddate">End Date</label>
                        <input
                            type="date"
                            id="enddate"
                            value={enddate}
                            onChange={handleEndDate} />
                    </div>
                </div>
               
                <label htmlFor="developers"><h4>Choose a developer:</h4></label>
                <select
                    name="developers"
                    value={developer}
                    onChange={handleSelectValue}
                    className={classes.developer}>
                    <option value=''>Developer</option>
                    <option value="Dolera">Dolera</option>
                    <option value="Aksana">Aksana</option>
                    <option value="Developer 3">Developer 3</option>
                    <option value="Developer 4">Developer 4</option>
                    <option value="Developer 5">Developer 5</option>
                </select>
                <div className={classes.footerBtns}>
                    <button
                        onClick={handleAddTask} 
                        disabled={props.disabledButton}
                        >Add Task
                    </button>
                    <button
                        onClick={handleOpenClose}
                        disabled={props.disabledButton}
                        >Close</button>
                </div>
            </form>
        </div>
        
        </>
}
