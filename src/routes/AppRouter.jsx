//approuter
import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import Login from "../components/Login";
import Signeup from "../components/Signeup";
import NotFound from "../components/NotFound";
import ForgotPassword from "../components/ForgetPasswordPage";





const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList  />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/signup" element={<Signeup />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
                

            </Routes>
        </Router>
    );
}
export default AppRouter;