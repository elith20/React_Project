import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import classes from './edit.module.css'


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
                        <Form.Group as={Row} className={classes.Textareas} controlId="formHorizontalEmail">
                            <Form.Label column sm={3} className={classes.Label}>
                                Change Title
                            </Form.Label>
                            <Col sm={9} className={classes.Label}>
                                <Form.Control className={classes.Label} type="text" name="title" value={title} onChange={this.handleInputChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onChange={this.handleInputChange}>
                            <Form.Label column sm={3} className={classes.Label}>
                                Change Description
                            </Form.Label>
                            <Col sm={9} className={classes.Label} >
                                <FloatingLabel
                                
                                    controlId="floatingTextarea"
                                    className="mb-2 mt-2"
                                >
                                    <Form.Control
                                        className={classes.Label}
                                        onChange={this.handleInputChange}
                                        as="textarea"
                                        placeholder="Description"
                                        name="description"
                                        value={description} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label as="legend" className={classes.Label}>
                                Change Importance
                            </Form.Label>
                            <Form.Check
                            className={classes.Check}
                                inline="true"
                                type="radio"
                                label="Low"
                                name="Low"
                                id="formHorizontalRadios1"
                                checked={importance === "Low"}
                                onChange={this.handleRadioChange}
                            />
                            <Form.Check
                                className={classes.Check}
                                inline="true"
                                type="radio"
                                label="Medium"
                                name="Medium"
                                id="formHorizontalRadios2"
                                checked={importance === "Medium"}
                                onChange={this.handleRadioChange}
                            />
                            <Form.Check
                                className={classes.Check}
                                inline="true"
                                type="radio"
                                label="High"
                                name="High"
                                id="formHorizontalRadios3"
                                checked={importance === "High"}
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
                        <Form.Group className='bg-transparent'>
                            <Form.Select
                                aria-label="Default select example"
                                value={developer}
                                onChange={this.handleSelectChange}
                                className={classes.Developers}>
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


