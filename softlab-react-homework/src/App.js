import React, {useEffect, useState} from "react";
import TodoList from "./todo/src/TodoList";
import AlbumGridMainPage from "./cards/src/AlbumGridMainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import api from "./api";
import Layout from "./Layout";
import SpinnerContext from "./SpinnerContext";

function App() {

    const [user, setUser] = useState("admin");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {

            api.get('user')
                .then((res) => setUser(() => res.data))
                .catch(console.error);
        }
    }, [])

    return (
        <>
            {
                !user ? <Login/> : (
                <SpinnerContext.Provider value={{loading, setLoading}}>
                    <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="todos" element={<TodoList/>}/>
                            <Route path="cards" element={<AlbumGridMainPage/>}/>
                            <Route path="*" element={<div>page not found</div>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>

                </SpinnerContext.Provider>

                    // <UserContext.Provider value={user}> <TodoList/> </UserContext.Provider>
                )
            }
        </>
    );
}

export default App;
