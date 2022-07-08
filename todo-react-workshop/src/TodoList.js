import {Button, Container, Form, InputGroup, ListGroup} from "react-bootstrap";
import {PlusSquareFill} from "react-bootstrap-icons"
import {useEffect, useState} from "react";
import axios from "axios";


export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [formValue, setFormValue] = useState("");

    useEffect(() => {
        async function getTasks() {
            const response = await axios.get('http://localhost:3030/todos');
            setTasks(response.data);
        }
        getTasks().catch(console.error)
    })

    const changeHandler = (e) => {
        setFormValue(e.target.value);
    }

    const addTask = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3030/todos",
            {
                "text": formValue,
                "done": false
            });
        setFormValue("");
    }

    const toggleDone = (id) => (e) => {
        setTasks(ps => {
            const task = ps.find(task => task.id === id);
            task.done = e.target.checked;
            return [ps];
        })
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
                                           value=""
                                           onChange={toggleDone(task.id)}
                                    />
                                    <Button variant="danger"
                                            onClick={() => {
                                                const id = task.id;
                                                axios.delete(`http://localhost:3030/todos/${id}`)
                                                    .then(() => window.location.reload())
                                            }}
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