import {Button, Container, Form, InputGroup, ListGroup} from "react-bootstrap";
import {PlusSquareFill, PencilSquare} from "react-bootstrap-icons"
import {useEffect, useState} from "react";
import api from './api';


export default function TodoList({show}) {
    const [tasks, setTasks] = useState([]);
    const [formValue, setFormValue] = useState("");

    useEffect(() => {
        getTasks().catch(console.error)
    }, [])

    async function getTasks() {
        const response = await api.get("todos");
        setTasks(response.data);
    }
    const changeHandler = (e) => {
        setFormValue(e.target.value);
    }

    const addTask = async (e) => {
        e.preventDefault();
        await api.post("todos",
            {
                "text": formValue,
                "done": false
            });
        setFormValue("");
        getTasks().catch(console.error);
    }

    const toggleDone = (id) => (e) => {
        setTasks(ps => {
            const task = ps.find(task => task.id === id);
            task.done = e.target.checked;
            return [...ps];
        })
    }

    const deleteTask = (task) => {
        const id = task.id;
        api.delete(`todos/${id}`)
            .then(() => window.location.reload())
    }

    return (
        <>
            <Container>
                <Form onSubmit={addTask}>
                    <InputGroup className="m-2">
                        <Form.Control
                            size="lg" type="text"
                            placeholder="Add Task" value={formValue}
                            onChange={changeHandler}
                        />

                        <Button type="submit" size="lg" className="align-self-end">
                            <PlusSquareFill/>
                        </Button>
                    </InputGroup>
                </Form>


                <ListGroup className="m-3">
                    {
                        tasks.map(task => (
                            <ListGroup.Item key={task.id}
                                            className="my-2 p-1 border border-secondary d-flex justify-content-between">
                                <div>{
                                    !task.done ? <span>{task.text}</span> : <del>{task.text}</del>
                                }</div>
                                <div>
                                    <input className="form-check-input m-2"
                                           type="checkbox"
                                           checked={task.done}
                                           onChange={toggleDone(task.id)}
                                    />
                                    <Button className="my-2"><PencilSquare/></Button>

                                    <Button variant="danger"
                                            onClick={() => deleteTask(task)}
                                    >Delete</Button>
                                </div>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Container>
        </>
    )

}