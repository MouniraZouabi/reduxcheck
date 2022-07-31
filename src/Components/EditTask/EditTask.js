import React, { useState } from "react"
import{FaEdit }from 'react-icons/fa';
import Alert from 'react-bootstrap/Alert';
import swal from 'sweetalert';

import { useDispatch, useSelector } from "react-redux"
import {Button , Modal, Form } from "react-bootstrap"
import { editTask } from "../../Redux/Actions"

function EditTask({ id }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskItem = useSelector(state => state.todosReducer.todos.find(el => el.id === id));

    const [taskText, setTaskText] = useState(taskItem.task)

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (taskText){

        dispatch(editTask({ id, taskText }))      
        handleClose()        
        swal("fixed !!", "Your Dream has been saves !", "success")

         
    }
    else alert("No Changes has been done")

    }



    



















    const handleChange = (e) => {
        setTaskText(e.target.value)
    }


    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                <FaEdit/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fix it  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="fix it ..." defaultValue={taskItem.task} onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSubmit}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask