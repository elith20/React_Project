import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFilePen  } from '@fortawesome/free-solid-svg-icons';
import classes from './Tasks.module.css'




export default class Tasks extends Component {
    
    state ={
        isChecked: false,
    }

    toggleCheckbox = (id) => {
        this.props.handleCheckedTasks(id);

        this.setState({

            isChecked: !this.state.isChecked
        })

    }
    render() {

        const {item, handleRemoveSingleTask, handleEditTask, disabledButton} = this.props;
        const { isChecked } = this.state;
        return (
            
                <Card className={`${classes.card} ${isChecked}`? classes.card: classes.checkedCard}>
                    <Card.Body>
                        <input
                        onChange={() => this.toggleCheckbox(item.id)}
                        className={`${classes.cardCheckbox} m-2`}
                        type="checkbox"
                        />
                        <Card.Title className={classes.Title}>{item.title}</Card.Title>
                        <ListGroup className={classes.items} variant="flush">
                            <ListGroup.Item className={classes.describe}><span className={classes.text}>Description:</span> {item.description}</ListGroup.Item>
                            <ListGroup.Item>Importance: {item.importance}</ListGroup.Item>
                            <ListGroup.Item><span className={classes.text}>Start date: </span>{item.startdate } <br/><span className={classes.text}> End date:</span> {item.enddate}</ListGroup.Item>
                            <ListGroup.Item><span className={classes.text}>Responsible: </span>{item.developer}</ListGroup.Item>
                        </ListGroup>
                        <Button 
                            className={classes.cardBtn}
                            onClick={() => handleEditTask(item)}
                            disabled={disabledButton}>
                            <FontAwesomeIcon icon={faFilePen} size="lg" style={{color: "#66dbf9",}} />
                        </Button>
                        <Button 
                            className={classes.cardBtn}
                            onClick={() => handleRemoveSingleTask(item.id)}
                            disabled={disabledButton}>
                            <FontAwesomeIcon icon={faTrashCan} size="lg" style={{color: "red",}} />
                        </Button>
                    </Card.Body>
                </Card>
            
        );
        
    }
}