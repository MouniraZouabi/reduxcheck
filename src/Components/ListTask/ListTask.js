import React, { useState, useEffect } from 'react'
import Task from '../Task/Task'
import "./ListTask.css"
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap"
import {FaCheck ,FaCheckDouble , FaList} from 'react-icons/fa';

function ListTask() {
    const todos = useSelector(state => state.todosReducer.todos)

    const [todosList, setTodosList] = useState(todos)
    const [showDone, setShowDone] = useState(false)
    const [showNotDone, setShowNotDone] = useState(false)

    const handleTodosList = () => {
        if (showDone === true) {
            setTodosList(todos.filter(task => task.isDone === true))
        }
        else if (showNotDone === true) {

            setTodosList(todos.filter(task => task.isDone === false))
        }
    }
    useEffect(() => {
        handleTodosList()
        
    }, [showNotDone, showDone, todos])

    const handleShowDone = () => {
        setShowDone(true)
    }
    const handleShowNotDone = () => {
        setShowDone(false)
        setShowNotDone(true)
    }
    const handleReset = () => {
        setShowDone(false);
        setShowNotDone(false)
    }

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-danger"onClick={handleShowDone}>Show done <FaCheckDouble/></Button>

                <Button variant="outline-success"  onClick={handleShowNotDone} >Show Not Done <FaCheck/></Button>
                
                <Button variant="outline-primary" onClick={handleReset}>Show All <FaList/></Button>
            </div>
            {
                showDone === true
                    ? todosList.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))
                    : showNotDone === true
                        ? todosList.map((task, index) => (<Task toDo_task={task} key={index} index={index} />))
                        : todos.map((task, index) => <Task toDo_task={task} key={index} index={index} />)
            }
        </div >
    )
}

export default ListTask
