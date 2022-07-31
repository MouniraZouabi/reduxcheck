import React from 'react'
import { Button } from "react-bootstrap"
import "./Task.css"
import {FaCheck} from 'react-icons/fa';
import {FaCheckDouble} from 'react-icons/fa';
import { useDispatch } from "react-redux"
import { changeIsDone } from "../../Redux/Actions"
import EditTask from '../EditTask/EditTask'

function Task({ toDo_task, index }) {
    const dispatch = useDispatch();
    return (
        <div className="Itemtask" id="div1">
                        <h3 style={{ textDecoration: toDo_task.isDone ? "line-through" : "none" }}> ## {toDo_task.task}</h3>


            <div className="taskBtns">

                <Button variant={toDo_task.isDone ? "outline-danger" : "success"} 
                onClick={() => dispatch(changeIsDone(toDo_task.id))}>
                    {toDo_task.isDone ? <FaCheckDouble/>:<FaCheck/>  }</Button>
                    
                <EditTask id={toDo_task.id} />
            </div>
        </div>
    )
}

export default Task
