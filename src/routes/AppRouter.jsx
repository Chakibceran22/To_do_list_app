import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import AuthPages from "../components/AuthPages";
import Login from "../components/Login";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/auth" element={<AuthPages />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}
export default AppRouter;