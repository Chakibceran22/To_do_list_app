//approuter
import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import Login from "../components/Login";
import Signeup from "../components/Signeup";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebaseAuth";
import NotFound from "../components/NotFound";
import ForgotPassword from "../components/ForgetPasswordPage";
import ResetPassword from "../components/ResetPasswordPage";





const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList  />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/signup" element={<Signeup />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} />
                <Route path="/reset" element={<ResetPassword/>}></Route>
                

            </Routes>
        </Router>
    );
}
export default AppRouter;