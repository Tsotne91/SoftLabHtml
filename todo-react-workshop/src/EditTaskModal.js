import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";
import api from "./api";


export default function EditTaskModal({task, show, onHide}) {
    const [value, setValue] = useState(String(task?.text) || "");


    const handleSubmit = (task) => {
        const id = task.id;
        const editedTask = task.text;
        !editedTask ? alert("Task cannot be empty!") : api.put(`todos/${id}`, {"text": editedTask})
            .then(() => window.location.reload()).catch(console.error)
    }

    return (
        <Modal
            size="lg"
            centered
            show={show}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Editing task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="m-2">
                        <Form.Control
                            size="md" type="text"
                            placeholder="Add Task" value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />

                        <Button type="submit" size="md">
                            Save
                        </Button>
                    </InputGroup>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>

        </Modal>

)
}