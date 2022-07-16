import React, {useContext, useEffect, useState} from "react";
import TodoList from "./todo/src/TodoList";
import AlbumGridMainPage from "./cards/src/AlbumGridMainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import api from "./api";
import Layout from "./Layout";
import Spinner from "./SpinnerContext";


function App() {

    const [user, setUser] = useState("admin");
    const [loading, setLoading] = useState(false);

    useContext(Spinner);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoading(true);
            api.get('user')
                .then((res) => setUser(() => res.data))
                .catch(console.error);
            setLoading(false);
        }
    }, [])

    return (
        <>
            {
                !user ? <Login/> : (
                <Spinner.Provider value={loading}>
                    <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="todos" element={<TodoList/>}/>
                            <Route path="cards" element={<AlbumGridMainPage/>}/>
                            <Route path="*" element={<div>page not found</div>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
                </Spinner.Provider>

                    // <UserContext.Provider value={user}> <TodoList/> </UserContext.Provider>
                )
            }
        </>
    );
}

export default App;
