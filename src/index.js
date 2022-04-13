import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route index element={<App/>}/>
            <Route path={"/Contact"} element={<h1>ESSA</h1>}/>
            <Route path={"/*"} element={<h1>404 not found</h1>}/>
        </Routes>
    </Router>,

);

