import React, {useEffect} from "react";
import TodoList from "./todo/src/TodoList";
import AlbumGridMainPage from "./cards/src/AlbumGridMainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Login from "./Login";
//import UserContext from "./UserContext";
import api from "./api";
import Layout from "./Layout";


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
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route path="todos" element={<TodoList/>}/>
                                <Route path="cards" element={<AlbumGridMainPage/>}/>
                                <Route path="*" element={<div>page not found</div>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                // <UserContext.Provider value={user}> <TodoList/> </UserContext.Provider>

                )
            }
        </>
    );
}

export default App;
