import React from "react";
import ToDo from "./components/ToDo/ToDo";
import About from "./components/About/About";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';


export default function App() {
        return (<>
            <Router>
                <Routes>
                    <Route path="/" element = {<ToDo/>}/>
                    <Route path = "/about" element = {<About/>}/>
                    {/* <Route path="/tasks" element = {json}/> */}
                    <Route path = "*" element = {<NotFoundPage/>}/>
                </Routes>
            </Router>
            </>)

}