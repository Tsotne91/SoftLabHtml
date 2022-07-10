import React, {useEffect} from "react";
import TodoList from "./TodoList";
import {useState} from "react";
import Login from "./Login";
import UserContext from "./UserContext";
import api from "./api";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.get('user')
                .then((res) => setUser(res.data))
                .catch(console.error)
        }
    }, [])

    return (
        <>
            {
                !user ? <Login/> : (
                    <UserContext.Provider value={user}> <TodoList/> </UserContext.Provider>
                )
            }
        </>
    );
}

export default App;
