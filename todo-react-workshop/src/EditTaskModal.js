import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";


export default function EditTaskModal({currentTask, show, onHide, onSubmit}) {
    const [editFormValue, setEditFormValue] = useState("");

    useEffect(()=> {
       currentTask?.text && setEditFormValue(() => currentTask.text);
    }, [currentTask])

    const submitEdited = () => {
        onSubmit && onSubmit({...currentTask, text: editFormValue});
        close();
    }

    const close = () => onHide && onHide();

    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Editing task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitEdited}>
                    <InputGroup className="m-2">
                        <Form.Control
                            size="md" type="text"
                            placeholder="Edit Task" value={editFormValue}
                            onChange={(e) => setEditFormValue(e.target.value)}
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

)}