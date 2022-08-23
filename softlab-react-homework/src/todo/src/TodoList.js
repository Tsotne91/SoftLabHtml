import {Button, Container, Form, InputGroup, ListGroup} from "react-bootstrap";
import {PlusSquareFill, PencilSquare} from "react-bootstrap-icons"
import React, {useEffect, useState, useContext} from "react";
import api from '../../api.js';
import EditTaskModal from "./EditTaskModal.js";
import SpinnerLoading from "../../SpinnerLoading.js";
import SpinnerContext from "../../SpinnerContext.js";


export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [formValue, setFormValue] = useState("");
    const {loading, setLoading} = useContext(SpinnerContext);

    useEffect(() => {
        getTasks().catch(console.error);
    }, [])

    async function getTasks() {
        const response = await api.get("todos");
        setTasks(response.data);
    }

    const changeHandler = (e) => setFormValue(e.target.value);

    const addTask = async (e) => {
        e.preventDefault();
        if (!formValue) alert("You cannot add empty task");
        else {
            await api.post("todos",
                {
                    "text": formValue,
                    "done": false,
                });
            setFormValue("");
            try {
                setLoading(true);
                await getTasks();
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const toggleDone = (id) => (e) => {
        setTasks(ps => {
            setLoading(true);
            const task = ps.find(task => task.id === id);
            task.done = e.target.checked;
            const undone = ps.filter(task => !task.done);
            const done = ps.filter(task => task.done);
            setLoading(false);
            return [...undone, ...done];

        })
    }

    const deleteTask = async (task) => {
        const id = task.id;
        const answer = window.confirm(`Are you sure you wish to delete task ${task.text}?`);
        if (answer) {
            setLoading(true);
            await api.delete(`todos/${id}`);
            await getTasks();
            setLoading(false);
        }
    }

    const openEditModal = task => setCurrentTask(task);

    const submitEditedTask = async updatedTask => {
        const id = updatedTask.id;
        const editedTask = updatedTask.text;
        try {
            if (!editedTask) alert("Task cannot be empty!");
        else {
            setLoading(true);
            await api.put(`todos/${id}`, {"text": editedTask});
            setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
        await getTasks();
    }

    return (
        <>
                <Container>
                    <Form onSubmit={addTask}>
                        <InputGroup className="m-2">
                            <Form.Control
                                size="md" type="text"
                                placeholder="Add Task" value={formValue}
                                onChange={changeHandler}
                            />

                            <Button type="submit" size="md" className="align-self-end">
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
                                        <Button className="mx-2"
                                                size="sm"
                                                onClick={() => openEditModal(task)}>
                                            <PencilSquare/>
                                        </Button>
                                        <Button variant="danger"
                                                size="sm"
                                                onClick={() => deleteTask(task)}
                                        >Delete</Button>
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Container>
            <SpinnerLoading
                show={loading}
            />
            <EditTaskModal
                currentTask={currentTask}
                tasks={tasks}
                show={!!currentTask}
                onSubmit={submitEditedTask}
                onHide={() => setCurrentTask(null)}
            />
        </>
    )

}