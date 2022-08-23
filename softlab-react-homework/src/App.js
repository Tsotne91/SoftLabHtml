import React, {useEffect, useState} from "react";
import TodoList from "./todo/src/TodoList.js";
import AlbumGridMainPage from "./cards/src/AlbumGridMainPage.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login.js";
import api from "./api.js";
import Layout from "./Layout.js";
import SpinnerContext from "./SpinnerContext.js";

function App() {

    const [user, setUser] = useState("");
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
