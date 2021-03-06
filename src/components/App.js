// npm add react-router-dom@5.3.0
// npm i react-dom@17.0.2
// npm i react@17.0.2

import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
    return (

        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" exact component={Detail}></Route>
        </Router>
    );
}

export default App;