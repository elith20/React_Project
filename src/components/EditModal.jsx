import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import classes from './edit.module.css'
import { useState } from 'react';


export default class EditModal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...props.editTaskData
        }
    }


    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    handleRadioChange = (event) => {
        this.setState({
            importance: event.target.name
        })
    }

    handleSelectChange = (event) => {
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

    handleAddEditedTask = (event) => {
        event.preventDefault();

        const { id, title, description, startdate, enddate, importance, developer } = this.state;
        // if (!title || !description || !importance || !startdate || !enddate || !developer) {

        //     return;
        // }

        let newObj = {
            id: id,
            title,
            description,
            importance,
            startdate,
            enddate,
            developer,
        }

        this.props.onSave(newObj);
    }

    handleAddKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleAddEditedTask(event)
        }
    }

    render() {
        const { title, description, importance, startdate, enddate, developer } = this.state;
        return (
            <Modal
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
                onHide={this.props.onClose}
            >
                <Modal.Header closeButton className={classes.Header}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit task
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body className={classes.Body}>
                    <Form onKeyDown={this.handleAddKeyDown}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Change Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="title" value={title} onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange={this.handleInputChange}>
                            <Form.Label column sm={2}>
                                Change Description
                            </Form.Label>
                            <Col sm={10}>
                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Description"
                                        name="description"
                                        value={description} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label as="legend">
                                Change Importance
                            </Form.Label>
                            <Form.Check
                                inline="true"
                                type="radio"
                                label="Low"
                                name="low"
                                id="formHorizontalRadios1"
                                checked={importance === "low"}
                                onChange={this.handleRadioChange}
                            />
                            <Form.Check
                                inline="true"
                                type="radio"
                                label="Medium"
                                name="medium"
                                id="formHorizontalRadios2"
                                checked={importance === "medium"}
                                onChange={this.handleRadioChange}
                            />
                            <Form.Check
                                inline="true"
                                type="radio"
                                label="High"
                                name="high"
                                id="formHorizontalRadios3"
                                checked={importance === "high"}
                                onChange={this.handleRadioChange}
                            />

                        </Form.Group>
                        <Form.Label className="text-info">Change duration</Form.Label>
                        <Form.Group className={classes.Dates}>
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
                                onChange={this.handleSelectChange}
                                className="text-info">
                                <option >Choose developer</option>
                                <option value="Dolera">Dolera</option>
                                <option value="Aksana">Aksana</option>
                                <option value="Developer 3">Developer3</option>
                                <option value="Developer 4">Developer 4</option>
                                <option value="Developer 5">Developer 5</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className={classes.Footer}>
                    <Button variant='warning' onClick={this.handleAddEditedTask}>Confirm changes</Button>
                    <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

// export default function EditModal(props){

//     [props.editTaskData, setEditData] = useState()
//     const[value, setValue] = useState([event.target.name]);
//     const[importance, setImportance] = useState();
//     const[developer, setDeveloper] = useState();
//     const[startdate, setStartDate] = useState();
//     const[enddate, setEnddate] = useState();
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         ...props.editTaskData
//     //     }
//     // }


//     function handleInputChange(event){
//         setValue(event.target.value)
//     }

//     function handleRadioChange(event){
//         setImportance(event.target.name)
//     }

//     function handleSelectChange(event){
//         setDeveloper(
//             event.target.value
//         )
//     }

//     function handleStartDate(e){
//         setStartDate(e.target.value)
//     }

//     function handleEndDate(e){
//         setEnddate(e.target.value)
//     }

//     function handleAddEditedTask(event){
//         event.preventDefault();

//         // if (!title || !description || !importance || !startdate || !enddate || !developer) {

//         //     return;
//         // }

//         let newObj = {
//             id: id,
//             title,
//             description,
//             importance,
//             startdate,
//             enddate,
//             developer,
//         }

//         props.onSave(newObj);
//     }

//     function handleAddKeyDown(event){
//         if (event.key === "Enter") {
//             handleAddEditedTask(event)
//         }
//     }

//         // const { title, description, importance, startdate, enddate, developer } = this.state;
//         return (
//             <Modal
//                 size="m"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 show={true}
//                 onHide={this.props.onClose}
//             >
//                 <Modal.Header closeButton className={classes.Header}>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Edit task
//                     </Modal.Title>

//                 </Modal.Header>
//                 <Modal.Body className={classes.Body}>
//                     <Form onKeyDown={handleAddKeyDown}>
//                         <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//                             <Form.Label column sm={2}>
//                                 Change Title
//                             </Form.Label>
//                             <Col sm={10}>
//                                 <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
//                             </Col>
//                         </Form.Group>

//                         <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange={handleInputChange}>
//                             <Form.Label column sm={2}>
//                                 Change Description
//                             </Form.Label>
//                             <Col sm={10}>
//                                 <FloatingLabel
//                                     controlId="floatingTextarea"
//                                     className="mb-3"
//                                 >
//                                     <Form.Control
//                                         as="textarea"
//                                         placeholder="Description"
//                                         name="description"
//                                         value={description} />
//                                 </FloatingLabel>
//                             </Col>
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label as="legend">
//                                 Change Importance
//                             </Form.Label>
//                             <Form.Check
//                                 inline="true"
//                                 type="radio"
//                                 label="Low"
//                                 name="low"
//                                 id="formHorizontalRadios1"
//                                 checked={importance === "low"}
//                                 onChange={handleRadioChange}
//                             />
//                             <Form.Check
//                                 inline="true"
//                                 type="radio"
//                                 label="Medium"
//                                 name="medium"
//                                 id="formHorizontalRadios2"
//                                 checked={importance === "medium"}
//                                 onChange={handleRadioChange}
//                             />
//                             <Form.Check
//                                 inline="true"
//                                 type="radio"
//                                 label="High"
//                                 name="high"
//                                 id="formHorizontalRadios3"
//                                 checked={importance === "high"}
//                                 onChange={handleRadioChange}
//                             />

//                         </Form.Group>
//                         <Form.Label className="text-info">Change duration</Form.Label>
//                         <Form.Group className={classes.Dates}>
//                             <Form.Control
//                                 inline="true"
//                                 type="date"
//                                 id="startdate"
//                                 value={startdate}
//                                 onChange={handleStartDate} />
//                             <Form.Control
//                                 inline="true"
//                                 type="date"
//                                 id="enddate"
//                                 value={enddate}
//                                 onChange={handleEndDate} />
//                         </Form.Group>
//                         <Form.Group >
//                             <Form.Select
//                                 aria-label="Default select example"
//                                 value={developer}
//                                 onChange={handleSelectChange}
//                                 className="text-info">
//                                 <option >Choose developer</option>
//                                 <option value="Dolera">Dolera</option>
//                                 <option value="Aksana">Aksana</option>
//                                 <option value="Developer 3">Developer3</option>
//                                 <option value="Developer 4">Developer 4</option>
//                                 <option value="Developer 5">Developer 5</option>
//                             </Form.Select>
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer className={classes.Footer}>
//                     <Button variant='warning' onClick={this.handleAddEditedTask}>Confirm changes</Button>
//                     <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }


