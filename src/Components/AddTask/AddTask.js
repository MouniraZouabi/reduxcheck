import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import "./AddTask.css"
import { useDispatch } from "react-redux"
import { addTask } from "../../Redux/Actions"
import swal from 'sweetalert';

function AddTask() {

    const [toAddTask, setToAddTask] = useState("")

    const handleChange = (e) => {
        setToAddTask(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (toAddTask) {
            dispatch(addTask(toAddTask))
            setToAddTask("");
            swal("Saved !!", "new dream add to list", "success")
        }
        else swal("Error !!", "Cannot save empty one", "warning")


    }

    return (
        <div className="AddTask">
        <h1 >My list of dreams</h1>
            <h5 style={{fontFamily :"fantasy" ,color:"gold"}}>“If you can dream it, you can do it.”</h5>
            <div className="inputD">
                <Form.Control  type="text" placeholder="Add dream..." value={toAddTask} onChange={handleChange} />
                <Button  variant="outline-primary" style={{width:"150px"}} onClick={handleSubmit} ><h5>Add It</h5></Button>
            </div>
        </div>
    )
}

export default AddTask
