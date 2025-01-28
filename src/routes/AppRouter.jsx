import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import AuthPages from "../components/AuthPages";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/auth" element={<AuthPages />} />
            </Routes>
        </Router>
    );
}
export default AppRouter;