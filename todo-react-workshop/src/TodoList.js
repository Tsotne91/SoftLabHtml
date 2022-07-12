import {Button, Container, Form, InputGroup, ListGroup} from "react-bootstrap";
import {PlusSquareFill, PencilSquare} from "react-bootstrap-icons"
import {useEffect, useState} from "react";
import api from './api';
import EditTaskModal from "./EditTaskModal";


export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [formValue, setFormValue] = useState("");
   // const [modalShow, setModalShow] = useState(false);


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
        if (!formValue) alert("You cannot add empty task");
        else {
            await api.post("todos",
                {
                    "text": formValue,
                    "done": false
                });
            setFormValue("");
            getTasks().catch(console.error);
        }
    }

    const toggleDone = (id) => (e) => {
        setTasks(ps => {
            const task = ps.find(task => task.id === id);
            task.done = e.target.checked;
            const undone = ps.filter(task => !task.done);
            const done = ps.filter(task => task.done);
            return [...undone, ...done];
        })
    }

    const deleteTask = async (task) => {
        const id = task.id;
        const answer = window.confirm(`Are you sure you wish to delete task ${task.text}?`);
        if (answer){
            await api.delete(`todos/${id}`);
            await getTasks();
        }
    }

    const openEditModal = (task) => {
        setCurrentTask(task);
      //  setModalShow(true);
    }

    const submitEditedTask = async updatedTask => {
        const id = updatedTask.id;
        const editedTask = updatedTask.text;
        try {
            !editedTask ? alert("Task cannot be empty!") : await api.put(`todos/${id}`, {"text": editedTask});
        } catch (error){
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
                                    <input className="form-check-input mx-2"
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