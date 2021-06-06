import "./App.less"
import React, {Component} from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        let routers = [{
            name: "default",
            to: "/"
        }, {
            name: "首页",
            to: "/home"
        }, {
            name: "登录",
            to: "/login"
        }];
        return (
            <Router>
                <div className="App">
                    <ul>
                        {routers.map((i, x) => {
                            return <li>
                                <Link key={x} to={i.to}>
                                    {i.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </Router>
        )
    }
}

export default App;
