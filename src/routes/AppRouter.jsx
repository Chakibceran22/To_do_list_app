//approuter
import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import AuthPages from "../components/AuthPages";
import Login from "../components/Login";
import Signeup from "../components/Signeup";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebaseAuth";



const AppRouter = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoList  />} />
                <Route path="/auth" element={<AuthPages />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/signup" element={<Signeup />} />

            </Routes>
        </Router>
    );
}
export default AppRouter;