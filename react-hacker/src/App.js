import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Submit from "./Views/Submit";
import Newest from "./Views/Newest";
import UserInfo from "./Views/UserInfo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<Submit />} />
          <Route path='/newest' element={<Newest />} />
          <Route path='/users'>
            <Route
              path=':userId'
              element={<UserInfo username='Pablo Martínez Celdrán' info='main' />}
            />
            <Route
              path=':userId/submissions'
              element={<UserInfo username='Pablo Martínez Celdrán' info='subs' />}
            />
            <Route
              path=':userId/comments'
              element={<UserInfo username='Pablo Martínez Celdrán' info='comms' />}
            />
            <Route
              path=':userId/LikedSubmissions'
              element={<UserInfo username='Pablo Martínez Celdrán' info='lsubs' />}
            />
            <Route
              path=':userId/LikedComments'
              element={<UserInfo username='Pablo Martínez Celdrán' info='lcomms' />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
