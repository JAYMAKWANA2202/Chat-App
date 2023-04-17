import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Component/Navbar/Header";
import Chat from "../pages/Chat";
import Error from "../pages/Error";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Router() {
    const { currentuser } = useContext(AuthContext);
    console.log("currentuser: ", currentuser);

    const ProtectedRoute = ({ children }) => {
        if (!currentuser) {
            return <Navigate to="/" />;
        }
        return children;
    };

    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route
                path="/chat"
                element={
                    <ProtectedRoute>
                        <Chat />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default Router;
