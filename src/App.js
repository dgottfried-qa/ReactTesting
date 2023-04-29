import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./login/Login"
import Homepage from "./homepage/Homepage"
import React from 'react';
import LoggedIn from "./logged_in/Logged_In";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logged-in" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App