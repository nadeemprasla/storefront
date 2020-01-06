import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from './actions/authActions'



class Main extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>

        );
    }
}


ReactDOM.render(<Main />, document.getElementById("root"));