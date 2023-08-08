import React from "react";
import classes from './Tasks.module.css'
import { useState } from "react";


export default function Tasks(props) {

    const [isChecked, setIsChecked] = useState(false);
    const { item, handleRemoveSingleTask, handleEditTask, disabledButton } = props;


    function toggleCheckbox(id){
        props.handleCheckedTasks(id);

        setIsChecked(!isChecked)
    }

    return (

    <div className={!isChecked? classes.card : classes.checkedCard}>
        <input
            onChange={() => toggleCheckbox(item.id)}
            className={classes.cardCheckbox} 
            type="checkbox"
        />
        <h3 className={classes.CardTitle}>{item.title}</h3>
        <div className={classes.items}>
            <div className={classes.describe}>
                <p>Description:</p>
                {item.description} 
            </div>
            <div>
                <p>Importance:</p>
                {item.importance}
            </div>
            <div>
                <p>Start date:</p>
                {item.startdate}
            </div>
            <div>
                <p >End date: </p>
                {item.enddate}
            </div>
            <div>
                <p>Developer: </p>
                {item.developer}
                </div>
        </div>
        <div className={classes.btn}>
            <button
                className={classes.cardBtn}
                onClick={() => handleEditTask(item)}
                disabled={disabledButton}
                >Edit Task
            </button>
            <button
                className={classes.cardBtn}
                onClick={() => handleRemoveSingleTask(item)}
                disabled={disabledButton}
                >Delete Task
            </button>
        </div>
    </div>

)}

