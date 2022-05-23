import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Submit from "./Views/Submit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
