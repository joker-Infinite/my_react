import React from "react"
import {HashRouter, Router, Redirect, Switch} from "react-router-dom";
import Home from "../home"

class RouterMap extends Component {
    render() {
        return {
        <HashRouter>
            <Router path="/home"/>
        </HashRouter>
    }
    }
}